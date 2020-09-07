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
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import moment from 'moment'
import { queryRule, updateRule, addRule, removeRule } from './service'

const { TabPane } = Tabs

const OrderInfo = () => {
  const [createModalVisible, handleModalVisible] = useState(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState(false)
  const [stepFormValues, setStepFormValues] = useState({})
  const actionRef = useRef()
  const [selectedRowsState, setSelectedRows] = useState([])
  const [date, setDates] = useState([])
  const columns = [
    {
      title: '账单日期',
      order: 2,
      dataIndex: 'name',
      //   tip: '规则名称是唯一的 key',
      valueType: 'dateRange',
      formItemProps: {
        placeholder: ['开始时间', '截止时间'],
        disabledDate: (current) => {
          const tooLate = current && current > moment().endOf('day')
          return tooLate
        },
        onCalendarChange: (value) => {
          setDates(value)
        },
      },
    },
    {
      title: '支付状态',
      order: 3,
      dataIndex: 'desc',
      valueEnum: {
        0: { text: '全部' },
        1: { text: '签约中' },
        2: { text: '已退订' },
        3: { text: '审核未通过' },
        4: { text: '待审核' },
      },
      formItemProps: {
        defaultValue: '全部',
        placeholder: '请选择支付状态',
      },
    },
    {
      title: '支付订单编号',
      dataIndex: 'callNo',
      hideInSearch: true,
    },
    {
      title: '应扣费用(元)',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
    },
    {
      title: '实扣费用(元)',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
    },
    {
      title: '计费开始日',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
    },
    {
      title: '计费截止日',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
    },
    {
      title: '扣款时间',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
    },
    {
      title: '费用明细',
      align: 'center',
      fixed: 'right',
      key: 'action',
      hideInSearch: true,
      width: 100,
      render: (text, record) => (
        <Link
          // target="_blank"
          to={{
            pathname: '/costInfo/paying',
            // search: `?mailSubject=${desc}`,
            // state: { id: name },
          }}
        >
          查看
        </Link>
      ),
    },
  ]
  return (
    <PageHeaderWrapper>
      <Card>
        <ProTable
          scroll={{ x: 1300 }}
          actionRef={actionRef}
          rowKey="key"
          request={(params, sorter, filter) =>
            queryRule({ ...params, sorter, filter })
          }
          pagination={{
            pageSizeOptions: ['10', '20', '50'],
            defaultPageSize: 10,
          }}
          columns={columns}
          options={false}
          collapsed={false}
          search={{
            span: 8,
            resetText: '',
            searchText: '搜索',
            collapsed: false,
            collapseRender: () => false,
          }}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default OrderInfo
