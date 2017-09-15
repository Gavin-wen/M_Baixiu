<!-- 搜索组件 -->
<template>
  <div class="search_top clearfix">
    <div class="search_input fl">
      <input type="text" placeholder="请输入搜索内容" @focus="toSearchinfo" />
    </div>
    <div class="fr">
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {
    toSearchinfo () {
      this.$router.push({
        path: '/searchinfo'
      })
    }
  },
  filters: {},
  computed: {},
  created () { },
  mounted () { },
  destroyed () { }
}
</script>

<style lang="css" scoped>

</style>
