import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index/index"
import Live from "../pages/Live/Live"
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
    path:"/live",
      name:"Live",
      component:Live
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
