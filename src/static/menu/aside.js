/*
 * @Author: FengXue
 * @Date: 2024-04-09 11:49:09
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 14:55:02
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
        title: '首页弹窗公告',
        path: '/image/notify',
        icon: 'Notification',
        child: []
      },
      {
        title: '跳蚤市场轮播',
        path: '/image/store',
        icon: 'Goods',
        child: []
      }
    ]
  },
  {
    title: '列表管理',
    path: '/list',
    icon: 'List',
    child: [
      {
        title: '取餐点列表',
        path: '/goods/list',
        icon: 'Guide',
        child: []
      },
      {
        title: '配送点列表',
        path: '/goods/add',
        icon: 'Van',
        child: []
      }
    ]
  },
  {
    title: '权限管理',
    path: '/order',
    icon: 'Avatar',
    child: [
      {
        title: '角色管理',
        path: '/order/list',
        icon: 'User',
        child: []

      },
      {
        title: '用户审核',
        path: '/order/add',
        icon: 'Stamp',
        child: []
      }
    ]
  }
]

export default aside