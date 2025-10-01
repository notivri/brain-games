<template>
  <div class="header-container">
    <transition name="slide-header" mode="out-in">
      <mainHeader v-if="$route.meta.showHeader" />
    </transition>
  </div>
  <div class="content">
    <RouterView v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" v-if="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
  import mainHeader from "/src/widgets/mainHeader.vue"
</script>

<style scoped>
  .header-container {
    height: 3rem;
    position: relative;
  }

  .slide-header-enter-active,
  .slide-header-leave-active {
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-header-enter-from,
  .slide-header-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  .slide-header-enter-to,
  .slide-header-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
