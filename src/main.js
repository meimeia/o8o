// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/rem"
import "./assets/css/public.css"
import "./assets/css/public-class.scss"
import "font-awesome/css/font-awesome.min.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
//注意引入顺序，否则自定义样式无法生效
import '../theme/index.css'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
import store from "../src/store/store"




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
