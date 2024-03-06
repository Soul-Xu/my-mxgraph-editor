import React, { useState } from 'react'
import { Tabs, Button, Input } from 'antd'
import './index.less'
import { contentDetailSvg } from '../../../editor/constants';
import ImgCenterIcon from '../../../../resources/images/center-icon.png'
const { TabPane } = Tabs;

const MainInfo = () => {
  const [activeTab, setActiveTab] = useState('1')

  const callback = (key) => {
    setActiveTab(key)
  }

  const operations = [
    <Button type='link'>服务上下游</Button>,
    <Button type='link'>相关链路</Button>,
    <Button type='link'>相关日志</Button>
  ]

  const iconList = [
    {
      icon: ('../../../../resources/images/active-icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
    {
      icon: ('../../../../resources/images/icon.png'),
      text: '21.458.69'
    },
  ]

  const functionList = [
    {
      key: 'fun1',
      name: '功能号1',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun2',
      name: '功能号2',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun3',
      name: '功能号3',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun4',
      name: '功能号4',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun5',
      name: '功能号5',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun6',
      name: '功能号6',
      iconTag: '告警',
      bgColor: '#E62828'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },

    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },

    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },

    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
        {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
    {
      key: 'fun7',
      name: '功能号7',
      iconTag: '正常',
      bgColor: '#24B87A'
    },
  ]

  const renderContent = () => {
    return (
      <div className='content'>
        <div className='content-graph'>
          <div className='graph-content' dangerouslySetInnerHTML={{ __html: contentDetailSvg }} >
          </div>
        </div>
        <div className='content-information'>
          <div className='informaiton-header'>
            <div className='information-header-title'>
              <span>主机层</span>
            </div>
            <div className='information-header-text'>
              <div className='header-text'>总量</div>
              <div className='header-value'>7</div>
            </div>
            <div className='information-header-text'>
              <div className='header-text'>异常数</div>
              <div className='header-value' style={{ color: '#FA8C16' }}>1</div>
            </div>
            <div className='information-header-text'>
              <div className='header-text'>健康数</div>
              <div className='header-value' style={{ color: '5' }}>5</div>
            </div>
          </div>
          <div className='information-content'>
            <div className='information-content-icons'>
              <div className='content-icons-header'>
                <div className='header-left'>
                  <span className='header-right-key'>Vcenter</span>
                  <span className='header-right-value'>（ <span style={{ color: 'red' }}>1</span> / 12 ）</span>
                </div>
                <div className='header-right'>
                  <Button type="link">查看全部</Button>
                </div>
              </div>
              <div className='content-icons-list'>
                {
                  iconList.map((icon, index) => {
                    return (
                      <div className='icons-list-item' key={index}>
                        <div className='icons-item-image'>
                          <img src={icon.icon} alt="" />
                        </div>
                        <div className='icons-item-text'>
                          {icon.text}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderFunc = () => {
    return (
      <div className='function-wall'>
      <div className='function-search'>
        <div className='function-search-input'>
          <Input placeholder="请输入功能名称" />
        </div>
        <div className='function-search-info'>
          <div className='search-info-item'>
            <div className='info-item-text'>功能号总数</div>
            <div className='info-item-no' style={{ color: '#202D40' }}>30</div>
          </div>
          <div className='search-info-item'>
            <div className='info-item-text'>健康数</div>
            <div className='info-item-no' style={{ color: '#24B87A' }}>24</div>
          </div>
          <div className='search-info-item'>
            <div className='info-item-text'>异常数</div>
            <div className='info-item-no' style={{ color: '#FA8C16' }}>2</div>
          </div>
          <div className='search-info-item'>
            <div className='info-item-text'>告警总数</div>
            <div className='info-item-no' style={{ color: '#E62828' }}>4</div>
          </div>
        </div>
      </div>
      <div className='function-list'>
        {
          functionList.map((func) => {
            return (
              <div className='function-item' key={func.key}>
                <div className='function-item-center'>
                  <div className='function-item-in'>
                    <img src={ImgCenterIcon} />
                  </div>
                </div>
                <div className='function-item-tag' style={{ background: func.bgColor }}>
                  {func.iconTag}
                </div>
                <div className='function-item-text'>{func.name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
    )
  }

  return (
    <div className='main-container'>
      <Tabs 
        defaultActiveKey="1" 
        style={{ padding: '0 24px' }} 
        onChange={callback}
        tabBarExtraContent={operations}
      >
        <TabPane tab="服务部署架构" key="1">
          {renderContent()}
        </TabPane>
        <TabPane tab="功能号墙" key="2">
          {renderFunc()}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default MainInfo