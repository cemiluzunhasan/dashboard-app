
export default {
  path: '/auth',
  component: require('layouts/Auth').default,
  routes: [
    {
      path: '/login',
      component: require('views/Auth/Login').default
    },
    {
      path: '/register',
      component: require('views/Auth/Register').default
    },
  ]
}
