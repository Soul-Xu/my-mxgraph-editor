// components/PropertyPanel.tsx
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Input, Row, Divider, Icon } from 'antd';
import "./propertyPanel.less"; // 换成你的样式文件路径
/** components */
import BasicInfo from './information/basic';
import DetailInfo from './information/detail';

const { Sider, Content } = Layout;

const PropertyPanel = () => {
  const [showContent, setShowContent] = useState(false)
  const [activeIcon, setActiveIcon] = useState('basic');

  const handleIconClick = (menuItem) => {
    if (menuItem === activeIcon) {
      // 如果点击的是当前已选中的 menuItem，切换显示状态
      setShowContent(!showContent);
    } else {
      // 如果点击的是不同的 menuItem，保持之前的显示状态
      setActiveIcon(menuItem);
      setShowContent(true)
    }
  };

  return (
    <div className={"container"} style={{ background: '#fff', borderRadius: '4px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: showContent ? 'flex' : ""}}>
      <Sider theme="light" width={50} style={{ borderRight: '1px solid #e8e8e8', width: "50px", boxSizing: "border-box" }}>
        <div mode="vertical" style={{ height: '100%', borderRight: 'none' }}>
          <div className={activeIcon === 'basic' ? "icon-item-active" : "icon-item"} key="basic" onClick={() => handleIconClick("basic")}>
            <Icon size={50} type="user" />
          </div> 
          <div className={activeIcon === 'details' ? "icon-item-active" : "icon-item"} key="details" onClick={() => handleIconClick("details")}>
            <Icon size={50} type="edit" />    
          </div>
          <div className={activeIcon === 'config' ? "icon-item-active" : "icon-item"} key="config" onClick={() => handleIconClick("config")}>
            <Icon size={50} type="setting" />
          </div>
          <div className={activeIcon === 'trend' ? "icon-item-active" : "icon-item"} key="trend" onClick={() => handleIconClick("trend")}>
            <Icon size={50} type="line-chart" />
          </div>
        </div>
      </Sider>
      {
        showContent && <div>
        <div>
          {activeIcon === 'basic' && (
            <div className='item-content'>
              <BasicInfo />
            </div>
          )}
          {activeIcon === 'details' && (
            <div className='item-content'>
              <DetailInfo />
            </div>
          )}
          {activeIcon === 'config' && (
            <div className='item-content'>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>配置信息</span>
                </div>
              </Row>
              {/* 在这里可以展示配置信息的具体内容 */}
            </div>
          )}
          {activeIcon === 'trend' && (
            <div className='item-content'>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>变化趋势</span>
              </div>
            </Row>
              {/* 在这里可以展示变化趋势的具体内容 */}
            </div>
          )}
        </div>
      </div>
      }
    </div>
  );
};

export default PropertyPanel;
