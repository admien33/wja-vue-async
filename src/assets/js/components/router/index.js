import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Firstvue from '@/components/Firstvue'
// import Users from '@/components/Users'
// import User from '@/components/User'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>Bar</div>' }
const Baz = { template: '<div>Baz</div>' }

// const Users = {
//   template: `
//     <div>
//       <h2>Users</h2>
//       <router-view></router-view>
//     </div>
//   `
// }

// const User = { template: '<div>{{ $route.params.username }}</div>' }

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile {{$route.params.username}}</div>' }
const UserPosts = { template: '<div>Posts {{$route.params.username}}</div>' }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/firstvue',
      name: 'Firstvue',
      component: Firstvue
    }
    // ,
    // { path: '/foo', component: Foo },
    // {
    //   path: '/users',
    //   components:
    //   {
    //     default: Users,
    //     a: Bar,
    //     b: Baz
    //   },
    //   children: [
    //     {
    //       path: ':username',
    //       name: 'user',
    //       component: User,
    //       children: [
    //         { path: '', component: UserHome },
    //         { path: 'profile', component: UserProfile },
    //         { path: 'posts', component: UserPosts }
    //       ]
    //     }
    //   ]
    // }
  ]
})
