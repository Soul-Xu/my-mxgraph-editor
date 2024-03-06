import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { message, Tooltip } from 'antd';
import SaveGraph from './modal/save';
import domtoimage from 'dom-to-image'; // 添加dom-to-image库的引用
import mxgraph from 'mxgraph'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './toolbar.less';

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSaveGraph: false,
      graphImage: null // 添加用于存储图像的状态
    };
  }

  render() {
    const { editor, updateDiagramData } = this.props
    const { showSaveGraph, graphImage } = this.state;

    const onSave = () => {
      const xml = editor.getGraphXml(); // 获取当前画布的 XML 信息，这里假设有一个名为 getGraphXml 的方法来获取 XML
      console.log('XML:', xml);

      // 获取 SVG 内容
      const svgElement = document.querySelector('.graph-content svg');
      if (svgElement) {
        const svgContent = svgElement.innerHTML;
        console.log('SVG Content:', svgContent);
        // return svgContent;
      } else {
        console.error('SVG element not found');
        // return null;
      }

      // 在这里你可以对 SVG 内容进行进一步处理，比如保存到文件或发送到服务器
      this.setState({ showSaveGraph: true });
    }

    // 可以生成图片，基础图形可以生成图片，但是带有图标的则不能显示图标
    const onSaveGraph = () => {
      const container = document.querySelector('.graph-content');
      if (!container) {
        console.error('Graph container not found');
        return;
      }

      // 创建一个<svg>容器
      const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgContainer.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgContainer.setAttribute('width', '600');
        svgContainer.setAttribute('height', '400');

        // 从DOM结构中获取<g>标签内容，并插入到<svg>容器中
        const gElements = container.querySelectorAll('g');
        gElements.forEach(gElement => {
          svgContainer.appendChild(gElement.cloneNode(true));
        });

        // 将<svg>容器插入到DOM中
        container.appendChild(svgContainer);

        console.log("svgContainer", svgContainer)

        // 使用dom-to-image库将SVG转换为图像
        domtoimage.toPng(container, {
          crossOrigin: 'Anonymous'
        })
          .then((dataUrl) => {
            // 更新图像状态
            this.setState({
              graphImage: dataUrl
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
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
          <div className="toolbar-btn" onClick={() => onSaveGraph(editor)}>
            <span>生成图片</span>
          </div>
          <div
            className="toolbar-btn"
            onClick={() => {
            
            }}
          >
            <span>关闭</span>
          </div>
        </div>
        { showSaveGraph && (
          <SaveGraph 
            show={showSaveGraph} 
            onCancel={() => this.setState({ showSaveGraph: false })} 
            onSave={() => onSaveGraph()}
          />) }
        {graphImage && <img src={graphImage} alt="Graph" />} {/* 展示图像 */}
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

