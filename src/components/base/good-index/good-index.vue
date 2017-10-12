<!-- 首页商品详情 组件 -->
<template>
    <li>
        <a :href="data.DetailData[0].TargetUrl">
            <img :src="data.DetailData[0].ImageName" alt="" onerror="this.src = 'https://pic.baishop.com/app/images/goods_errimg.png'">
            <div>
                <div class="goods_nav_t">
                    <span>
                        {{ data.DetailData[0].SellNBZC }}
                    </span>
                    <div class="goods_nav_b">
                        <span class="mid baixiu">{{ data.DetailData[0].Price }}</span>
                        <span>销量</span>
                        <span>{{ data.DetailData[0].TotalCount }}</span>
                        <span>件</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () { },
  mounted () { },
  destroyed () { }
}
</script>

<style lang="css" scoped>

</style>
