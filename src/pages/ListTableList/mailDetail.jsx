import React, { useState, useRef } from 'react'
import { Collapse, Row, Col, Table, Button, Space } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import ProTable from '@ant-design/pro-table'
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout'
import { Link } from 'umi'
import styles from './index.less'
import TableModal from './components/TableModal'

const { Panel } = Collapse

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
  },
  {
    title: 'English Score',
    dataIndex: 'english',
  },
]

const columns1 = [
  {
    title: '收件组名',
    dataIndex: 'name',
    // render: (text, { name }) => {
    //   return (
    //     <Link
    //       to={{
    //         pathname: '/list/mail-detail',
    //         search: `?sort=${name}`,
    //         state: { id: name },
    //       }}
    //     >
    //       {name}
    //     </Link>
    //   )
    // },
  },
  {
    title: '收件人姓名',
    dataIndex: 'chinese',
  },
  {
    title: '收件邮箱',
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

const text = `
  it can be found as a welcome guest in many households across the world.
`
const getHeader = () => (
  <Row>
    <Col span={6}>收件组1：</Col>
    <Col span={6}>申购V2邮件组（ID：5）</Col>
    <Col span={6}>收件人总数：5</Col>
    <Col span={6}>
      <Button
        type="text"
        style={{ position: 'absolute', right: -90, top: -7 }}
        onClick={(e) => {
          e.stopPropagation()
        }}
        icon={<CloseCircleOutlined style={{ fontSize: 30 }} />}
      />
    </Col>
  </Row>
)

const showBtnGroups = (handleModalVisible) => {
  const [editState, setEditState] = useState(false)

  const BtnGroups = editState ? (
    <>
      <Button
        className={styles.changeBtn}
        style={{ backgroundColor: '#00CC33', border: 'none' }}
        type="primary"
        onClick={() => {
          handleModalVisible(true)
        }}
      >
        添加收件组
      </Button>
      <Button className={styles.changeBtn} type="primary">
        保存
      </Button>
      <Button
        className={styles.changeBtn}
        style={{ marginRight: 0 }}
        onClick={() => setEditState(false)}
      >
        取消
      </Button>
    </>
  ) : (
    <Button
      style={{ marginBottom: 10 }}
      type="primary"
      onClick={() => setEditState(true)}
    >
      编辑
    </Button>
  )
  return BtnGroups
}

const Detail = () => {
  const [showP1, cgShowP1] = useState(true)
  const [showP2, cgShowP2] = useState(true)
  const [showP3, cgShowP3] = useState(true)
  const [modalVisible, handleModalVisible] = useState(false)
  const paginationProps1 = {
    pageSize: 5,
    showSizeChanger: false,
  }

  const deletePanel = (panKey) => {
    console.log('panKey', panKey)
    return (
      <CloseCircleOutlined
        onClick={(event) => {
          event.stopPropagation()
          switch (panKey) {
            case '1':
              cgShowP1(false)
              break
            case '2':
              cgShowP2(false)
              break
            case '3':
              cgShowP3(false)
              break
            default:
              break
          }
        }}
      />
    )
  }
  return (
    <PageContainer>
      <Row style={{ width: '95%', padding: '12px 0 0 16px' }}>
        <Col span={6}>邮件主题：</Col>
        <Col span={6}>申购V2信息</Col>
        <Col span={4}>收件人总数：5</Col>
        <Col span={8} align="right">
          {showBtnGroups(handleModalVisible)}
        </Col>
      </Row>
      <Collapse
        accordion
        defaultActiveKey={['1']}
        expandIconPosition="right"
        onChange={callback}
        className={styles.setWidth90}
      >
        {showP1 && (
          <Panel header={getHeader()} key="1">
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
        {showP2 && (
          <Panel header={getHeader()} key="2">
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
        {showP3 && (
          <Panel header={getHeader()} key="3">
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
      </Collapse>
      <TableModal
        modalVisible={modalVisible}
        onCancel={() => {
          handleModalVisible(false)
        }}
      >
        <ProTable
          columns={columns1}
          size="small"
          bordered
          options={false}
          search={{
            resetText: '',
            collapsed: false,
            collapseRender: () => false,
          }}
          dataSource={data}
          onChange={onChange}
          rowSelection={{}}
          tableAlertRender={false}
          pagination={paginationProps1}
        />
        <span className={styles.pageSizeText}>每页显示5条</span>
      </TableModal>
    </PageContainer>
  )
}
export default Detail
