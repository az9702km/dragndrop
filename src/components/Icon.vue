<script setup>
const icon = defineProps(['icon']);
</script>
<template>
  <svg class="icon">
    <use :xlink:href="`#${icon.icon}`"></use>
  </svg>
</template>
<style>
.icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
