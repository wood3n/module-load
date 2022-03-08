<template>
  <el-button @click="handleClick">测试</el-button>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      console.log('测试');
    }
  }
}
</script>
