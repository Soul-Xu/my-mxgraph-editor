import React from 'react';
import PropTypes from 'prop-types';
import { message, Tooltip, Icon } from 'antd';

import './scalebar.less';

const userGuideText = 'group the cells selected';

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

class Scalebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: null,
    };
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    const { editor } = this.props;
    const graph = editor && editor.graph;

    if (graph) {
      // 添加缩放事件监听器
      graph.addListener(mxEvent.ZOOM, (sender, evt) => {
        // 在这里可以获取当前的缩放比例，并做相应的操作
        const scale = graph.view.scale;

        // 例如，可以将缩放比例打印到控制台
        this.setState({ scale }); // 使用 setState 更新组件的状态
      });
    }
  }

  render() {
    const {
      editor, updateDiagramData,
    } = this.props;

    const graph = editor && editor.graph;
    const { scale } = this.state;
  
    // 将缩放比例转换成百分比形式
    const scalePercentage = Math.round(scale * 100) + '%';

    return (
      <div key="toolbar" className="toolbar">
        <div
          className="toolbar-btn"
          onClick={() => {
            graph.zoomIn();
          }}
        >
          <Icon type="plus" />
        </div>
        <div className="toolbar-process">
          <span>{scalePercentage}</span>
        </div>
        <div
          className="toolbar-btn"
          onClick={() => {
            graph.zoomOut();
          }}
        >
          <Icon type="minus" />
        </div>
        <div
          className="toolbar-btn"
          onClick={() => {
            graph.zoomActual();
          }}
        >
          <Icon type="redo" />
        </div>
      </div>
    );
  }
}

Scalebar.propTypes = {
  updateDiagramData: PropTypes.func,
};

// Specifies the default values for props:
Scalebar.defaultProps = {
  updateDiagramData: () => {},
};

export default Scalebar;

