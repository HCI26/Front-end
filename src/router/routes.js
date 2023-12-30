const routeswithmaster = {
  name: "Master",
  path: "/",
  component: import('./../pages/layout/master'),
  children: [
    {
      path: '',
      redirect: '/login',
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: import('./../pages/dashboard'),
    },
    {
      name: 'history',
      path: '/history',
      component: import('./../pages/history'),
    },
    {
      name: 'setting',
      path: '/setting',
      component: () => import('./../pages/setting'),
    },
    {
      name: 'Visitors',
      path: '/visitors',
      component: import('./../pages/visitors'),
    },
    

    
   ],
  }
  

  const routeWithoutMaster3 = {
    name: 'signup',
    path: '/signup',
    component: () => import('./../pages/signup'),
  };
  const routeWithoutMaster4 = {
    name: 'login',
    path: '/login',
    component: () => import('./../pages/login'),
  };
  const routeWithoutMaster5 = {
    name: 'Home',
    path: '/home',
    component: () => import('./../pages/home'),
  };
  
  
  
  export default [routeswithmaster,routeWithoutMaster3,routeWithoutMaster4,routeWithoutMaster5];