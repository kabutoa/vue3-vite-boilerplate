<template>
  <div class="home-view">
    <el-button @click="onMessage">test message</el-button>
  </div>
</template>

<script setup lang="ts">
const onMessage = () => {
  ElMessage('this is a message.')
}
</script>
