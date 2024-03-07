import React from 'react';
import { message, Layout, Icon } from 'antd';
import mxgraph from 'mxgraph'; // 导入 mxgraph 库
import Sidebar from './sidebar';
import Scalebar from './scalebar';
import Toolbar from './toolbar';
import Editor from '../../src/editor';
import PropertyPanel from './propertyPanel';
import IMAGE_SHAPES from '../shape-config/image-shape';
import NETWORK_SHAPES from '../shape-config/network-shape';
import './my-editor.less';
import { contentDemoSvg, contentDemo } from './constants'

const { Header, Sider, Content } = Layout;

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
      svgElement: null, // 初始化为null
      type: '' // 当前的模式
    };

    this.graphContainerClickCount = 0;
  }

  componentDidMount() {

    console.log("componentDidMount", window.location.href)

    // 对当前的url做处理
    // 获取当前 URL 中的查询参数
    const urlParams = new URLSearchParams(window.location.search);

    // 检测是否存在 type 属性
    if (urlParams.has('type')) {
      // 获取 type 属性的值
      const typeValue = urlParams.get('type');
      console.log('type 属性的值为:', typeValue);
      this.setState({ type: typeValue });

      // 将contentDemoSvg的内容添加到class为graph-content的div内
      const graphContentDiv = document.querySelector('.graph-content');
      if (graphContentDiv) {
        graphContentDiv.innerHTML = contentDemoSvg;

        // 添加点击事件处理程序
        graphContentDiv.addEventListener('click', this.handleNodeClick);
      }
    } else {
      console.log('URL 中不包含 type 属性');
    }

    // const graphContentDiv = document.querySelector('.graph-content');
    // if (graphContentDiv) {
    //   graphContentDiv.innerHTML = contentDemoSvg;
    // }

    this.mounted = true;

    const editor = new Editor({
      container: '.graph-content',
      clickFunc: this.clickFunc,
      doubleClickFunc: this.doubleClickFunc,
      autoSaveFunc: this.autoSaveFunc,
      cellCreatedFunc: this.cellCreatedFunc,
      deleteFunc: this.deleteFunc,
      undoFunc: this.undoFunc,
      copyFunc: this.copyFunc,
      valueChangeFunc: this.valueChangeFunc,
      IMAGE_SHAPES,
      NETWORK_SHAPES,
    });

    this.editor = editor;

    window.editor = editor;

    editor.initCustomPort('https://gw.alicdn.com/tfs/TB1PqwZzzDpK1RjSZFrXXa78VXa-200-200.png');

    this.setState({ editor });

    // this.fetchGraphData();
  }

  componentWillUnmount() {
    this.mounted = false;

    // remove event listeners when component will unmount
    this.editor.removeEventListeners();
  }

  /**
   * double click event callback
   */
  doubleClickFunc = (cell) => {
    console.log('double click', cell);
  };

  cellCreatedFunc = (currentCell) => {
    const allCells = this.editor.getAllCells();
  
    let sameShapeNameCount = 0;
    const { shapeName } = currentCell;
  
    allCells
      && Object.keys(allCells).forEach((index) => {
        if (allCells[index].shapeName === shapeName) {
          sameShapeNameCount += 1;
        }
      });
  
    const labelName = currentCell.value;
  
    // Generate unique ID using timestamp
    const timestamp = Date.now();
    const uniqueId = `${labelName}${sameShapeNameCount}_${timestamp}`;
  
    this.editor.renameCell(uniqueId, currentCell);
  };
  

  deleteFunc = (cells) => {
    console.log('cells deleted: ', cells);
  };

  /**
   * value change callback
   * @param {*} cell cell
   * @param {*} newValue new value
   */
  valueChangeFunc = (cell, newValue) => {
    console.log(`new value: ${newValue}`);
  };

  autoSaveFunc = (xml) => {
    window.autosaveXml = xml;

    const oParser = new DOMParser (); // eslint-disable-line
    const oDOM = oParser.parseFromString(xml, 'application/xml');

    window.autoSaveXmlDom = oDOM;
    console.log("autoSaveFunc", xml)

    window.localStorage.setItem('autosaveXml', xml);
  };

  clickFunc = (cell) => {
    console.log('click', cell);
  };

  // undoFunc = (histories) => {
  //   console.log('undo', histories);
  // }

  // copyFunc = (cells) => {
  //   console.log('copy', cells);
  // }

  updateDiagramData = (data) => {
    console.log(`update diagram: ${data}`);
  }

  goBackCenter = () => {
    window.open(`http://localhost:3030`, "_blank")
  }
  
  // 图形中元素的点击事件
  handleNodeClick = (event) => {
    console.log("event", event.target.tagName)
    // 判断点击的是不是 g 标签
    if (event.target.tagName === 'image') {
        // // 获取具体的 g 元素，可以在这里执行你想要的操作
        const clickedNode = event.target;
        console.log('Clicked on node:', clickedNode);
        const parentNode = event.target.parentNode;
        console.log('Parent on node:', parentNode); 
    }
  }

  render() {
    const { editor, type } = this.state;

    return (
      <div className="editor-container">
        <Header className="header">
          <div className="header-icon" onClick={() => this.goBackCenter()}>
            <Icon type="left" />
          </div>
          <div className="header-title">
            <span>{"Ai服务地铁图"}</span>
            <Icon type="caret-down" />
          </div>
        </Header>
        <Layout>
          {
            type !== 'check' && (
              <Sider width="50" theme="light" style={{ background: "#F7F8FA" }}>
                <Sidebar key="sidebar" editor={editor} />
              </Sider>
            )
          }
          <Content>
            <div className="graph-inner-container">
            { 
            type !== 'check' && (
              <div>
                <Toolbar editor={editor} updateDiagramData={this.updateDiagramData} />
                {editor ? (
                  <Scalebar
                    editor={editor}
                  />
                ) : null}
              </div>
            )
            }
              <div className="graph-content" key="graphcontent">
                {/* <div>{contentDemoSvg}</div> */}
              </div>
            </div>
          </Content>
          {
            type !== 'check' && (
              <Sider width="50" theme="light" style={{ background: "#F7F8FA" }}>
                <PropertyPanel key="propertypanel" editor={editor} />
              </Sider>
            )
          }
        </Layout>
      </div>
    );
  }
}

export default MyEditor;
