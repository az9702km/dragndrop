<template>
  <div class="container">
    <h1 class="title">Список тем обращения и продуктов <span class="badge">Найдено: 3</span></h1>
    <FileList :propFiles="files"></FileList>
  </div>

  <svg width="0" height="0" class="hidden">
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chevron-down">
      <path
        d="M8 10L12 14L16 10"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dots-horizontal">
      <path
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z"
        fill="currentColor"
      ></path>
    </symbol>
    <symbol id="delete" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 1.66699H7.5C6.58083 1.66699 5.83333 2.41449 5.83333 3.33366V5.00033H2.5V6.66699H4.16667V16.667C4.16667 17.5862 4.91417 18.3337 5.83333 18.3337H14.1667C15.0858 18.3337 15.8333 17.5862 15.8333 16.667V6.66699H17.5V5.00033H14.1667V3.33366C14.1667 2.41449 13.4192 1.66699 12.5 1.66699ZM7.5 3.33366H12.5V5.00033H7.5V3.33366ZM14.1667 16.667H5.83333V6.66699H14.1667V16.667Z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="edit" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8708 6.16751C16.1858 5.85251 16.3591 5.43417 16.3591 4.98917C16.3591 4.54417 16.1858 4.12584 15.8708 3.81084L14.5491 2.48917C14.2341 2.17417 13.8158 2.00084 13.3708 2.00084C12.9258 2.00084 12.5075 2.17417 12.1933 2.48834L3.33331 11.3208V15H7.01081L15.8708 6.16751ZM13.3708 3.66751L14.6933 4.98834L13.3683 6.30834L12.0466 4.98751L13.3708 3.66751ZM4.99998 13.3333V12.0125L10.8666 6.16417L12.1883 7.48584L6.32248 13.3333H4.99998ZM3.33331 16.6667H16.6666V18.3333H3.33331V16.6667Z"
        fill="currentColor"
      />
    </symbol>
  </svg>
</template>

<style>
.container {
  width: 100%;
  max-width: 103.5rem;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-family: Acrom, sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
}

.badge {
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.005em;
  border-radius: 1rem;
  background: var(--dnd-white);
  color: var(--color-brand);
  font-weight: 500;
}

.title .badge {
  margin-left: 0.875rem;
}
.btn.file-list-expand-btn.open {
  --background-color: var(--dnd-blue-100);
  --color: var(--color-brand);
  --border-color: var(--color-brand);
  --hover-bg-color: rgba(var(--color-brand-rgb), 0.3);
}
.file-list-expand-btn.open .icon {
  transform: rotate(180deg);
}
.file-list {
  display: flex;
  flex-direction: column;
  grid-gap: 0.25rem;
}

.file-list .file-list__item {
  border-radius: 0.75rem;
  background: var(--dnd-white);
}

.file-wrapper .file-card {
  border-bottom: 1px solid var(--color-border);
}

.file-list .file-list .file-card {
  border-bottom: none;
}

.file-list .file-wrapper .file-list .file-list__item:not(:last-child) .file-card .file {
  border-bottom: 1px solid var(--color-border);
}

.file-list .file-wrapper .file-list .file-list__item .file-wrapper > .file-card .file {
  border-bottom: 1px solid var(--color-border);
}

.file-list .file-list {
  grid-gap: 0;
}

.file-list .file .file-number {
  padding-left: 0;
}

.file-list .file-list .file-list__item {
  background-color: transparent;
  border-radius: 0;
}

.file-list .file {
  margin-left: 2rem;
}

.file {
  display: grid;
  grid-template-columns: 3rem 2fr 2fr 6fr 13rem;
}

