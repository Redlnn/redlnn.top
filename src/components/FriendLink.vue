<script setup lang="ts">
defineProps<{
  name: string
  link: string
  avatarUrl: string
  shadowColor: string
}>()
</script>

<template>
  <a class="link" :href="link" target="_blank">
    <div
      class="avatar"
      :style="{
        backgroundImage: `url('${avatarUrl}')`,
        boxShadow: `0 0 10px ${shadowColor}`,
      }"
    ></div>
    <p class="name">{{ name }}</p>
  </a>
</template>
