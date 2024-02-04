import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { message, Tooltip } from 'antd';

import './toolBtn.less';

const userGuideText = 'group the cells selected';

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

const Toolbar = ({ editor, updateDiagramData }) => {
  useEffect(() => {
    const graph = editor && editor.graph;
  }, [editor]);

    return (
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
          onClick={() => {
            const diagramXml = window.localStorage.getItem('autosaveXml');
            updateDiagramData(diagramXml);
          }}
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
    );
  
}

Toolbar.propTypes = {
  updateDiagramData: PropTypes.func,
};

// Specifies the default values for props:
Toolbar.defaultProps = {
  updateDiagramData: () => {},
};

export default Toolbar;