<template>
  <div class="file-list">
    <FileListItem
      v-for="(file, i) in propFiles"
      :key="file.id"
      @dragover="(e) => onDragOver(file, i, e)"
      @dragstart="(e) => startDrag(file, i, e)"
      :file="file"
      draggable="true"
    ></FileListItem>
  </div>
</template>
<script setup>
import files from '@/data'
import { ref } from 'vue'
import FileListItem from './FileListItem.vue'
const fileList = defineProps({
  propFiles: Array
})

let currentPos = ref(0)
let startLoc = ref(0)
let dragging = ref(0)
let dragFrom = ref({})

const onDragOver = (item, pos, e) => {
  if (pos !== currentPos.value) {
    files.value.splice(currentPos.value, 1)
    files.value.splice(pos, 0, dragFrom.value)
    currentPos.value = pos
  }
}

const startDrag = (item, i, e) => {
  startLoc.value = e.clientY
  dragging.value = true
  dragFrom.value = item
  currentPos.value = i
}
</script>
