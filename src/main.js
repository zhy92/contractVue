import Vue from "vue";
import router from "./router/router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
import App from "./App.vue";
import '../static/stylus/global.styl';
import './icon/iconfont.js';
import './icon/icon.css';
import axios from './axios';
import api from './axios/httpApi';

import IconSvg from '@/components/icon-svg';
import tableList from '@/components/table-list';
import pagination from '@/components/pagination';
import searchForm from '@/components/search-form';

Vue.prototype.$http = axios;
Vue.prototype.$api = api;

Vue.component('icon-svg', IconSvg);
Vue.component('table-list', tableList);
Vue.component('pager-list', pagination);
Vue.component('search-form', searchForm);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");