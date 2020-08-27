import { PlusOutlined } from '@ant-design/icons'
import { Button, Divider, message, Input, Form, Row, Col } from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { queryRule, updateRule, addRule, removeRule } from './service'
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加')

  try {
    await addRule({ ...fields })
    hide()
    message.success('添加成功')
    return true
  } catch (error) {
    hide()
    message.error('添加失败请重试！')
    return false
  }
}
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('正在配置')

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    })
    hide()
    message.success('配置成功')
    return true
  } catch (error) {
    hide()
    message.error('配置失败请重试！')
    return false
  }
}
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除')
  if (!selectedRows) return true

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    })
    hide()
    message.success('删除成功，即将刷新')
    return true
  } catch (error) {
    hide()
    message.error('删除失败，请重试')
    return false
  }
}

const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState(false)
  const [stepFormValues, setStepFormValues] = useState({})
  const actionRef = useRef()
  const [selectedRowsState, setSelectedRows] = useState([])
  const columns = [
    {
      title: '邮件ID',
      dataIndex: 'name',
      tip: '规则名称是唯一的 key',
      hideInSearch: true,
      rules: [
        {
          required: true,
          message: '规则名称为必填项',
        },
      ],
    },
    {
      title: '邮件主题',
      dataIndex: 'desc',
      // hideInSearch:true,
      valueType: 'textarea',
      render: (text, { name, desc }) => {
        return (
          <Link
            target="_blank"
            to={{
              pathname: '/monitorMailList/mail-detail',
              search: `?mailSubject=${desc}`,
              state: { id: name },
            }}
          >
            {desc}
          </Link>
        )
      },
      renderFormItem: (item, { defaultRender, value, ...rest }, form) => {
        const mailSubject = form.getFieldValue('mailSubject')
        return (
          <>
            <Form.Item
              // label="邮件主题"
              name="mailSubject"
              rules={[
                {
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入邮件主题" />
            </Form.Item>
          </>
        )
        return defaultRender(item)
      },
    },
    {
      title: '收件组名',
      dataIndex: 'callNo',
      renderFormItem: (item, { defaultRender, value, ...rest }, form) => {
        const receiverGroupName = form.getFieldValue('receiverGroupName')
        value = []
        value.push(receiverGroupName)
        return (
          <>
            <Form.Item
              name="receiverGroupName"
              rules={[
                {
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入收件组名" />
            </Form.Item>
          </>
        )
        return defaultRender(item)
      },
    },
    {
      title: (_, type) => (type === 'table' ? '更新时间' : '收件人姓名'),
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      renderFormItem: (item, { defaultRender, value, ...rest }, form) => {
        const receiver = form.getFieldValue('receiver')
        return (
          <>
            <Form.Item
              name="receiver"
              rules={[
                {
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入收件人姓名" />
            </Form.Item>
          </>
        )
        return defaultRender(item)
      },
    },
    {
      title: '操作人',
      title: (_, type) => (type === 'table' ? '操作人' : '收件邮箱'),
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '张三',
        },
        1: {
          text: '李四',
        },
        2: {
          text: '王二',
        },
        3: {
          text: '李强',
        },
      },
      renderFormItem: (item, { defaultRender, value, ...rest }, form) => {
        const receiverMail = form.getFieldValue('receiverMail')
        return (
          <>
            <Form.Item
              // label="邮件主题"
              name="receiverMail"
              rules={[
                {
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入收件邮箱" />
            </Form.Item>
          </>
        )
        return defaultRender(item)
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => <a href="">编辑</a>,
    },
  ]
  return (
    <PageContainer>
      <ProTable
        headerTitle="监控邮件列表"
        actionRef={actionRef}
        rowKey="key"
        request={(params, sorter, filter) =>
          queryRule({ ...params, sorter, filter })
        }
        columns={columns}
        options={false}
        collapsed={false}
        search={{
          span: 6,
          resetText: '',
          collapsed: false,
          collapseRender: () => false,
        }}
      />
    </PageContainer>
  )
}

export default TableList
