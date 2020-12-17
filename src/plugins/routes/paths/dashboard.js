
export default {
  path: '/dashboard',
  component: require('layouts/Auth').default,
  redirect: '/dashboard/users',
  routes: [
    {
      path: '/users',
      routes: [
        {
          path: '/list',
          component: require('views/Dashboard/Users/List').default
        },
        {
          path: '/create',
          component: require('views/Dashboard/Users/Create').default
        },
        {
          path: '/edit/:id',
          component: require('views/Dashboard/Users/Edit').default
        }
      ]
    },
    {
      path: '/firms',
      routes: [
        {
          path: '/list',
          component: require('views/Dashboard/Firms/List').default
        },
        {
          path: '/create',
          component: require('views/Dashboard/Firms/Create').default
        },
        {
          path: '/edit/:id',
          component: require('views/Dashboard/Firms/Edit').default
        }
      ]
    },
    {
      path: '/vehicles',
      routes: [
        {
          path: '/list',
          component: require('views/Dashboard/Vehicles/List').default
        },
        {
          path: '/create',
          component: require('views/Dashboard/Vehicles/Create').default
        },
        {
          path: '/edit/:id',
          component: require('views/Dashboard/Vehicles/Edit').default
        }
      ]
    }
  ]
}
