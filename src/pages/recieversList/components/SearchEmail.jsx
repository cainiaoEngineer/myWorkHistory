import React, { useState } from 'react'
import { AutoComplete, Input, Form } from 'antd'

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
})

const SearchEmail = (props) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])

  const onSearch = (searchText) => {
    console.log('searchText', searchText)
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    )
  }

  const onSelect = (data) => {
    console.log('onSelect', data)
  }

  const onChange = (data) => {
    console.log('onChange', data)
    setValue(data)
  }
  const { dataIndex, refTop, saveFunc } = props

  return (
    <Form.Item
      style={{
        margin: 0,
      }}
      name={dataIndex}
      rules={[
        {
          required: true,
          message: `邮箱不能为空`,
        },
        {
          len: '10',
          message: `不能超过100个字符`,
        },
        {
          pattern: '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
          message: '邮箱格式不正确',
        },
      ]}
      validateTrigger={['onFocus', 'onPressEnter', 'onChange']}
    >
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="请输入邮箱"
        onBlur={() => saveFunc(event, value)}
        children={
          <Input ref={refTop} onPressEnter={saveFunc} maxLength={100} />
        }
      />
    </Form.Item>
  )
}

export default SearchEmail
