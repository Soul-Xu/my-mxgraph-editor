import React, { useState } from 'react'
import { Modal, Card, Input } from 'antd'
import './index.less'

const cardList = [
  {
    id: "22aawwrr233ada29212sas",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: ("../../../../resources/images/mxgraph-demo.png")
  },
  {
    id: "22aawwrr233ada29212ssn",
    title: "AI服务架构图",
    createAt: "2024-01-01",
    imgUrl: ("../../../../resources/images/mxgraph-demo2.png")
  },
]

const AddDrill = (props) => {
  const { show, onCancel, onOk  } = props
  const [selectCard, setSelectCard] = useState('')
  console.log("show", show)

  const onSelectCard = (card) => {
    setSelectCard(card.id)
  }

  return (
    <div>
      <Modal
          title="添加钻取视图"
          width={700}
          visible={show}
          onOk={onOk}
          onCancel={onCancel}
          okText="确定"
          cancelText="取消"
        >
        <div className='search'>
          <Input.Search placeholder="请输入视图名称" />
        </div>
        <div className='card'>
        {
          cardList.map((card) => {
            return (
              <Card 
                key={card.id} 
                bordered={false} 
                className={(selectCard === card.id ? "card-item-active" :"card-item")}
                onClick={() => onSelectCard(card)}
              >
                <div>
                  <div className={("card-item-img")}>
                    <img src={card.imgUrl} alt={card.title}/>
                  </div>
                  <div className={("card-item-content")}>
                    <span>{card.title}</span>
                    <span>{card.createAt}</span>
                  </div>
                </div>
              </Card>
            )
          })
        }
        </div>
      </Modal>
    </div>
  )
}

export default AddDrill