import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import echarts from 'echarts'
//
// require("echarts/extension/bmap/bmap");
// require("echarts/map/js/china.js");

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
