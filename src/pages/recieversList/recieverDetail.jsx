import React, { useState, useRef } from 'react'
import {
  Collapse,
  Row,
  Col,
  Table,
  Button,
  Space,
  Tooltip,
  PageHeader,
} from 'antd'
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Link } from 'umi'
import Editable from './components/Editable'
import styles from './index.less'

const { Panel } = Collapse
let columns = [
  {
    title: '姓名',
    dataIndex: 'chinese',
  },
  {
    title: '邮箱',
    dataIndex: 'math',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
]

function callback(key) {
  console.log(key)
}
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

const addReciveList = () => {}

const onCancel = () => {}

const text = `
  it can be found as a welcome guest in many households across the world.
`
const getHeader = () => (
  <Row>
    <Col span={3}>收件组1：</Col>
    <Col span={11}>申购V2邮件组（ID：5）</Col>
    <Col span={7}>收件人总数：5</Col>
    <Col span={3}>
      <Button
        type="text"
        style={{ position: 'absolute', right: -90, top: -7, zIndex: 10000 }}
        onClick={(e) => {
          e.stopPropagation()
        }}
        icon={<CloseCircleOutlined style={{ fontSize: 30 }} />}
      />
    </Col>
  </Row>
)

const showBtnGroups = () => {
  const [state, setState] = useState('detail')
  const BtnGroups =
    state === 'edit' ? (
      <>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          type="primary"
        >
          添加收件组
        </Button>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          size="small"
          type="primary"
        >
          保存
        </Button>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          size="small"
          type="primary"
        >
          取消
        </Button>
      </>
    ) : (
      <Button
        style={{ display: 'inline', marginBottom: 10, size: '12px' }}
        type="primary"
        onClick={() => {
          handleModalVisible(true)
        }}
      >
        添加收件组
      </Button>
    )
  return BtnGroups
}
const Detail = () => {
  const [editState, setEditState] = useState(false)
  console.log('editState', editState)
  const editExtra = {
    noBtn: true,
  }
  return (
    <PageHeaderWrapper>
      {editState ? (
        <Editable editExtra={editExtra} />
      ) : (
        <PageHeader
          ghost={false}
          title={<span className={styles.title}>收件组名</span>}
          subTitle={<span className={styles.subTitle}>示例收件组名1111</span>}
          extra={
            editState
              ? [
                  <Button key="3" type="primary">
                    保存
                  </Button>,
                  <Button key="2" onClick={() => setEditState(false)}>
                    取消
                  </Button>,
                  <Button key="1" className={styles.addBtn}>
                    添加收件人
                  </Button>,
                ]
              : [
                  <Button
                    key="4"
                    type="primary"
                    onClick={() => setEditState(true)}
                  >
                    编辑
                  </Button>,
                ]
          }
        >
          <ProTable
            style={{ marginTop: 30 }}
            columns={columns}
            size="small"
            bordered
            options={false}
            search={false}
            dataSource={data}
            onChange={onChange}
            tableAlertRender={false}
          />
        </PageHeader>
      )}
    </PageHeaderWrapper>
  )
}
export default Detail
