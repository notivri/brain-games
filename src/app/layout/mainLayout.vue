<template>
  <mainHeader v-if="$route.meta.showHeader" />

  <div class="content">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <component :is="Component" />
      </template>
    </RouterView>
  </div>
</template>

<script setup>
  import mainHeader from "../../widgets/mainHeader.vue"
</script>
