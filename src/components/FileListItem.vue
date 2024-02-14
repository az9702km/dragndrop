<template>
  <div
    v-if="file.children.length"
    class="file-list__item"
    :id="`folder-heading-${file.id}`"
    :aria-expanded="isOpen"
    :aria-controls="`folder-body-${file.id}`"
  >
    <div class="file-wrapper">
      <div class="file-card">
        <div class="file">
          <div class="file__col file-number">
            <div class="file__meta">№</div>
            <div class="file__meta-value">{{ file.number }}</div>
          </div>
          <div class="file__col file-name">
            <div class="file__meta">Название</div>
            <div class="file__meta-value">
              <Icon icon="folder" /> <span>{{ file.name }}</span>
            </div>
          </div>
          <div class="file__col file-order">
            <div class="file__meta">Очередность</div>
            <div class="file__meta-value">{{ file.order }}</div>
          </div>
          <div class="file__col file-categories">
            <div class="file__meta">Подкатегории</div>
            <div class="file__meta-value">
              {{ file.categories }}
            </div>
          </div>
          <div class="file__col file-actions">
            <span class="badge badge-file">{{ file.children.length }}</span>
            <button
              :class="['btn btn--primary btn--icon file-list-expand-btn', isOpen && 'open']"
              @click="isOpen = !isOpen"
            >
              <Icon icon="chevron-down" />
            </button>
            <Dropdown />
          </div>
        </div>
      </div>
      <FileList
        :propFiles="file.children"
        :id="`folder-body-${file.id}`"
        :aria-labelledby="`folder-heading-${file.id}`"
        v-show="isOpen"
      ></FileList>
    </div>
  </div>
  <div v-else class="file-list__item">
    <div class="file-card">
      <div class="file">
        <div class="file__col file-number">
          <div class="file__meta">№</div>
          <div class="file__meta-value">{{ file.number }}</div>
        </div>
        <div class="file__col file-name">
          <div class="file__meta">Название</div>
          <div class="file__meta-value">
            <Icon icon="file" /><span>{{ file.name }}</span>
          </div>
        </div>
        <div></div>
        <div class="file__col file-order">
          <div class="file__meta">Очередность</div>
          <div class="file__meta-value">{{ file.order }}</div>
        </div>
        <div class="file__col file-actions">
          <Dropdown />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script setup>
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'
import FileList from '@/components/FileList.vue'
import Dropdown from './Dropdown.vue'
const fileListItem = defineProps({
  file: Object
})

let isOpen = ref(false)
</script>
