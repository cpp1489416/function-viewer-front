import Vue from 'vue'
import App from './App.vue'

// element
import './plugins/element.js'

// router
import Router from './router'

// jquery
import '@/assets/jquery-vendor'

// iconfont
import '@/assets/iconfont/iconfont.css'

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// font-awesome
import 'font-awesome/css/font-awesome.css'

// adminlte
import 'admin-lte'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

// reset.css
import '@/assets/css/reset.css'

Vue.config.productionTip = false


new Vue({
    router: Router,
    render: h => h(App)
}).$mount('#app')

