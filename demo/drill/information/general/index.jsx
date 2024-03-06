import React from 'react'
import './index.less'

const iconList = [
  {
    icon: ('../../../../resources/images/active-icon.png'),
    text: '21.458.69'
  },
  {
    icon: ('../../../../resources/images/active-icon.png'),
    text: '21.458.69'
  },
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
  {
    icon: ('../../../../resources/images/icon.png'),
    text: '21.458.69'
  },
]

const GeneralInfo = () => {
  return (
    <div className='general-container'>
      <div className='header'>
        <div className='header-title'>
          Vcenter
        </div>
      </div>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            概要信息
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>总数</div>
            <div className='content-item-value'>30</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>健康数</div>
            <div className='content-item-value' style={{ color: '#24B87A' }}>27</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>异常数</div>
            <div className='content-item-value' style={{ color: '#E62828' }}>3</div>
          </div>
        </div>
      </div>
      <div className='info-list'>
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
  )
}

export default GeneralInfo