// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import babelpolyfill from 'babel-polyfill'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    val: null,
    token: null
  },
  getters: {
    gettoken: (state) => {
      return state.token;
    },
    getdata:(state) => {
      return state.val;
    }
  },
  mutations: {
    setdata(state,val) {
      state.val = val;
    },
    settoken(state,token) {
      state.token = token
    }
  },
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data () {
    return{
      user_token: null,
      path:'http://api.eawsp.com/',
      updateItem:'',
      submitdata:{},
      suibian:{
        nav_isshow:'true'
      }
  }}
})
