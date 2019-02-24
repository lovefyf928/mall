import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import User_information from '@/components/User_information'
import Account_security from '@/components/Account_security'
import Receiving_address from '@/components/Receiving_address'
import fund_management from '@/components/fund_management'
import red from '@/components/red'
import Refundable from '@/components/Refundable'
import evaluate from '@/components/evaluate'
import Collection from '@/components/Collection'
import follow from '@/components/follow'
import message from '@/components/message'
import login from '@/components/login'
import whole from '@/components/whole'
import add_address from '@/components/add_address'
import recharge from '@/components/recharge'
import putforward from '@/components/putforward'
import recharge_success from '@/components/recharge_success'
import putforward_success from '@/components/putforward_success'
import message_success from '@/components/message_success'
import update_address from '@/components/update_address'
import waiting_for_delivery from '@/components/Waiting_for_delivery'
import Home from '@/components/home'
import sidebar from '@/components/sidebar'
import submit from '@/components/submit'
import success from '@/components/success'
import success2 from '@/components/success2'
import Integral_mall from  '@/components/Integral_mall'
import mall from '@/components/mall'
import mall_index from '@/components/mall_index'
import mall_street from '@/components/mall_street'
import add_class from '@/components/add_class'
import food_fresh from '@/components/food_fresh'
import fenlei from '@/components/fenlei'
import search_jump from '@/components/search_jump'
import Login_modify from '@/components/Login_modify'
import Pay_modify from '@/components/Pay_modify'
import purchase_success from '@/components/purchase_success'
import waiting_pay from "@/components/waiting_pay"
import AfterSales from "@/components/AfterSales"
import waiting_send from "@/components/waiting_send"
import logistics from "@/components/logistics"
import Commodity_evaluation from "@/components/Commodity_evaluation"
import Complaint_merchant from "@/components/Complaint_merchant"
import details from "@/components/Commodity_details"
import shop_index from "@/components/shop_index"
import classification from "@/components/classification"
import mallheader from "../components/mall_header"
import NewsPage from "../components/NewsPage"  //新闻页
import NewsDetails from "../components/NewsDetails"//新闻详情页



Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   component: mall
    // },
    {
      path: '/login',
      component: login
    },
    {
      path: '/header',
      component: mallheader
    },
    {
      path:'/shop_index',
      component:shop_index
    },
    {
      path: '/sidebar',
      component: sidebar
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/submit',
      component: submit
    },
    {
      path: '/success',
      component: success
    },
    {
      path: '/success2',
      component: success2
    },
    {
      path: '/food_fresh',
      component: food_fresh
    },
    {
      path: '/',
      component: mall,
      children: [
        {
          path: '/mall/imall',
          component: Integral_mall,
          name:'Integral_mall'
        },
        {
          path: '/',
          component: mall_index
        },
        {
          path: '/mall',
          component: mall_index
        },
        {
          path: '/mall/street',
          component: mall_street,
          name:'mall_street'
        },
        {
          path: '/mall/fenlei',
          component: fenlei
        },
        {
          path: '/mall/classification',
          name: 'classification',
          component: classification
        },
        {
          path: "/mall/search_jump",
          name: "search_jump",
          component: search_jump
        },
        {
          path: "/mall/details",
          component: details
        },
        {
          path: "/mall/NewsPage",
            component: NewsPage,
          name:'NewsPage'
        },
        {
          path: "/mall/NewsDetails",
          component: NewsDetails,
          name:'NewsDetails'
        },



      ]
    },
    {
      path: '/add',
      component: add_class
    },
    {
      path: '/whole',
      name: 'whole',
      component: whole,
      children:[
        {
          path: '/whole',
          name: 'HelloWorld',
          component: HelloWorld
        },{
          path: '/whole/Order',
          name: 'Order',
          // redirect:'/whole/Order',
          component: Order
        },
        {
          path: '/whole/User_information',
          name: 'User_information',
          component: User_information
        },
        {
          path: '/whole/Account_security',
          name: 'Account_security',
          component: Account_security
        },
        {
          path: '/whole/Receiving_address',
          name: 'Receiving_address',
          component: Receiving_address
        },
        {
          path: '/whole/waiting_pay',
          name: 'waiting_pay',
          component: waiting_pay
        },
        {
          path: '/whole/Commodity_evaluation',
          name: 'Commodity_evaluation',
          component: Commodity_evaluation
        },
        {
          path: '/whole/Complaint_merchant',
          name: 'Complaint_merchant',
          component: Complaint_merchant
        },
        {
          path: '/whole/logistics',
          name: 'logistics',
          component: logistics
        },
        {
          path: '/whole/waiting_send',
          name: 'waiting_send',
          component: waiting_send
        },
        {
          path: '/whole/AfterSales',
          name: 'AfterSales',
          component: AfterSales
        },
        {
          path: '/whole/fund_management',
          name: 'fund_management',
          component: fund_management
        },
        {
          path: '/whole/purchase_success',
          name: 'purchase_success',
          component: purchase_success
        },
        {
          path:'/whole/Account_security/Login_modify',
          name:'Login_modify',
          component:Login_modify
        },{
          path:'/whole/Account_security/Pay_modify',
          name:'Pay_modify',
          component:Pay_modify
        },
        {
          path: '/whole/red',
          name: 'red',
          component: red
        },
        {
          path: '/whole/Refundable',
          name: 'Refundable',
          component: Refundable
        },
        {
          path: '/whole/evaluate',
          name: 'evaluate',
          component: evaluate
        },
        {
          path: '/whole/Collection',
          name: 'Collection',
          component: Collection
        },
        {
          path: '/whole/follow',
          name: 'follow',
          component: follow
        },
        {
          path: '/whole/message',
          name: 'message',
          component: message
        },
        {
          path: '/whole/add_address',
          name: 'add_address',
          component: add_address
        },
        {
          path: '/whole/recharge',
          name: 'recharge',
          component: recharge
        },
        {
          path: '/whole/add_address',
          name: 'add_address',
          component: add_address
        },
        {
          path: '/whole/putforward',
          name: 'putforward',
          component: putforward
        },
        {
          path: '/whole/recharge_success',
          name: 'recharge_success',
          component: recharge_success
        },
        {
          path: '/whole/putforward_success',
          name: 'putforward_success',
          component: putforward_success
        },
        {
          path: '/whole/message_success',
          name: 'message_success',
          component: message_success
        },
        {
          path: '/whole/update_address',
          name: 'update_address',
          component: update_address
        },
        {
          path: '/whole/logistics',
          name: 'logistics',
          component: logistics
        },
        {
          path: '/whole/waiting_send',
          name: 'waiting_send',
          component: waiting_send
        },
        {
          path: '/whole/waiting_for_delivery',
          component: waiting_for_delivery
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/Order',
    //   name: 'Order',
    //   component: Order
    // },
    // {
    //   path: '/User_information',
    //   name: 'User_information',
    //   component: User_information
    // },
    // {
    //   path: '/Account_security',
    //   name: 'Account_security',
    //   component: Account_security
    // },
    // {
    //   path: '/Receiving_address',
    //   name: 'Receiving_address',
    //   component: Receiving_address
    // },
    // {
    //   path: '/fund_management',
    //   name: 'fund_management',
    //   component: fund_management
    // },
    // {
    //   path: '/red',
    //   name: 'red',
    //   component: red
    // },
    // {
    //   path: '/Refundable',
    //   name: 'Refundable',
    //   component: Refundable
    // },
    // {
    //   path: '/evaluate',
    //   name: 'evaluate',
    //   component: evaluate
    // },
    // {
    //   path: '/Collection',
    //   name: 'Collection',
    //   component: Collection
    // },
    // {
    //   path: '/follow',
    //   name: 'follow',
    //   component: follow
    // },
    // {
    //   path: '/message',
    //   name: 'message',
    //   component: message
    // }
  ]
})
