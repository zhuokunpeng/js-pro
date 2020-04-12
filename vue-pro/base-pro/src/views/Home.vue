<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    this is the greate wall web :)

    <div>{{info}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import cst from '../public/const'
export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // }
  data(){
    return {
      info: {"name":"123"}
    }
  },
  beforeCreate(){
    // Lambda写法
    console.log(cst.baseUrl+'/api')
    this.$http.get(cst.baseUrl+'/api').then((response) => {
        // 响应成功回调
        console.log(response.body)
        this.info = response.body
    }, (response) => {
        // 响应错误回调
    });
  }
}
</script>
