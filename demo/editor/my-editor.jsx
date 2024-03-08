import React from 'react';
import { message, Layout, Icon, Card, Button, List } from 'antd';
import mxgraph from 'mxgraph'; // 导入 mxgraph 库
import Sidebar from './sidebar';
import Scalebar from './scalebar';
import Toolbar from './toolbar';
import Editor from '../../src/editor';
import PropertyPanel from './propertyPanel';
import AddDrill from './modal/addDrill';
import IMAGE_SHAPES from '../shape-config/image-shape';
import NETWORK_SHAPES from '../shape-config/network-shape';
import './my-editor.less';
import { contentDemoSvg, contentDemo } from './constants'

const { Header, Sider, Content } = Layout;

const data = [
  'Mxgraph Demo2.',
];

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
      svgElement: null, // 初始化为null
      nodeText: '', // 节点文本
      type: '', // 当前的模式
      showCard: false, // 控制 Card 的显示与隐藏
      cardPosition: { left: 0, top: 0 }, // 记录 Card 的位置
      showAddDrill: false, // 控制添加钻取的模态框显示与隐藏
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

    // 将点击事件处理程序添加到图形容器上
    const graphContentDiv = document.querySelector('.graph-content');
    if (graphContentDiv) {
      graphContentDiv.addEventListener('click', this.handleNodeClick);
    }
  }

  componentWillUnmount() {
    this.mounted = false;

    // remove event listeners when component will unmount
    this.editor.removeEventListeners();

    // 移除点击事件处理程序
    const graphContentDiv = document.querySelector('.graph-content');
    if (graphContentDiv) {
      graphContentDiv.removeEventListener('click', this.handleNodeClick);
    }
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
    if (event.target.tagName === 'image') {
      // 获取父级 g 元素
      const parentNode = event.target.parentNode;

      // 获取同级的 g 元素
      const siblingGElement = parentNode.nextElementSibling;

      if (siblingGElement) {
        // 在同级的 g 元素中查找下一级的 g 元素
        const nextLevelGElement = siblingGElement.querySelector('g');
  
        if (nextLevelGElement) {
          // 在下一级的 g 元素中查找文本元素
          const textElement = nextLevelGElement.querySelector('text');
  
          if (textElement) {
            // 获取文本内容
            const textContent = textElement.textContent.trim();
  
            // 获取点击位置的坐标
            const { clientX, clientY } = event;
  
            // 更新状态，显示 Card，并设置 Card 的位置
            this.setState({
              showCard: true,
              cardPosition: { left: clientX, top: clientY },
              nodeText: textContent // 将文本内容存储到状态中
            });
          } else {
            console.log('Text element not found');
          }
        } else {
          console.log('Next level g element not found');
        }
      } else {
        console.log('Sibling g element not found');
      }
    }
  }

  // 关闭 Card
  closeCard = () => {
    this.setState({ showCard: false });
  };

  render() {
    const { editor, type, nodeText, showCard, cardPosition, showAddDrill } = this.state;

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
              {/* 在 Card 组件外部渲染悬浮框 */}
              {showCard && (
                <div style={{ position: 'fixed', left: cardPosition.left, top: cardPosition.top }}>
                  <Card
                    title="当前节点信息"
                    style={{ width: 300 }}
                    extra={<Icon type="close" onClick={this.closeCard} />} // 添加关闭按钮
                  >
                    <p>节点名称：{nodeText}</p>
                    <Button type='link' onClick={() => this.setState({ showAddDrill: true })}>添加钻取</Button>
                    <List
                      size="large"
                      // header={<div>Header</div>}
                      // footer={<div>Footer</div>}
                      style={{ cursor: 'pointer' }}
                      bordered
                      dataSource={data}
                      renderItem={item => <List.Item onClick={
                        () => {
                          window.open("http://localhost:8080/?detail")
                        }
                      }>{item}</List.Item>}
                    />
                  </Card>
                </div>
              )}
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
        { showAddDrill && <AddDrill show={showAddDrill} onOk={() => this.setState({showAddDrill: false})} onCancel={() => this.setState({showAddDrill: false})} /> }
      </div>
    );
  }
}

export default MyEditor;
