<!-- 主页导航 组件 -->
<template>
  <li>
    <a :href="data.TargetUrl">
      <img :src="data.ImageName" alt="">
      <span>{{ data.NameOrKey }}</span>
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
