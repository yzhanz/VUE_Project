const menu =[
  {
    path: '/User',
    name: '用户管理',
    icon: 'el-icon-menu',

    level: 1,
    sort: 1,
    children: [
      {
        path: '/User',
        name: '用户信息查看',
        icon: 'el-icon-menu',
        level: 1,
        sort: 1,
        children: [],
        fixed: false
      },
    ],
    fixed: false
  },
]

export default menu
