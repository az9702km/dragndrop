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
<style>
.dropdown {
  position: relative;
}

.dropdown .dropdown__menu {
  padding: 0.25rem;
  min-width: 5rem;
  position: absolute;
  list-style: none;
  right: 0;
  background-color: var(--dnd-white);
  border-radius: 0.75rem;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.07),
    0px 2px 5px 0px rgba(0, 0, 0, 0.05),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06);
  z-index: 10;
}
.dropdown .dropdown__item {
  padding: 0.625rem;
  font-size: 0.9375rem;
  line-height: 1.25rem;
  letter-spacing: 0.005em;
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  grid-gap: 0.625rem;
  border-radius: 0.5rem;
}
.dropdown .dropdown__item:hover {
  background-color: var(--dnd-blue-100);
}
.dropdown .dropdown__item .icon {
  color: var(--color-text-secondary);
  width: 1.25rem;
  height: 1.25rem;
  line-height: 0;
}
.dropdown .btn.dropdown__toggle.open {
  --background-color: var(--color-brand);
  --color: var(--dnd-white);
  --hover-bg-color: var(--color-brand);
}
</style>
<script setup>
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'
let isOpen = ref(false)
</script>
