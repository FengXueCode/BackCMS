/*
 * @Author: FengXue
 * @Date: 2024-04-09 11:49:09
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-12 16:21:44
 * @filePath: Do not edit
 */
const aside = [
  {
    title: '欢迎你~',
    path: '/',
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
        child: []
      },
      {
        title: '跳蚤市场轮播',
        path: '/image/store',
        icon: 'Goods',
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
        icon: 'Place',
        child: []
      }
      ,
      {
        title: '配送点列表',
        path: '/list/delivery',
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
      // {
      //   title: '角色管理',
      //   path: '/order/list',
      //   icon: 'User',
      //   child: []

      // },
      {
        title: '用户审核',
        path: '/jurisdiction/userAudit',
        icon: 'Stamp',
        child: []
      }
    ]
  }
]

export default aside