
<template>
  <input v-model="name" placeholder="请输入账号" />
  <input v-model="password" placeholder="请输入密码" />
  <p>{{ name }}</p>
  <button @click="handleLogin">登陆</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      name: '',
      password: ''
    })
    const handleLogin = () => {
      console.log(state.name, state.password)
    }
    return {
      ...toRefs(state),
      handleLogin
    }
  }
})
</script>

<style>

</style>