import React from 'react';
import { message, Layout, Icon, Select } from 'antd';
import BasicInfo from './information/basic';
import MainInfo from './information/main';
import Toolbox from './information/toolbox';

import './my-drill.less';
const { Header, Sider, Content } = Layout;

class MyDrill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { editor } = this.state;

    return (
      <div className="drill-container">
        <Layout>
          <Header className="header">
            <div className="header-icon">
              <Icon type="left" />
            </div>
            <div className="header-title">
              <span>{"Ai服务地铁图——PC交易二级IAR" + "(I"}</span>
              {/* <Select
                defaultValue="IAR(I"
                style={{ width: 120 }}
                allowClear
                options={[{ value: 'IAR(I', label: 'Ai服务地铁图——PC交易二级IAR(I' }]}
              /> */}
              <Icon type="caret-down" />
            </div>
          </Header>
          <Content className="content">
            <div className='content-basic'>
              <BasicInfo />
            </div>
            <div className='content-main'>
              <MainInfo />
            </div>
            <div className='content-tool'>
              <Toolbox />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MyDrill;
