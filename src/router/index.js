import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index/index"
import Live from "../pages/Live"
import Mine from "../pages/Mine/Mine"

Vue.use(Router)
//==============================================
let router= new Router({
  routes: [
    {
      path: '/',
     redirect:"/index"
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/live',
      name: 'live',
      redirect: {
        name: 'live-login'
      },
      component: Live,
      children: (pre => [
        {
          path: 'login',
          name: `${pre}-login`,
          component: () =>
            import('@/pages/Live/components/live-login'),
        },
        {
          path: 'self',
          name: `${pre}-self`,
          meta: {
            title: '个人直播'
          },
          component: () =>
            import('@/pages/Live/components/self'),
        },
        {
          path: 'enterprise',
          name: `${pre}-enterprise`,
          meta: {
            title: '企业直播'
          },
          component: () =>
            import('@/pages/Live/components/enterprise'),
        }
      ])('live')
    },
    {
    path:"/mine",
      name:"Mine",
      component:Mine
    }

  ]
})

// router.beforeEach((to,from,next)=>{
// // let user=sessionStorage.getItem("user")
// //   console.log(to,from,next)
// //   if(to.name=='Index'){
// //   next()
// //   }else{
// //     if(user){
// //       next()
// //     }else{
// //       router.push({name:"Index"})
// //     }
// //   }
//
// })
export default router
