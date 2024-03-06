import React from 'react'
import './index.less';
// import ImgAlter from '../../../resources/images/alter.png'
// import ImgWarning from '../../../resources/images/warning.png'

const DetailInfo = () => {
  return (
    <div className='info-container'>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            基本信息
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>名称</div>
            <div className='content-item-value'>AI服务地铁图</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>开发团队</div>
            <div className='content-item-value'>新一代开发团队</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>运维团队</div>
            <div className='content-item-value'>新一代运维团队</div>
          </div>
        </div>
        <div className='info-log'>
          <div className='info-log-item'>
            <div className='log-item-key'>
              {/* <img src={ImgAlter} alt=""/> */}
              <span className='alter'>变更数(两周内)</span>
            </div>
            <div className='log-item-alter'>7</div>
          </div>
          <div className='info-log-item'>
            <div className='log-item-key'>
              {/* <img src={ImgWarning} alt=""/> */}
              <span className='warning'>告警数</span>
            </div>
            <div className='log-item-warning'>9</div>
          </div>
        </div>
      </div>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            服务情况
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>服务数(个)</div>
            <div className='content-item-value' style={{ color: "#333333" }}>15</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>健康(个)</div>
            <div className='content-item-value' style={{ color: "#24B87A"}}>6</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>异常(个)</div>
            <div className='content-item-value' style={{ color: "#E62828"}}>3</div>
          </div>
        </div>
      </div>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            功能号情况
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>功能号数(个)</div>
            <div className='content-item-value' style={{ color: "#333333" }}>15</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>健康(个)</div>
            <div className='content-item-value' style={{ color: "#24B87A"}}>6</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>异常(个)</div>
            <div className='content-item-value' style={{ color: "#E62828"}}>3</div>
          </div>
        </div>
      </div>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            主机情况
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>主机数量(个)</div>
            <div className='content-item-value' style={{ color: "#333333" }}>15</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>健康(个)</div>
            <div className='content-item-value' style={{ color: "#24B87A"}}>6</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>异常(个)</div>
            <div className='content-item-value' style={{ color: "#E62828"}}>3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInfo