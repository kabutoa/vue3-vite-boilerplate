<template>
  <div class="nav">
    <button
      v-for="button in buttonConfig"
      :key="button.id"
      @click="onJumpRouter(button.type)"
    >
      {{ button.text }}
    </button>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export interface buttonConfigIF {
  id: number
  text: string
  type: string
}

const buttonConfig: Array<buttonConfigIF> = [
  {
    id: 1,
    text: 'home',
    type: 'home'
  },
  {
    id: 2,
    text: 'about',
    type: 'about'
  }
]

export default defineComponent({
  setup() {
    const router = useRouter()

    const onJumpRouter = (type: string) => {
      router.push({ name: type })
    }

    return {
      buttonConfig,
      onJumpRouter
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100%;

  > button {
    width: px2vw(120);
    height: px2vh(48);
    background-color: #409eff;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
