import React from 'react'
import { Icon } from 'antd'
import './index.less'

const Toolbox = () => {
  const contentList = [
    {
      key: 1,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 2,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 3,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },

    {
      key: 4,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 5,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 6,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 7,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 8,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
    {
      key: 9,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },    
    {
      key: 10,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },    
    {
      key: 11,
      author: '肖剑心',
      action: '进行了一条巡检',
      date: '2023-04-20 10:30'
    },
  ]

  return (
    <div className='tool-container'>
      <div className='tool-content'>
        <div className='content-item'>
          <div className='content-item-icon'></div>
          <div className='content-item-text'>工具箱</div>
        </div>
        <div className='content-cards'>
          <div className='content-cards-item'>
            <div className='cards-item-image' style={{ background: '#EC5F5F' }}>
              <Icon type="file" theme="filled" />
            </div>
            <div className='cards-item-text'>
                一键巡检
            </div>
          </div>
          <div className='content-cards-item'>
            <div className='cards-item-image' style={{ background: '#7CABED' }}>
              <Icon type="compass" theme="filled" />
            </div>
            <div className='cards-item-text'>
                知识库
            </div>
          </div>
          <div className='content-cards-item'>
            <div className='cards-item-image' style={{ background: '#F39327' }}>
              <Icon type="medicine-box" theme="filled" />
            </div>
            <div className='cards-item-text'>
                一键应急
            </div>
          </div>
        </div>
        <div className='content-item'>
          <div className='content-item-icon'></div>
          <div className='content-item-text'>操作日志</div>
        </div>
        <div className='content-list'>
          {
            contentList.map((item, index) => {
              return (
                <div className='content-list-item' key={item.key}>
                  <div className='list-item-text'>
                    {item.author} {item.action} 
                  </div>
                  <div className='list-item-date'>
                    {item.date}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Toolbox