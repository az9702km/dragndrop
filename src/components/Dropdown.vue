<template>
  <div class="dropdown">
    <button
      :class="['btn btn--outline btn--primary btn--icon dropdown__toggle', isOpen && 'open']"
      @click="isOpen = !isOpen"
    >
      <Icon icon="dots-horizontal" />
    </button>
    <ul class="dropdown__menu" v-if="isOpen">
      <li>
        <a href="#!" class="dropdown__item"><Icon icon="edit" /> Редактировать</a>
      </li>
      <li>
        <a href="#!" class="dropdown__item"><Icon icon="delete" /> Удалить</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'
let isOpen = ref(false)
</script>
