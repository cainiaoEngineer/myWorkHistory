// https://umijs.org/config/
import { defineConfig } from 'umi'
import defaultSettings from './defaultSettings'
import proxy from './proxy'

const { REACT_APP_ENV } = process.env
export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    //删除routes部分即可自动判定为约定式路由模式
    {
      path: '/',
      // component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          // authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              // authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  // authority: ['admin'],
                },
              ],
            },
            {
              // name: '订单信息',
              name: 'orderInfo',
              path: '/orderInfo',
              component: '@/pages/orderInfo',
            },
            {
              // name: '财富宝费用信息',
              name: 'costInfo',
              path: '/orderInfo/costInfo',
              component: '@/pages/costInfo',
            },
            {
              // name: '费用明细（计费中）',
              name: 'paying',
              path: '/orderInfo/costInfo/paying',
              component: '@/pages/costInfo/costDetail',
            },
            {
              // name: '费用明细（待扣款、扣款成功、扣款失败）',
              name: 'Deductioning',
              path: '/orderInfo/costInfo/Deductioning',
              component: '@/pages/costInfo/costDetail/Deductioning',
            },
            {
              // name: '历史账单',
              name: 'HistoryList',
              path: '/orderInfo/costInfo/HistoryList',
              component: '@/pages/costInfo/costDetail/HistoryList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  base: '/',
  publicPath: './',
  manifest: {
    basePath: '/',
  },
})
