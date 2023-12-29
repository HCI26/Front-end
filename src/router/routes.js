export default [
  {
    name: "Master",
    path: "/",
    component: import('./../pages/layout/master'),
    // redirect: '/dashboard',
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: import('./../pages/dashboard'),
      },
      {
        name: 'History',
        path: '/history',
        component: import('./../pages/history'),
      },
      {
        name: 'Setting',
        path: '/setting',
        component: import('./../pages/setting'),
      },
      {
        name: 'Visitors',
        path: '/visitors',
        component: import('./../pages/visitors'),
      }
    ]
    },

]