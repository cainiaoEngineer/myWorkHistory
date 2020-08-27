import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Divider,
  message,
  Input,
  Form,
  Row,
  Col,
  Tabs,
  Card,
} from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { queryRule, updateRule, addRule, removeRule } from './service'

const { TabPane } = Tabs

const OrderInfo = () => {
  const [createModalVisible, handleModalVisible] = useState(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState(false)
  const [stepFormValues, setStepFormValues] = useState({})
  const actionRef = useRef()
  const [selectedRowsState, setSelectedRows] = useState([])
  const columns = [
    {
      title: '订单编号',
      dataIndex: 'name',
      //   tip: '规则名称是唯一的 key',
      hideInSearch: true,
    },
    {
      title: '商品名称',
      dataIndex: 'desc',
    },
    {
      title: '下单时间',
      dataIndex: 'callNo',
      hideInSearch: true,
    },
    {
      title: (_, type) => (type === 'table' ? '审核时间' : '收件人姓名'),
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '权限开始日期',
      title: (_, type) => (type === 'table' ? '操作人' : '收件邮箱'),
      dataIndex: 'status',
      hideInSearch: true,
    },
    {
      title: '订单状态',
      dataIndex: 'option',
      valueEnum: {
        0: { text: '全部' },
        1: { text: '签约中' },
        2: { text: '已退订' },
        3: { text: '审核未通过' },
        4: { text: '待审核' },
      },
    },
    {
      title: '费用信息',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
      render: (record) => {
        if ('1') {
          return (
            <Link
              target="_blank"
              to={{
                pathname: '/orderInfo/costInfo',
                // search: `?mailSubject=${desc}`,
                // state: { id: name },
              }}
            >
              查看
            </Link>
          )
        } else {
          return <span>--</span>
        }
      },
    },
  ]
  return (
    <PageContainer>
      <Card>
        <Tabs defaultActiveKey="1" /* onChange={callback} */>
          <TabPane tab="财富工作室" key="1">
            <ProTable
              headerTitle="监控邮件列表"
              actionRef={actionRef}
              rowKey="key"
              request={(params, sorter, filter) =>
                queryRule({ ...params, sorter, filter })
              }
              pagination={{ pageSizeOptions: ['10', '20', '50'] }}
              columns={columns}
              options={false}
              collapsed={false}
              search={{
                span: 6,
                resetText: '',
                searchText: '搜索',
                collapsed: false,
                collapseRender: () => false,
              }}
            />
          </TabPane>
          <TabPane tab="投顾工作室" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="LEVEL-2行情" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="AI工作室" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  )
}

export default OrderInfo
