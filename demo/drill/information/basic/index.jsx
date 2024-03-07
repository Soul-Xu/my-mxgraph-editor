import React, { useState } from 'react'
import { Divider, Icon } from 'antd';
import './index.less';
import GeneralInfo from '../general';
import HostInfo from '../host';
import SimpleLineChart from '../graph';

const BasicInfo = () => {
  const [showGeneral, setShowGeneral] = useState(false)
  const [showHost, setShowHost] = useState(false)

  const setGeneralInfo = () => {
    const show = showGeneral
    setShowGeneral(!show)
  }
  
  const setHostInfo = () => {
    const show = showHost
    setShowHost(!show)
  }

  return (
    <div>
      <div className='info-container'>
        <div className='info-box'>
          <div className='info-title'>
            <div className='info-title-icon'></div>
            <div className='info-title-text'>
              服务信息概要
            </div>
          </div>
          <div className='info-content'>
            <div className='info-content-item'>
              <div className='content-item-key'>服务名称</div>
              <div className='content-item-value'>客户中心服务</div>
            </div>
            <div className='info-content-item'>
              <div className='content-item-key'>服务ID</div>
              <div className='content-item-value'>/customCtener</div>
            </div>
            <div className='info-content-item'>
              <div className='content-item-key'>功能号数</div>
              <div className='content-item-value'>120</div>
            </div>
            <div className='info-content-item'>
              <div className='content-item-key'>主机数</div>
              <div className='content-item-value'>12</div>
            </div>
          </div>
          <Divider />
          <div className='info-log'>
            <div className='info-log-item'>
              <div className='log-item-key'>
                {/* <img src={ImgAlter} alt=""/> */}
                <span className='alter'>近两周变更数(个)</span>
              </div>
              <div className='log-item-alter'>7</div>
            </div>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-title' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='info-title-icon'></div>
              <div className='info-title-text'>
                告警信息
              </div>
            </div>
            <div className='info-title-no' onClick={setGeneralInfo}>
              12
            </div>
          </div>
          <div className='info-warning-content'>
            <div className='warning-content-item'>
              <div className='content-item-text'>AAA主机告警</div>
            </div>
            <div className='warning-content-item'>
              <div className='content-item-text'>AAA主机告警</div>
            </div>
            <div className='warning-content-item'>
              <div className='content-item-text'>AAA主机告警</div>
            </div>
            <div className='warning-content-item'>
              <div className='content-item-text'>AAA主机告警</div>
            </div>
          </div>
          <div className='info-more'>
            <span>查看全部</span>
            <Icon type="right" />
          </div>
        </div>
        <div className='info-box'>
          <div className='info-title'>
            <div className='info-title-icon'></div>
            <div className='info-title-text'>
              关键指标
            </div>
          </div>
          <div className='info-graph'>
            <div className='graph-title' onClick={setHostInfo}>
              服务请求数
            </div>
            <div className='graph-content'>
              <SimpleLineChart />
            </div>
          </div>
        </div>
      </div>
      { showGeneral && <GeneralInfo /> }
      { showHost && <HostInfo />}
    </div>
  )
}

export default BasicInfo