.file .file__col {
  padding: 1.25rem 1rem;
}
.file .file__col:last-child {
  padding-right: 2rem;
}
.file .file__meta {
  font-size: 0.75rem;
  line-height: 1.2;
  margin-bottom: 0.625rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.file .file__meta-value {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.25rem;
  font-size: 1rem;
  font-weight: 500;
}

.file-actions {
  display: flex;
  align-items: center;
  grid-gap: 0.75rem;
  justify-content: end;
}

.file-wrapper > .file-card .file-name .file__meta-value {
  font-weight: 700;
  text-transform: uppercase;
}

.btn {
  --border-color: transparent;
  --background-color: var(--dnd-gray-100);
  --color: var(--color-text);
  --hover-bg-color: var(--dnd-gray-200);
  cursor: pointer;
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--color);
  letter-spacing: 0.035em;
  padding: 0.375rem 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.125rem;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background: var(--hover-bg-color);
  transition: all 0.2s ease-in-out;
}

.btn.btn--primary {
  --background-color: var(--color-brand);
  --color: var(--dnd-white);
  --hover-bg-color: var(--color-brand-ocean);
}
.btn.btn--outline {
  --background-color: transparent;
  --color: var(--color-brand);
  --border-color: var(--color-brand);
  --hover-bg-color: var(--dnd-blue-100);
}

.btn--icon {
  line-height: 0;
  padding: 0.1875rem;
}

.badge.badge-file {
  background: rgba(var(--color-brand-ocean-rgb), 0.3);
  color: var(--dnd-white);
  padding-top: 0;
  padding-bottom: 0;
}

.flip-list-move {
  transition: transform 0.2s;
}
</style>
<script setup>
import files from '@/data'
import FileList from '@/components/FileList.vue'
import { ref } from 'vue'

// const files = ref([
//   {
//     id: 1,
//     number: 1,
//     name: 'Mastercard',
//     order: 1,
//     categories:
//       'Mastercard (Standart) / Mastercard (World) / Mastercard (Platinum) / Mastercard (Gold) / Master card',
//     children: [
//       {
//         id: 2,
//         number: 1.1,
//         name: 'Максимал фойда (Нац. валюта)',
//         order: 1,
//         categories: '',
//         children: []
//       },
//       {
//         id: 3,
//         number: 1.2,
//         name: 'On-line (Нац. валюта)',
//         order: 2,
//         categories: '',
//         children: []
//       }
//     ]
//   },
//   {
//     id: 4,
//     number: 2,
//     name: 'вклады',
//     order: 2,
//     categories:
//       'Максимал фойда (Нац. валюта) / On-line (Нац. валюта) / Аванс (Нац. валюта) / Максимал фойда',
//     children: [
//       {
//         id: 5,
//         number: 2.1,
//         name: 'Максимал фойда (Нац. валюта)',
//         order: 1,
//         categories: '',
//         children: []
//       },
//       {
//         id: 6,
//         number: 2.2,
//         name: 'On-line (Нац. валюта)',
//         order: 2,
//         categories: '',
//         children: []
//       },
//       {
//         id: 7,
//         number: 2.3,
//         name: 'Аванс (Нац. валюта)',
//         order: 3,
//         categories: '',
//         children: []
//       },
//       {
//         id: 8,
//         number: 2.4,
//         name: 'Максимал фойда (Ин. валюта)',
//         order: 4,
//         categories: '',
//         children: []
//       },
//       {
//         id: 9,
//         number: 2.5,
//         name: 'On-line (Ин. валюта)',
//         order: 5,
//         categories: '',
//         children: []
//       },
//       {
//         id: 10,
//         number: 2.6,
//         name: 'Аванс (Ин. валюта)',
//         order: 6,
//         categories: '',
//         children: []
//       }
//     ]
//   },
//   {
//     id: 11,
//     number: 3,
//     name: 'ОТправка в чат бот',
//     order: 3,
//     categories:
//       'Mastercard (Standart) / Mastercard (World) / Mastercard (Platinum) / Mastercard (Gold) / Master card',
//     children: [
//       {
//         id: 12,
//         number: 3.1,
//         name: 'Максимал фойда (Нац. валюта)',
//         order: 1,
//         categories: '',
//         children: []
//       },
//       {
//         id: 13,
//         number: 3.2,
//         name: 'On-line (Нац. валюта)',
//         order: 2,
//         categories: '',
//         children: []
//       }
//     ]
//   }
// ])
</script>
