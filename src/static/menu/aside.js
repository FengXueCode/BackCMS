import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

/*
 * @Author: FengXue
 * @Date: 2024-08-09 11:29:32
 * @LastEditors: FengXue
 * @LastEditTime: 2024-08-09 11:55:55
 * @filePath: Do not edit
 */
const aside = [
  {
    title: '欢迎你~',
    path: '/index/index',
    component: () => import('@/views/welcome/index.vue'),
    icon: 'Odometer',
    child: []
  },

  {
    title: '图片管理',
    path: '/image',
    icon: 'PictureFilled',
    child: [
      {
        title: '首页轮播',
        path: '/image/banner',
        icon: 'PictureRounded',
        component: () => import('@/views/image/banner.vue'),
        child: []
      },
      {
        title: '跳蚤市场轮播',
        path: '/image/store',
        icon: 'Goods',
        component: () => import('@/views/image/storeBanner.vue'),
        child: []
      },
    ]
  },
  {
    title: '列表管理',
    path: '/list',
    icon: 'List',
    child: [
      {
        title: '区域范围列表',
        path: '/list/area',
        component: () => import('@/views/list/area.vue'),
        icon: 'Place',
        child: []
      }
      ,
      {
        title: '配送点列表',
        path: '/list/delivery',
        component: () => import('@/views/list/delivery.vue'),
        icon: 'Van',
        child: []
      }
    ]
  },
  {
    title: '权限管理',
    path: '/jurisdiction',
    icon: 'Avatar',
    child: [
      {
        title: '用户审核',
        path: '/jurisdiction/userAudit',
        component: () => import('@/views/jurisdiction/userAudit.vue'),
        icon: 'Stamp',
        child: []
      }
    ]
  },
{
    title: '地图管理',
    path: '/map',
    icon: 'MapLocation',
    child: [
      {
        title: '标点管理',
        path: '/jurisdiction/userAudit',
        component: () => import('@/views/jurisdiction/userAudit.vue'),
        icon: 'Stamp',
        child: []
      }
    ]
  }
]

export default aside
