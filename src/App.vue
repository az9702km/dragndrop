<template>
  <div class="container">
    <h1 class="title">Список тем обращения и продуктов <span class="badge">Найдено: 3</span></h1>
    <FileList :propFiles="files"></FileList>
  </div>
  <SvgSprite></SvgSprite>
</template>
<script setup>
import files from '@/data'
import FileList from '@/components/FileList.vue'
import SvgSprite from '@/components/SvgSprite.vue'
</script>
