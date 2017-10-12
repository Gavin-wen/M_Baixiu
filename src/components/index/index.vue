<!-- 首页 -->
<template>
  <div class="baixiu_index">
    <!-- 顶部搜索 -->
    <search></search>
    <!-- 轮播图 -->
    <div class="index_banner">
      <div id="js_gsimgv4">
        <ul class="slides swiper-wrapper">
          <swiper  v-for="item in banners" :key="item.ID" :data="item"></swiper>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 主页导航 -->
    <div class="index_nav">
      <ul class="clearfix">
        <main-bar v-for="item in indexList" :key="item.ID" :data="item"></main-bar>
      </ul>
    </div>
    <!-- 中部导航 -->
    <div class="middle_nav">
      <div class="middle_nav_t clearfix">
        <div class="middle_nav_t_l fl">
          <a :href="activityEntrys[0]!=null ? activityEntrys[0].TargetUrl : ''">
            <img :src="activityEntrys[0] ? activityEntrys[0].ImageName : ''" alt="" :onerror="this.src =this.GLOBAL.url+ 'app/images/goods_errimg.png'">
          </a>
        </div>
        <div class="middle_nav_t_r fl clearfix">
          <a :href="activityEntrys[1]!=null ? activityEntrys[1].TargetUrl : ''" class="fl">
            <img :src="activityEntrys[1] ? activityEntrys[1].ImageName : ''" alt="" :onerror="this.src = this.GLOBAL.url+'/app/images/goods_errimg.png'">
          </a>
          <a :href="activityEntrys[2]!=null ? activityEntrys[2].TargetUrl : ''" class="fl">
            <img :src="activityEntrys[2] ? activityEntrys[2].ImageName : ''" alt="" :onerror="this.src = this.GLOBAL.url+'/app/images/goods_errimg.png'">
          </a>
        </div>

      </div>
      <div v-for="item1 in handpickClass" :key="item1.ID" :data="item1">
        <div class="middle_nav_b">
          <a :href="item1.TargetUrl">
            <img :src="item1.BannerImage" alt="">
          </a>
        </div>
        <!-- 主页商品展示 -->
        <div class="goods_nav">
          <ul class="clearfix">
            <good-index v-for="item in item1.Products" :key="item.ID" :data="item"></good-index>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部固定导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Search from '@/components/base/search/search'
import TabBar from '@/components/base/tab-bar/tab-bar'
import MainBar from '@/components/base/main-bar/main-bar'
import GoodIndex from '@/components/base/good-index/good-index'
import Swiper from '@/components/base/swiper/swiper'
import axios from 'axios'
import qs from 'qs'

export default {
  components: {
    Search,
    TabBar,
    MainBar,
    GoodIndex,
    Swiper
  },
  data () {
    return {
      indexList: [],
      handpickClass: [],
      activityEntrys: [],
      banners: []
    }
  },
  props: {},
  watch: {},
  methods: {
    // 初始化列表数据
    _initIndexListData () {
      var parm = {
        versionNo: 'A1.0.0'
      }
      axios.post(this.GLOBAL.apiurl + 'api/Home/GetHomePage?versionNo=A1.0.0', qs.stringify(parm)).then(res => {
        console.log('来面试啊')
        console.log('面试邮箱 kede@qq.com')
        if (res.data.State === true) {
          this.indexList = res.data.Data.QuickEntrys
          this.handpickClass = res.data.Data.HandpickClass
          this.activityEntrys = res.data.Data.ActivityEntrys
          this.banners = res.data.Data.Banners
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  filters: {},
  computed: {},
  created () { // 初始化列表数据
    this._initIndexListData()
  },
  mounted () { },
  destroyed () { }
}
</script>

<style lang="css" scoped>
</style>
