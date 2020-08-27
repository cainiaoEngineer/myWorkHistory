import React, { useContext, useState, useEffect, useRef } from 'react'
import {
  Table,
  Input,
  Button,
  Popconfirm,
  Form,
  Select,
  PageHeader,
} from 'antd'
import ProTable from '@ant-design/pro-table'
import SearchEmail from './SearchEmail'
import styles from '../index.less'

const EditableContext = React.createContext()

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  handleSearch,
  handleChange,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef()
  const form = useContext(EditableContext)
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    })
  }

  const save = async (e, selectVal) => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({ ...record, ...values })
      console.log('handleSave1', record, values, 'select', selectVal)
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <SearchEmail refTop={inputRef} saveFunc={save} dataIndex={dataIndex} />
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: '收件人姓名',
        dataIndex: 'name',
        width: '30%',
      },
      {
        title: '收件邮箱',
        hideInSearch: true,
        editable: true,
        dataIndex: 'address',
      },
      {
        title: '操作',
        hideInSearch: true,
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="是否确认删除?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ]
    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: '请输入邮箱',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: '请输入邮箱1',
        },
      ],
      count: 2,
    }
  }

  handleSearch = (value) => {
    if (value) {
      fetch(value, (data) => this.setState({ data }))
    } else {
      this.setState({ data: [] })
    }
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  handleAdd = () => {
    const { count, dataSource } = this.state
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource]
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    })
  }

  handleSave = (row) => {
    console.log(row, 'handleSave')
    const newData = [...this.state.dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, { ...item, ...row })
    this.setState({
      dataSource: newData,
    })
  }

  render() {
    const { dataSource } = this.state
    const { formInstance } = this.props
    console.log('baocun', formInstance)
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    }
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      }
    })
    return (
      <>
        <Button
          onClick={this.handleAdd}
          className={styles.addBtn}
          style={{
            marginBottom: 16,
          }}
        >
          添加收件人
        </Button>
        <ProTable
          components={components}
          rowClassName={() => 'editable-row'}
          dataSource={dataSource}
          columns={columns}
          size="small"
          bordered
          options={false}
          pagination={{ pageSizeOptions: [5, 10, 20], defaultPageSize: 5 }}
          search={null}
        />
      </>
    )
  }
}
