import React from 'react';
import PropTypes from 'prop-types';
import mxgraph from 'mxgraph';
import './Thumbnail.less';

const { mxGraph, mxClient, mxEvent, mxUtils, mxCellRenderer, mxThumbnail, mxRectangle, mxEventObject, mxConstants } = mxgraph();

// 自定义图形渲染器
function ImageShape() {}
ImageShape.prototype = new mxRectangleShape();
ImageShape.prototype.constructor = ImageShape;
mxCellRenderer.registerShape('image', ImageShape);

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.graphRef = React.createRef();
    this.thumbnailRef = React.createRef();
    this.graph = null;
    this.thumbnail = null;
  }

  componentDidMount() {
    this.initGraph();
    this.initThumbnail();
  }

  initGraph() {
    const { containerId } = this.props;

    this.graph = new mxGraph(document.getElementById(containerId));

    // 添加自定义配置或设置
    // this.graph.setGridEnabled(true);

    // 添加事件监听器
    this.graph.getModel().addListener(mxEvent.CHANGE, this.graphChangeHandler);
  }

  initThumbnail() {
    const { containerId } = this.props;

    this.thumbnail = new mxThumbnail(this.graph, document.getElementById(containerId));
    this.thumbnail.bounds = new mxRectangle(0, 0, 200, 150);
    this.thumbnail.updateThumbnail();
  }

  graphChangeHandler = (sender, evt) => {
    this.thumbnail.updateThumbnail();
  };

  render() {
    const { containerId } = this.props;
    return (
      <div>
        <div id={containerId} className="graph-container" ref={this.graphRef}></div>
        <div className="thumbnail-container">
          <div ref={this.thumbnailRef}></div>
        </div>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default Thumbnail;
