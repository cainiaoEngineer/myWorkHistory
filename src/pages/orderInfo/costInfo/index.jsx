import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Divider,
  message,
  Input,
  Form,
  Row,
  Col,
  Card,
  Descriptions,
} from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { queryRule, updateRule, addRule, removeRule } from './service'
import styles from './index.less'

const CostInfo = () => {
  const actionRef = useRef()
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
      title: '审核时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '权限开始日期',
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
                pathname: '/monitorMailList/mail-detail',
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
        <div className="titleCenter">
          <Row gutter={16}>
            <Col span={8}>
              <Card
                type="inner"
                title={<div className={styles.cardTitle}>本期账单</div>}
              >
                <Descriptions layout="vertical">
                  <Descriptions.Item span={1} label="本期应扣费用">
                    <span className={styles.boldFont}>￥8989.40</span>
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="扣款日期">
                    <span className={styles.boldFont}>2020.06.05</span>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                type="inner"
                title={<div className={styles.cardTitle}>未出账单</div>}
              >
                <Descriptions layout="vertical">
                  <Descriptions.Item span={1} label="已计费用">
                    <span className={styles.boldFont}>￥8989.40</span>
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="预计扣款日期">
                    <span className={styles.boldFont}>2020.07.05</span>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <Card>
              <Descriptions title="总费用信息">
                <Descriptions.Item label="签约日期">
                  Zhou Maomao
                </Descriptions.Item>
                <Descriptions.Item label="开始计费日期">
                  1810000000
                </Descriptions.Item>
                <Descriptions.Item label="扣款周期">
                  1810000000
                </Descriptions.Item>
                <Descriptions.Item label="应扣费用总额">
                  $80.00
                </Descriptions.Item>
                <Descriptions.Item label="实扣费用总额">
                  $20.00
                </Descriptions.Item>
                <Descriptions.Item label="待扣费用总额">
                  $60.00
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="其他信息">
                <Descriptions.Item label="累计扣款失败次数">
                  Zhou Maomao
                </Descriptions.Item>
                <Descriptions.Item label="连续扣款失败次数">
                  1810000000
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  )
}

export default CostInfo
