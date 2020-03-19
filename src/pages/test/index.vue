<template>
  <div class="testDiv">
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :preview-src-list="srcList">
  </el-image>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-image></el-image>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data () {
    return {
      url: require('../../assets/images/login-bg.jpg'),
      srcList: [require('../../assets/images/login-bg.jpg')]
    }
  },
  computed: {},
  methods: {},
  created () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.testDiv{
  .headDiv{
font-size: Extra Small
  }
  .el-header,.el-footer {
    background-color: #67C23A;
    color: #333;
    line-height: 60px;
  }
  .oneColor{
    height: 60px;
    background-color: lightseagreen;
  }
  .twoColor{
    height: 60px;
    background-color: rgb(178, 32, 122);
  }
}
</style>
