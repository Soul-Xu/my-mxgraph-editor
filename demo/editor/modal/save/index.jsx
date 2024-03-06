import React from 'react'
import { Modal, Form, Input } from 'antd'
import './index.less'

const SaveGraph = (props) => {
  const {show, onCancel, onSave} = props

  return (
    <div>
      <Modal
        title="保存图形"
        visible={show}
        onOk={onSave}
        onCancel={onCancel}
        okText="保存"
        cancelText="取消"
      >
        <Form name='save-graph' layout='vertical'>
          <Form.Item name='name' key='name' label='图形名称'>
            <Input placeholder='请输入图形名称' />
          </Form.Item>
          <Form.Item name='description' key='description' label='图形描述'>
            <Input.TextArea placeholder='请输入图形描述' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default SaveGraph