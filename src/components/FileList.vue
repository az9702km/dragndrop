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

// Стартовая позиция
let startLoc = ref(0)
// Перетаскиваемый HTML элемент или же узел дом 
let dragFrom = ref({})
// Позиция элемента при перемещении
let currentPos = ref(0)

// При перетаскивании запоминаем элемент dragFrom и стартовую позицию курсора startLoc и html элемента currentPos 
const startDrag = (item, i, e) => {
  startLoc.value = e.clientY
  dragFrom.value = item
  currentPos.value = i
}

// При перетаскивании над другими элементами выполняем swap в структуре данных, моментально. Есть еще другой подход где есть начало перетаскивания, перемещение и конец, и только в конце структура данных обновляется, но с точки зрения UX это было бы не целесообразно. 

// Проверка на позицию, проверяем не находится ли наш перетаскиваемый элемент в своей исходной позиции pos !== currentPos.value

/* Далее убираем элемент с исходной позиции 
      files.value.splice(currentPos.value, 1) 
и кладем элемент а точнее структуру данных в позицию над которым мы выполняем перетаскивание 
      files.value.splice(pos, 0, dragFrom.value)
после удачного перемещения обновляем исходную позицию
      currentPos.value = pos
И так в реальном времени наш элемент будет перемещен
*/
const onDragOver = (item, pos, e) => {
  if (pos !== currentPos.value) {
    files.value.splice(currentPos.value, 1)
    files.value.splice(pos, 0, dragFrom.value)
    currentPos.value = pos
  }
}
</script>
