import Vue from 'vue'
import Router from 'vue-router'

// import Index from '@/components/index/index'
// import Find from '@/components/find/find'
// import Order from '@/components/order/order'
// import Mine from '@/components/mine/mine'
// import RestaurantDetail from '@/components/index/restaurant-detail/restaurant-detail'
// import RestaurantList from '@/components/index/restaurant-list/restaurant-list'
// import Goods from '@/components/index/restaurant-detail/goods/goods'
// import Ratings from '@/components/index/restaurant-detail/ratings/ratings'
// import Seller from '@/components/index/restaurant-detail/seller/seller'
// import login from '@/components/login/login'

Vue.use(Router)

// 路由懒加载
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    // 首页
    {
      path: '/index',
      component: Index
    }
  ]
})
