import { PlusOutlined } from '@ant-design/icons'
import { Tabs, Card } from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { queryRule, updateRule, addRule, removeRule } from './service'
import styles from './index.less'
import { columns1, columns2, columns3, columns4 } from './tbColumns'

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
      formItemProps: {
        placeholder: '请输入商品名称',
      },
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
      formItemProps: {
        defaultValue: '全部',
        placeholder: '请选择订单状态',
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
              // target="_blank"
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
    <PageHeaderWrapper>
      <Card>
        <Tabs defaultActiveKey="1" /* onChange={callback} */>
          <TabPane tab="财富工作室" key="1">
            <ProTable
              actionRef={actionRef}
              rowKey="key"
              bordered={true}
              size="small"
              request={(params, sorter, filter) =>
                queryRule({ ...params, sorter, filter })
              }
              pagination={{
                pageSizeOptions: ['10', '20', '50'],
                defaultPageSize: 10,
              }}
              columns={columns1}
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
          </TabPane>
          <TabPane tab="投顾工作室" key="2">
            <ProTable
              scroll={{ x: 1200 }}
              actionRef={actionRef}
              rowKey="key"
              bordered={true}
              size="small"
              request={(params, sorter, filter) =>
                queryRule({ ...params, sorter, filter })
              }
              pagination={{
                pageSizeOptions: ['10', '20', '50'],
                defaultPageSize: 10,
              }}
              columns={columns2}
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
          </TabPane>
          <TabPane tab="LEVEL-2行情" key="3">
            <ProTable
              scroll={{ x: 1200 }}
              actionRef={actionRef}
              rowKey="key"
              bordered={true}
              size="small"
              request={(params, sorter, filter) =>
                queryRule({ ...params, sorter, filter })
              }
              pagination={{
                pageSizeOptions: ['10', '20', '50'],
                defaultPageSize: 10,
              }}
              columns={columns3}
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
          </TabPane>
          <TabPane tab="AI工作室" key="4">
            <ProTable
              scroll={{ x: 1200 }}
              actionRef={actionRef}
              rowKey="key"
              bordered={true}
              size="small"
              request={(params, sorter, filter) =>
                queryRule({ ...params, sorter, filter })
              }
              pagination={{
                pageSizeOptions: ['10', '20', '50'],
                defaultPageSize: 10,
              }}
              columns={columns4}
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
          </TabPane>
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  )
}

export default OrderInfo
