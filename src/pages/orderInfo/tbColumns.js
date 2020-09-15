import { Link } from 'umi'

const columns1 = [
  {
    title: '订单编号',
    align: 'center',
    dataIndex: 'name',
    //   tip: '规则名称是唯一的 key',
    hideInSearch: true,
  },
  {
    title: '商品名称',
    align: 'center',
    dataIndex: 'desc',
    formItemProps: {
      placeholder: '请输入商品名称',
    },
  },
  {
    title: '下单时间',
    align: 'center',
    dataIndex: 'callNo',
    hideInSearch: true,
  },
  {
    title: '审核时间',
    align: 'center',
    dataIndex: 'updatedAt',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '权限开始日期',
    align: 'center',
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '订单状态',
    align: 'center',
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
    align: 'center',
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
const columns2 = [
  {
    title: '订单编号',
    align: 'center',
    dataIndex: 'orderId',
    //   tip: '规则名称是唯一的 key',
    hideInSearch: true,
  },
  {
    title: '商品名称',
    align: 'center',
    dataIndex: 'goodsName',
    formItemProps: {
      placeholder: '请输入商品名称',
    },
  },
  {
    title: '下单时间',
    align: 'center',
    dataIndex: 'createTime',
    hideInSearch: true,
  },
  {
    title: '审核时间',
    align: 'center',
    dataIndex: 'updateTime',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '权限开始日期',
    align: 'center',
    dataIndex: 'startDate',
    hideInSearch: true,
  },
  {
    title: '订单状态',
    align: 'center',
    dataIndex: 'orderState',
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
    title: '协议编号',
    align: 'center',
    dataIndex: 'agreementId',
    hideInSearch: true,
  },
  {
    title: '权限截止时间',
    align: 'center',
    dataIndex: 'endDate',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '支付状态',
    align: 'center',
    dataIndex: 'payStatus',
    hideInSearch: true,
  },
  {
    title: '支付类型',
    align: 'center',
    dataIndex: 'payType',
    hideInSearch: true,
  },
  {
    title: '支付金额',
    align: 'center',
    dataIndex: 'payType',
    valueType: 'money',
    hideInSearch: true,
  },
]

const columns3 = [
  {
    title: '订单编号',
    align: 'center',
    dataIndex: 'orderId',
    //   tip: '规则名称是唯一的 key',
    hideInSearch: true,
  },
  {
    title: '商品名称',
    align: 'center',
    dataIndex: 'goodsName',
    formItemProps: {
      placeholder: '请输入商品名称',
    },
  },
  {
    title: '下单时间',
    align: 'center',
    dataIndex: 'createTime',
    hideInSearch: true,
  },
  {
    title: '审核时间',
    align: 'center',
    dataIndex: 'updateTime',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '权限开始日期',
    align: 'center',
    dataIndex: 'startDate',
    hideInSearch: true,
  },
  {
    title: '订单状态',
    align: 'center',
    dataIndex: 'orderState',
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
    title: '协议编号',
    align: 'center',
    dataIndex: 'agreementId',
    hideInSearch: true,
  },
  {
    title: '权限截止时间',
    align: 'center',
    dataIndex: 'endDate',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '支付状态',
    align: 'center',
    dataIndex: 'payStatus',
    hideInSearch: true,
  },
  {
    title: '支付类型',
    align: 'center',
    dataIndex: 'payType',
    hideInSearch: true,
  },
  {
    title: '支付金额',
    align: 'center',
    dataIndex: 'payType',
    valueType: 'money',
    hideInSearch: true,
  },
]

const columns4 = [
  {
    title: '订单编号',
    align: 'center',
    dataIndex: 'orderId',
    //   tip: '规则名称是唯一的 key',
    hideInSearch: true,
  },
  {
    title: '商品名称',
    align: 'center',
    dataIndex: 'goodsName',
    formItemProps: {
      placeholder: '请输入商品名称',
    },
  },
  {
    title: '下单时间',
    align: 'center',
    dataIndex: 'createTime',
    hideInSearch: true,
  },
  {
    title: '审核时间',
    align: 'center',
    dataIndex: 'updateTime',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '权限开始日期',
    align: 'center',
    dataIndex: 'startDate',
    hideInSearch: true,
  },
  {
    title: '订单状态',
    align: 'center',
    dataIndex: 'orderState',
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
    title: '协议编号',
    align: 'center',
    dataIndex: 'agreementId',
    hideInSearch: true,
  },
  {
    title: '权限截止时间',
    align: 'center',
    dataIndex: 'endDate',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '支付状态',
    align: 'center',
    dataIndex: 'payStatus',
    hideInSearch: true,
  },
  {
    title: '支付类型',
    align: 'center',
    dataIndex: 'payType',
    hideInSearch: true,
  },
  {
    title: '支付金额',
    align: 'center',
    dataIndex: 'payType',
    valueType: 'money',
    hideInSearch: true,
  },
]

export { columns1, columns2, columns3, columns4 }
