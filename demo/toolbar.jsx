import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { message, Tooltip } from 'antd';
import mxgraph from 'mxgraph'

import './toolbar.less';

const userGuideText = 'group the cells selected';

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { editor, updateDiagramData } = this.props

    const onSave = () => {
      const xml = editor.getGraphXml(); // 获取当前画布的 XML 信息，这里假设有一个名为 getGraphXml 的方法来获取 XML
      console.log('XML:', xml);
    
      // 将 XML 转换为 JSON
      const json = parseXmlToJson(xml);
      console.log('JSON object:', json);
      console.log('JSON:', JSON.stringify(json));
    }

    const parseXmlToJson = (xml) => {
      const xmlDoc = new DOMParser().parseFromString(xml, 'text/xml');
      const root = xmlDoc.getElementsByTagName('root')[0];
      const cells = root.getElementsByTagName('mxCell');
    
      const json = {
        cells: []
      };
    
      const edges = {}; // 用于存储连线信息
    
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
    
        const id = cell.getAttribute('id') || '';
        const value = cell.getAttribute('value') || '';
        const style = cell.getAttribute('style') || '';
        const vertex = cell.getAttribute('vertex') || '';
    
        const geometry = cell.getElementsByTagName('mxGeometry')[0];
        let geometryData = {};
        if (geometry) {
          geometryData = {
            x: geometry.getAttribute('x') || '',
            y: geometry.getAttribute('y') || '',
            width: geometry.getAttribute('width') || '',
            height: geometry.getAttribute('height') || ''
          };
        }
    
        const shapeName = cell.getAttribute('shapeName');
    
        // 检查是否为连线
        const edge = cell.getAttribute('edge');
        if (edge === '1') {
          const source = cell.getAttribute('source');
          const target = cell.getAttribute('target');
    
          // 获取源节点和目标节点的值
          const sourceNodeValue = xmlDoc.querySelector(`mxCell[id='${source}']`).getAttribute('value');
          const targetNodeValue = xmlDoc.querySelector(`mxCell[id='${target}']`).getAttribute('value');
    
          // 构建连线的ID
          const edgeId = `${sourceNodeValue}-${targetNodeValue}`;
    
          edges[edgeId] = {
            source: sourceNodeValue,
            target: targetNodeValue
          };
        } else if (shapeName !== null) {
          const cellData = {
            id,
            value,
            style,
            vertex,
            shapeName,
            geometry: geometryData
          };
          json.cells.push(cellData);
        }
      }
    

      // 计算连线的源和目标坐标
      Object.entries(edges).forEach(([edgeId, edge]) => {

        console.log("edge", edgeId, edge)
        // 查找起点和终点节点信息
        const sourceNode = json.cells.find(cell => cell.value === edge.source);
        const targetNode = json.cells.find(cell => cell.value === edge.target);
    
        if (sourceNode && targetNode) {
          // 计算起点和终点坐标
          const sourceX = parseFloat(sourceNode.geometry.x) + parseFloat(sourceNode.geometry.width) / 2;
          const sourceY = parseFloat(sourceNode.geometry.y) + parseFloat(sourceNode.geometry.height) / 2;
          const targetX = parseFloat(targetNode.geometry.x) + parseFloat(targetNode.geometry.width) / 2;
          const targetY = parseFloat(targetNode.geometry.y) + parseFloat(targetNode.geometry.height) / 2;
    
          json.cells.push({
            id: edgeId,
            source: { x: sourceX, y: sourceY },
            target: { x: targetX, y: targetY },
            style: 'edgeStyle' // 你可能需要为连线设置一个样式
          });
        }
      });
    
      return json;
    };
    
    
    
    return (
      <div className="container">
        <div key="toolbtn" className="toolbtn">
          <div
          className="toolbar-btn-new"
          onClick={() => {
            const diagramXml = window.localStorage.getItem('autosaveXml');
            updateDiagramData(diagramXml);
          }}
        >
          <span>新建服务节点</span>
        </div>
        <div
          className="toolbar-btn"
          onClick={() => onSave()}
        >
          <span>保存</span>
        </div>
        <div
          className="toolbar-btn"
          onClick={() => {
          
          }}
        >
          <span>关闭</span>
        </div>
        </div>
        <div className="thumbnail"></div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  updateDiagramData: PropTypes.func,
};

// Specifies the default values for props:
Toolbar.defaultProps = {
  updateDiagramData: () => {},
};

export default Toolbar;

