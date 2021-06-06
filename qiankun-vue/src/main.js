import  '../public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 应用打包成类库
let instance = null
function render(){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  // 这里#app是挂载到自己的html中 基座会拿到挂在后的html然后插入到html中去
}


// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

//启动的时候
export async function bootstrap(props){
  console.log(props)
}
// 挂载的时候
export async function mount(props){
  render(props)
}
// 卸载的时候
export async function unmount(props){
  console.log(props)
  instance.$destroy()
}
