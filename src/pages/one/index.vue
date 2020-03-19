<template>
  <div  class="oneDiv">
    <div>首页。。。。</div>
    <div class="topOne">
      第一个
    </div>
    <div class="twoOne">
      第二个{{name}}
    </div>
    <div>
      <el-button type="primary" @click="tuichu">退出</el-button>
    </div>
  </div>
</template>
<script>
import {loginOutApi} from '@/api/login'
import { removeToken } from '@/utils/auth'
export default {
  name: 'One',
  data () {
    return {
      name: ''
    }
  },
  computed: {},
  methods: {
    tuichu () {
      removeToken()
      location.reload()
    },
    changWE () {
      this.$router.push('/two')
    }
  },
  created () {
    loginOutApi().then(({data}) => {
      this.name = data[0].username
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .oneDiv{
   @mixin com($value:100px){
    height:$value;
    line-height: 100px;
    text-align:center;
    font-size:20px;
   }
  .topOne{
    @include com(100px);
    background-color: greenyellow;
  }
  .twoOne{
    @include com(200px);
    background-color:lightcoral;
  }
 }
</style>
