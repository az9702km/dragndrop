import { ref } from 'vue'

const files = ref([
  {
    id: 1,
    number: 1,
    name: 'Mastercard',
    order: 1,
    categories:
      'Mastercard (Standart) / Mastercard (World) / Mastercard (Platinum) / Mastercard (Gold) / Master card',
    children: [
      {
        id: 2,
        number: 1.1,
        name: 'Максимал фойда (Нац. валюта)',
        order: 1,
        categories: '',
        children: []
      },
      {
        id: 3,
        number: 1.2,
        name: 'On-line (Нац. валюта)',
        order: 2,
        categories: '',
        children: []
      }
    ]
  },
  {
    id: 4,
    number: 2,
    name: 'вклады',
    order: 2,
    categories:
      'Максимал фойда (Нац. валюта) / On-line (Нац. валюта) / Аванс (Нац. валюта) / Максимал фойда',
    children: [
      {
        id: 5,
        number: 2.1,
        name: 'Максимал фойда (Нац. валюта)',
        order: 1,
        categories: '',
        children: []
      },
      {
        id: 6,
        number: 2.2,
        name: 'On-line (Нац. валюта)',
        order: 2,
        categories: '',
        children: []
      },
      {
        id: 7,
        number: 2.3,
        name: 'Аванс (Нац. валюта)',
        order: 3,
        categories: '',
        children: []
      },
      {
        id: 8,
        number: 2.4,
        name: 'Максимал фойда (Ин. валюта)',
        order: 4,
        categories: '',
        children: []
      },
      {
        id: 9,
        number: 2.5,
        name: 'On-line (Ин. валюта)',
        order: 5,
        categories: '',
        children: []
      },
      {
        id: 10,
        number: 2.6,
        name: 'Аванс (Ин. валюта)',
        order: 6,
        categories: '',
        children: []
      }
    ]
  },
  {
    id: 11,
    number: 3,
    name: 'ОТправка в чат бот',
    order: 3,
    categories:
      'Mastercard (Standart) / Mastercard (World) / Mastercard (Platinum) / Mastercard (Gold) / Master card',
    children: [
      {
        id: 12,
        number: 3.1,
        name: 'Максимал фойда (Нац. валюта)',
        order: 1,
        categories: '',
        children: []
      },
      {
        id: 13,
        number: 3.2,
        name: 'On-line (Нац. валюта)',
        order: 2,
        categories: '',
        children: []
      }
    ]
  }
])

export default files
