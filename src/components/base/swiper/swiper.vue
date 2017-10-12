<!-- 主页导航 组件 -->
<template>
  <li class="swiper-slide gsimg_item swiper-slide-active" style="width: 540px;">
      <a :href="data.TargetUrl">
          <img :src="data.ImageName" width="100%" :onerror="this.src =this.GLOBAL.url+'app/images//Com/mid_placeHolder@2x.png'">
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
