import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 基座的书写规则
import {registerMicroApps,start} from 'qiankun' //注册并开启应用
const  apps = [
  {
    name:'vueapp', //应用的命名
    entry:'//localhost:10000', //默认会加载这个html 解析里面的js动态执行（子应用必须支持跨域） fetch
    container:'#vue', //应用对应的容器
    activeRule:'/vue' //应用所对应的规则
  },{
    name:'reactapp', //应用的命名
    entry:'//localhost:20000', //默认会加载这个html 解析里面的js动态执行（子应用必须支持跨域） fetch
    container:'#react', //应用对应的容器
    activeRule:'/react' //应用所对应的规则
  }
]
registerMicroApps(apps,{

});
start(); // 有API可以取消预加载


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
