// components/PropertyPanel.tsx
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Input, Row, Divider, Icon } from 'antd';
import "./propertyPanel.less"; // 换成你的样式文件路径

const { Sider, Content } = Layout;

const PropertyPanel = () => {
  console.log("PropertyPanel")
  const [showContent, setShowContent] = useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuClick = (menuItem) => {
    console.log("handleMenuClick", menuItem)
    if (menuItem === selectedMenuItem) {
      // 如果点击的是当前已选中的 menuItem，切换显示状态
      setShowContent(!showContent);
    } else {
      // 如果点击的是不同的 menuItem，保持之前的显示状态
      setSelectedMenuItem(menuItem);
      setShowContent(true);
    }
  };

  useEffect(() => {
    console.log("showContent", showContent)
  }, [showContent])

  return (
    <div className={"container"} style={{ background: '#fff', borderRadius: '4px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: showContent ? 'flex' : ""}}>
      <Sider theme="light" width={60} style={{ borderRight: '1px solid #e8e8e8', width: "60px", height: "800px", boxSizing: "border-box" }}>
        <div mode="vertical" style={{ height: '100%', borderRight: 'none' }}>
          <div key="basic" style={{ padding: "0px 8px 0 16px", width: "50px", textAlign: "center" }} onClick={() => handleMenuClick("basic")}>
            <Icon type="user" />
          </div> 
          <div key="details" style={{ padding: "0px 8px 0 16px", width: "50px", textAlign: "center" }} onClick={() => handleMenuClick("details")}>
            <Icon type="edit" />    
          </div>
          <div key="config" style={{ padding: "0px 8px 0 16px", width: "50px", textAlign: "center" }} onClick={() => handleMenuClick("config")}>
            <Icon type="setting" />
          </div>
          <div key="trend" style={{ padding: "0px 8px 0 16px", width: "50px", textAlign: "center" }} onClick={() => handleMenuClick("trend")}>
            <Icon type="line-chart" />
          </div>
        </div>
      </Sider>
      <Content style={{ padding: '10px', flex: 1 }}>
        <div>
          {selectedMenuItem === 'basic' && (
            <div>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>基本信息</span>
                </div>
              </Row>
              {/* 在这里可以展示基本信息的具体内容 */}
            </div>
          )}
          {selectedMenuItem === 'details' && (
            <div>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>详情信息</span>
                </div>
              </Row>
              {/* 在这里可以展示详情信息的具体内容 */}
            </div>
          )}
          {selectedMenuItem === 'config' && (
            <div>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>配置信息</span>
                </div>
              </Row>
              {/* 在这里可以展示配置信息的具体内容 */}
            </div>
          )}
          {selectedMenuItem === 'trend' && (
            <div>
              <Row style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div className={"content-item-title"}>
                  <span>变化趋势</span>
              </div>
            </Row>
              {/* 在这里可以展示变化趋势的具体内容 */}
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default PropertyPanel;
