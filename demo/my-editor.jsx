import React from 'react';
import { message, Layout, Icon } from 'antd';

import Sidebar from './sidebar';
import Scalebar from './scalebar';
import Toolbar from './toolbar';
import Editor from '../src/editor';
import PropertyPanel from './propertyPanel';

import IMAGE_SHAPES from './shape-config/image-shape';
import NETWORK_SHAPES from './shape-config/network-shape';
import CARD_SHAPES from './shape-config/card-shape';
import SVG_SHAPES from './shape-config/svg-shape.xml';

import './my-editor.less';

const { Sider, Content } = Layout;

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null
    };

    this.graphContainerClickCount = 0;
  }

  componentDidMount() {
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
      CARD_SHAPES,
      SVG_SHAPES
    });

    this.editor = editor;

    window.editor = editor;

    editor.initCustomPort('https://gw.alicdn.com/tfs/TB1PqwZzzDpK1RjSZFrXXa78VXa-200-200.png');

    const xml = window.localStorage.getItem('autosaveXml');

    this.editor.renderGraphFromXml(xml);

    this.setState({ editor });
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

  // id相同时
  // cellCreatedFunc = (currentCell) => {
  //   const allCells = this.editor.getAllCells();

  //   let sameShapeNameCount = 0;
  //   const { shapeName } = currentCell;

  //   allCells
  //     && Object.keys(allCells).forEach((index) => {
  //       if (allCells[index].shapeName === shapeName) {
  //         sameShapeNameCount += 1;
  //       }
  //     });

  //   const labelName = currentCell.value;

  //   this.editor.renameCell(`${labelName}${sameShapeNameCount}`, currentCell);
  // };

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

  undoFunc = (histories) => {
    console.log('undo', histories);
  }

  copyFunc = (cells) => {
    console.log('copy', cells);
  }

  updateDiagramData = (data) => {
    console.log(`update diagram: ${data}`);

    message.info('diagram save success');
  }

  render() {
    const { editor } = this.state;

    return (
      <div className="editor-container">
        {/* <div className="container-goback">
          <div>
            <Icon type="left" />
          </div>
        </div> */}
        <Layout>
          <Sider width="50" theme="light" style={{ background: "#F7F8FA" }}>
            <Sidebar key="sidebar" editor={editor} />
          </Sider>
          <Content>
            <div className="graph-inner-container">
            <Toolbar editor={editor} updateDiagramData={this.updateDiagramData} />
              {editor ? (
                <Scalebar
                  editor={editor}
                  // updateDiagramData={this.updateDiagramData}
                />
              ) : null}
              <div className="graph-content" key="graphcontent" />
            </div>
          </Content>
          <Sider width="50" theme="light" style={{ background: "#F7F8FA" }}>
            <PropertyPanel key="propertypanel" editor={editor} />
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default MyEditor;
