import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Tooltip, Icon } from 'antd';
import IMAGE_SHAPES from './shape-config/image-shape';
import NETWORK_SHAPES from './shape-config/network-shape'

import './sidebar.less';

const { Panel } = Collapse;

const SIDEBAR_BASIC_SHAPES = [
  {
    name: 'rectangle',
    key: 'Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB19O8OokvoK1RjSZFNXXcxMVXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'rounded rectangle',
    key: 'Rounded Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB1rzVHojDpK1RjSZFrXXa78VXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'trapezoid',
    key: 'Trapezoid',
    logo: 'https://img.alicdn.com/tfs/TB1nEXPokvoK1RjSZPfXXXPKFXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'circle',
    key: 'Circle',
    logo: 'https://img.alicdn.com/tfs/TB15iXQogHqK1RjSZFkXXX.WFXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'triangle',
    key: 'Triangle',
    logo: 'https://img.alicdn.com/tfs/TB1cxNKohTpK1RjSZR0XXbEwXXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'line',
    key: 'Line',
    logo: 'https://img.alicdn.com/tfs/TB1LOxPoirpK1RjSZFhXXXSdXXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'text',
    key: 'Text',
    logo: '',
    width: 60,
    height: 20,
  }
];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "app",
      showCollapsIcon: false
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    this.handleSidebarItems();
  }

  handleSidebarItems() {
    const { editor } = this.props;

    if (editor && editor.initSidebar) {
      const sidebarItems = document.querySelectorAll('.custom-sidebar-node');

      const newSidebarItems = Array.from(sidebarItems).filter((item) => {
        if (!item.classList.contains('has-inited')) {
          item.classList.add('has-inited');
          return true;
        }
        return false;
      });

      editor.initSidebar(newSidebarItems);
    }
  }

  onChange() {
    setTimeout(() => {
      this.handleSidebarItems();
    }, 1000);
  }

  onHandleClickMenuItem(type) {
    if (type === 'app') {
      this.setState(prevState => ({
        showCollapsIcon: !prevState.showCollapsIcon
      }));
    }
  }

  render() {
    const { activeMenu, showCollapsIcon } = this.state
    // console.log("NETWORK_SHAPES", NETWORK_SHAPES)

    return (
      <div className="container">
        <div className="sidebar-menu">
          <div 
            className={activeMenu === "app" ? "menu-item-active" : "menu-item"} 
            onClick={() => this.onHandleClickMenuItem("app")}>
            <Tooltip key="appstore" title="图标" placement="right">
              <Icon type="appstore" />
            </Tooltip>
          </div>
          <div 
            className={activeMenu === "bars" ? "menu-item-active" : "menu-item"} 
            onClick={this.onHandleClickMenuItem("bars")}
            style={{ position: "absolute", top: "50px" }}
          >
            <Icon type="bars" />
          </div>
        </div>
        { showCollapsIcon && 
          <div className="sidebar-container">
            <Collapse
              bordered={false}
              defaultActiveKey={['common', 'svg', 'picture', 'card']}
              onChange={() => {
                this.onChange();
              }}
            >
              <Panel key="common" header="基本">
                {SIDEBAR_BASIC_SHAPES.map(shape => (
                  <a
                    href="javascript:void(0);"
                    key={`panel_a_${shape.key}`}
                    className="geItem custom-sidebar-node common-panel-node"
                    data-shape-type="general"
                    data-shape-name={shape.key}
                    data-shape-label={shape.name}
                    data-shape-width={shape.width}
                    data-shape-height={shape.height}
                  >
                    <Tooltip
                      placement="top"
                      title={shape.name}
                      key={`panel_${shape.key}`}
                      className="tooltip"
                    >
                      {shape.logo ? <img className="sidebar-node-image" src={shape.logo} alt="" /> : shape.key}
                      <span className="sidebar-node-label">
                        {shape.name}
                      </span>
                    </Tooltip>
                  </a>
                ))}
              </Panel>
              <Panel header="图形" key="picture">
                {IMAGE_SHAPES.map(shape => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    key={`panel_a_${shape.key}`}
                    href="a"
                    className="geItem custom-sidebar-node"
                    data-shape-type="image"
                    data-shape-width={shape.width}
                    data-shape-height={shape.height}
                    data-shape-name={shape.key}
                    data-shape-label={shape.name}
                    title={shape.name}
                  >
                    <Tooltip
                      placement="top"
                      title={shape.name}
                      key={`panel_${shape.key}`}
                      className="tooltip"
                    >
                      <img className="sidebar-node-image" src={shape.logo} alt="" />
                      <span className="sidebar-node-label">
                        {shape.name}
                      </span>
                    </Tooltip>
                  </a>
                ))}
  
              </Panel>
              {/* <Panel header="网络拓扑图" key="network">
                {NETWORK_SHAPES.map(shape => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    key={`panel_a_${shape.key}`}
                    href="a"
                    className="geItem custom-sidebar-node"
                    data-shape-type="image"
                    data-shape-width={shape.width}
                    data-shape-height={shape.height}
                    data-shape-name={shape.key}
                    data-shape-label={shape.name}
                    title={shape.name}
                  >
                    <Tooltip
                      placement="top"
                      title={shape.name}
                      key={`panel_${shape.key}`}
                      className="tooltip"
                    >
                      <img className="sidebar-node-image" src={shape.logo} alt="" />
                      <span className="sidebar-node-label">
                        {shape.name}
                      </span>
                    </Tooltip>
                  </a>
                ))}
  
              </Panel> */}
            </Collapse>
          </div>
        }
      </div>
    );
  }
}

SideBar.propTypes = {
  editor: PropTypes.object,
};

// Specifies the default values for props:
SideBar.defaultProps = {
  editor: {},
};

