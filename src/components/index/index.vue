<!-- 首页 -->
<template>
  <div class="baixiu_index">
  <!-- 顶部搜索 -->
  <search></search>
  <!-- 轮播图 -->
     <div class="index_banner">
        <div id="js_gsimgv4">
            <ul class="slides swiper-wrapper">
            </ul>
            <div class="swiper-pagination"></div>
        </div>

    </div>
  <!-- 主页导航 -->
  <div class="index_nav">
        <ul class="clearfix">
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/f298aff0-5662-4f2f-9d5c-2e0694a51172.jpg alt="">
                        <span>隐形</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/8d9dce14-79ba-4c77-a366-d449868f4a02.jpg alt="">
                        <span>护理液</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/c319ca5a-484e-4cf3-9988-1fbb94bcd071.jpg alt="">
                        <span>美妆</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/729a3f53-59aa-46a5-9ac1-0fd6b7f87e3d.jpg alt="">
                        <span>护肤</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/94e49bbf-6277-4c84-b91f-80ea33b400d9.jpg alt="">
                        <span>打包</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/2e4c11a8-76f1-4d6a-8544-3c5d2cf9c2c2.jpg alt="">
                        <span>积分</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/2d19bc81-4bcc-4f51-bfe2-7875956295de.jpg alt="">
                        <span>0元购</span>
                    </a>
                </li>
                <li>
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/7f9bef5f-9126-45a1-81f0-f456aa235212.jpg alt="">
                        <span>1元福利</span>
                    </a>
                </li>
        </ul>
    </div>
  <!-- 中部导航 -->
  <div class="middle_nav">
    <div class="middle_nav_t clearfix">
                <div class="middle_nav_t_l fl">
                    <a href="192.168.117.146:8007/">
                        <img src=http://192.168.117.146:8011/AppImages/90cbc656-5c85-4b55-b533-6f8e5256d17e.jpg alt="" onerror="this.src = 'https://pic.baishop.com/app/images/goods_errimg.png'">
                    </a>
                </div>
                    <div class="middle_nav_t_r fl clearfix">
                        <a href="192.168.117.146:8007/" class="fl">
                            <img src=http://192.168.117.146:8011/AppImages/30f5c12e-2282-4c20-9109-31450f8ef3be.jpg alt="" onerror="this.src = 'https://pic.baishop.com/app/images/goods_errimg.png'">
                        </a>
                        <a href="192.168.117.146:8007/" class="fl">
                            <img src=http://192.168.117.146:8011/AppImages/daae8ca8-b2e3-4661-a885-3ef5e0a230e3.jpg alt="" onerror="this.src = 'https://pic.baishop.com/app/images/goods_errimg.png'">
                        </a>
                    </div>

    </div>
        <div class="middle_nav_b">
            <a href="192.168.117.146:8007/">
                <img src=http://192.168.117.146:8011/AppImages/806e72ec-ca89-4c41-9167-d4309e388cc6.jpg alt="">
            </a>
        </div>

  <!-- 主页商品展示 -->
   <div class="goods_nav">
            <ul class="clearfix">
                        <li>
                            <a>
                                <img src=http://192.168.117.146:8011/AppImages/ef499244-916f-426c-9ffa-e30eef8c52e6.jpg alt="" onerror="this.src = 'https://pic.baishop.com/app/images/goods_errimg.png'">
                                <div>
                                    <div class="goods_nav_t">
                                        <span>
                                            爱尔康傲滴多功能护理液
                                        </span>
                                        <div class="goods_nav_b">
                                            <span class="mid baixiu">￥45.00</span><span>销量</span><span>0</span><span>件</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
            </ul>
        </div>

</div>

  <!-- 底部固定导航 -->
  <tab-bar></tab-bar>
  </div>
</template>

<script>
import Search from '@/components/base/search/search'
import TabBar from '@/components/base/tab-bar/tab-bar'
// import swiper from '@/assets/scripts/swiper.js'
// import common from '@/assets/scripts/common.js'
// import flexible from '@/assets/scripts/flexible.js'
// import index from '@/assets/scripts/index.js'

export default {
  components: {
    Search,
    TabBar
  },
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="css" scoped>
@import '~@/assets/css/default/index.css';
</style>
