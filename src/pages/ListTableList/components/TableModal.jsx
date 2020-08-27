import React from 'react'
import { Modal } from 'antd'

const TableModal = (props) => {
  const { modalVisible, onCancel } = props
  return (
    <Modal
      destroyOnClose
      title="添加收件组"
      okText="确认选择"
      visible={modalVisible}
      onCancel={() => onCancel()}
      width={900}
    >
      {props.children}
    </Modal>
  )
}

export default TableModal
