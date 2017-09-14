<!-- 底部导航栏 组件 -->

<template>
 <div class="index_b_nav">
    <ul class="clearfix">
        <li class="active">
            <a href="/default">
                <i></i>
                <span>首页</span>
            </a>
        </li>
        <li>
            <a href="/classmenu">
                <i></i>
                <span>分类</span>
            </a>
        </li>
        <li>
            <a href="/cart">
                <i></i>
                <span>购物车</span>
                <em class="cart_count"></em>
            </a>
        </li>
        <li>
            <a href="/user/member">
                <i></i>
                <span>我的</span>
            </a>
        </li>
    </ul>
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
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="css" scoped>
</style>
