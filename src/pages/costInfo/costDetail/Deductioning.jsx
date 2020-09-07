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
  Tag,
} from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { queryRule, updateRule, addRule, removeRule } from './service'

const decutionStatus = (status) => {
  let tag
  const styles = { position: 'absolute', marginLeft: 10 }
  if (status == 1) {
    tag = (
      <Tag style={{ ...styles }} color="#FF914D">
        待扣款
      </Tag>
    )
  } else if (status == 2) {
    tag = (
      <Tag style={{ ...styles }} color="#F0392F">
        扣款失败
      </Tag>
    )
  } else {
    tag = (
      <Tag style={{ ...styles }} color="#3196EB">
        扣款成功
      </Tag>
    )
  }
  return tag
}

const Deductioning = () => {
  const actionRef = useRef()
  const columns = [
    {
      title: '日期',
      dataIndex: 'name',
      //   tip: '规则名称是唯一的 key',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: '日终总资产（元）',
      dataIndex: 'desc',
      align: 'center',
    },
    {
      title: '服务费率（%）',
      dataIndex: 'callNo',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: '服务费（元）',
      tip: `服务费=日终总资产*服务费率/当年天数`,
      dataIndex: 'callNo',
      hideInSearch: true,
      align: 'center',
    },
  ]
  return (
    <PageHeaderWrapper>
      <Card>
        <ProTable
          headerTitle={
            <>
              <span>总计</span>
              <span
                style={{ fontSize: 36, fontWeight: 'bold', marginLeft: 10 }}
              >
                ￥127.09
              </span>
              {decutionStatus(3)}
            </>
          }
          actionRef={actionRef}
          rowKey="key"
          bordered={true}
          request={(params, sorter, filter) =>
            queryRule({ ...params, sorter, filter })
          }
          pagination={{
            pageSizeOptions: ['10', '20', '50'],
            defaultPageSize: 10,
          }}
          size="small"
          columns={columns}
          options={false}
          search={null}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default Deductioning
