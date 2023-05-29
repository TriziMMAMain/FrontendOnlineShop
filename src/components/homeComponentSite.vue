<script setup="">
// Import
import {ref} from 'vue'
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
import {useRouter} from 'vue-router'

const photoInMainComponent = ref([
  {
    src: 'https://avatars.mds.yandex.net/i?id=5fbe748b28b7ff1c872a77cc2f07d885-4890288-images-thumbs&n=13',
    link: '/cordless-instrument/drills/'
  },
  {
    src: 'https://makita-profi.ru/image/cache/catalog/foto/szrn0h01-800x800.jpg',
    link: '/network-instrument/drill/'
  },
  {
    src: 'https://мега-снаб.рф/netcat_files/1e/36/1e364b7f066d343788d96ba7980af0ea.jpg',
    link: '/network-instrument/drill/'
  },
  {
    src: 'https://static.tildacdn.com/tild6435-6661-4963-a331-353639346661/Fv5m6LYwsWk.jpg',
    link: '/network-instrument/drill/'
  }
])
const photoInAdInstrument = ref([
  {
    src: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/800943/560x504/53392205.jpg',
    link: '/cordless-instrument/drills'
  },
  {
    src: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/akkumulyatornyj-instrument/701952/560x504/51268908.jpg',
    link: '/cordless-instrument/screwdrivers/'
  },
  {
    src: 'https://procraft.ua/image/cache/catalog/akkumuljatornye_instryment/akkumuljatornaja-bolgarka/PWA216/PWA216_1-750x610.jpg',
    link: '/cordless-instrument/grinders/'
  },
])
const exampleInstrument = [
  {
    "id": 1,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 2,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 3,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 4,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 5,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 6,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  }
]
const exampleInstrument2 = [
  {
    "id": 1,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 2,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 3,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 4,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 5,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  },
  {
    "id": 6,
    "numberInList": 0,
    "type": "Аккумуляторный инструмент",
    "typeThis": "Аккумуляторная дрель",
    "brand": "Ryobi",
    "name": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0",
    "city": "Донецк",
    "featureTop": "Дрель-шуруповерт Ryobi ONE+ R18DD3-0 5133002889 идеальна для сверления дерева или металла, а также для закручивания шурупов. Быстрозажимной патрон 13мм с фиксатором эффективно передает крутящий момент и надежен в эксплуатации 2 скорости для выбора оптимального режима при работе с различными материалами и решения различных задач. 24 позиции регулировки крутящего момента позволяют аккуратно закручивать любые шурупы. LED подсветка рабочей области для более комфортной работы. ",
    // "featureTopTitle": [
    //   {
    //     "featureTopTitleInfoTitle": "MAX крутящий момент:",
    //     "featureTopTitleInfoText": "50 Нм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "MAX диаметр сверления (металл):",
    //     "featureTopTitleInfoText": "13 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Max диаметр сверления (дерево):",
    //     "featureTopTitleInfoText": "38 мм"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Тип батареи:",
    //     "featureTopTitleInfoText": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Напряжение батареи:",
    //     "featureTopTitleInfoText": "18 В"
    //   },
    //   {
    //     "featureTopTitleInfoTitle": "Вес нетто:",
    //     "featureTopTitleInfoText": "1,3 кг"
    //   }
    // ],
    // "featureMiddle": [
    //   {
    //     "Feature Order": "1",
    //     "feature": "Тип:",
    //     "featureValue": "аккумуляторный"
    //   },
    //   {
    //     "Feature Order": "2",
    //     "feature": "Тип двигателя:",
    //     "featureValue": "щеточный"
    //   },
    //   {
    //     "Feature Order": "3",
    //     "feature": "Наличие удара:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "4",
    //     "feature": "Ленточные (магазинные):",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "5",
    //     "feature": "Наличие реверса:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "6",
    //     "feature": "Наличие подсветки:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "7",
    //     "feature": "Тормоз двигателя:",
    //     "featureValue": "есть"
    //   },
    //   {
    //     "Feature Order": "8",
    //     "feature": "Тип патрона:",
    //     "featureValue": "быстрозажимной"
    //   },
    //   {
    //     "Feature Order": "9",
    //     "feature": "Крепление патрона:",
    //     "featureValue": "1/2"
    //   },
    //   {
    //     "Feature Order": "10",
    //     "feature": "Блокировка шпинделя:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "11",
    //     "feature": "Размер зажимаемой оснастки:",
    //     "featureValue": "2-13 мм"
    //   },
    //   {
    //     "Feature Order": "12",
    //     "feature": "MAX крутящий момент:",
    //     "featureValue": "50 Нм"
    //   },
    //   {
    //     "Feature Order": "13",
    //     "feature": "Число скоростей:",
    //     "featureValue": "2"
    //   },
    //   {
    //     "Feature Order": "14",
    //     "feature": "Частота вращения шпинделя:",
    //     "featureValue": "0-500/0-1800 об/мин"
    //   },
    //   {
    //     "Feature Order": "15",
    //     "feature": "Число ступеней крутящего момента:",
    //     "featureValue": "24+1"
    //   },
    //   {
    //     "Feature Order": "16",
    //     "feature": "MAX диаметр шурупа:",
    //     "featureValue": "6 мм"
    //   },
    //   {
    //     "Feature Order": "17",
    //     "feature": "MAX диаметер сверления (металла):",
    //     "featureValue": "13 мм"
    //   },
    //   {
    //     "Feature Order": "18",
    //     "feature": "MAX диаметер сверления дерева:",
    //     "featureValue": "38 мм"
    //   },
    //   {
    //     "Feature Order": "19",
    //     "feature": "Тип батареи:",
    //     "featureValue": "Li-Ion/Ni-Cd"
    //   },
    //   {
    //     "Feature Order": "20",
    //     "feature": "Напряжение батерии",
    //     "featureValue": "18 В"
    //   },
    //   {
    //     "Feature Order": "21",
    //     "feature": "Устройство аккумулятора:",
    //     "featureValue": "обойма"
    //   },
    //   {
    //     "Feature Order": "22",
    //     "feature": "Количество аккумуляторов в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "23",
    //     "feature": "Зарядное устройство в комплекте:",
    //     "featureValue": "нет"
    //   },
    //   {
    //     "Feature Order": "24",
    //     "feature": "Габариты без упаковки:",
    //     "featureValue": "291х181х267 мм"
    //   },
    //   {
    //     "Feature Order": "25",
    //     "feature": "Вес нетто:",
    //     "featureValue": "1,3 кг"
    //   },
    //   {
    //     "Feature Order": "26",
    //     "feature": "Съемный патрон:",
    //     "featureValue": "да"
    //   },
    //   {
    //     "Feature Order": "27",
    //     "feature": "Индикатор уровня зарядки на корпусе дрели:",
    //     "featureValue": "нет"
    //   }
    // ],
    // "featureDownArray": [
    //   {
    //     "featureDown": "Быстрозажимной патрон - для простой смены оснастки;"
    //   },
    //   {
    //     "featureDown": "Наличие реверса;"
    //   },
    //   {
    //     "featureDown": "Двухскоростной редуктор;"
    //   },
    //   {
    //     "featureDown": "Новая удобная рукоятка;"
    //   },
    //   {
    //     "featureDown": "24 позиции крутящего момента - для работы с различными материалами;"
    //   },
    //   {
    //     "featureDown": "Встроенная подсветка - для работы при плохом освещении."
    //   }
    // ],
    "availability": 15,
    "imgTitle": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/204x184/52309025.jpg",
    // "imgArray": [
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309025.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309026.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309027.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309028.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309029.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309030.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309032.jpg"
    //   },
    //   {
    //     "src": "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/830617/560x504/52309033.jpg"
    //   }
    //
    // ],
    "price": "3.200",
    "priceOrder": 3200,
    "to": "/cordless-instrument/drills/"
  }
]

const heightFunc = () => {
  if (name.value === 'xs') {
    return '2700'
  } else if (name.value === 'sm') {
    return '2700'
  } else if (name.value === 'md') {
    return '1350'
  } else if (name.value === 'lg') {
    return '900'
  } else if (name.value === 'xl') {
    return '450'
  } else if (name.value === 'xxl') {
    return '450'
  }
}






const router = useRouter()


const clickTrue = (itemsLink) => {
  router.push(itemsLink)
}

</script>

<template>
  <v-container fluid class="d-flex flex-wrap">
    <div class="firstBlock">
      <div class="cardMainShopSidePhoto">
        <v-carousel
            cycle
            class="carouselMainComponent"
            hide-delimiters
            color="background"
            show-arrows="hover"
        >
          <v-carousel-item
              class="w-100"
              v-for="(item, i) in photoInMainComponent"
              :key="i"
              :src="item.src"
              @click="clickTrue(item.link)"
          >
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="divMainAdInstrument d-flex justify-space-between flex-wrap">
        <div class="adInstrument" v-for="i in photoInAdInstrument">
          <v-img
              width="300"
              @click="clickTrue(i.link)"
              :src="i.src"
          ></v-img>
        </div>
      </div>
    </div>
<!--    <div class="secondBlock d-flex flex-wrap">-->
<!--      &lt;!&ndash; -&#45;&#45;CARD&ndash;&gt;-->
<!--      <v-carousel hide-delimiters-->
<!--                  :height="heightFunc()"-->
<!--      class="carouselSecondComponent">-->
<!--        <v-carousel-item-->
<!--            class="carouselSecondComponentItem"-->
<!--            cover-->
<!--        >-->
<!--          <div class="carouselSecondComponentItemBlock example w-100 pl-14 pr-14">-->
<!--            <v-card class="secondBlockCard"-->
<!--                    v-for="i in exampleInstrument"-->
<!--            >-->
<!--              &lt;!&ndash; -&#45;&#45;TOP&ndash;&gt;-->
<!--              <div class="secondBlockCardTop d-flex flex-wrap">-->

<!--                <div class="secondBlockCardTopPhoto">-->
<!--                  <img class="secondPhotoMain"-->
<!--                       alt=""-->
<!--                       :src="i.imgTitle">-->

<!--                </div>-->

<!--                <div class="secondBlockCardTopTitle">-->
<!--                  <a :href="i.to"-->
<!--                      class="secondTopTitle pa-1">{{ i.name }}</a>-->
<!--                </div>-->
<!--              </div>-->

<!--              &lt;!&ndash; -&#45;&#45;BOTTOM&ndash;&gt;-->

<!--              <div class="secondBlockCardBottom d-flex flex-row">-->
<!--                <div class="secondPrice d-flex align-center">-->
<!--                  <p class="secondPriceText d-flex align-center">{{ i.price }} <v-icon icon="fa-solid fa-tag" size="ml" end></v-icon></p>-->
<!--                </div>-->
<!--                <div class="secondBuy d-flex justify-center align-center">-->
<!--                  <v-btn class="blockBuy d-flex justify-center align-center"-->
<!--                         icon="fa-solid fa-cart-shopping"-->
<!--                  ></v-btn>-->
<!--                </div>-->
<!--              </div>-->

<!--            </v-card>-->
<!--          </div>-->
<!--        </v-carousel-item>-->

<!--        <v-carousel-item-->
<!--            class="carouselSecondComponentItem"-->
<!--            cover-->
<!--        >-->
<!--          <div class="carouselSecondComponentItemBlock example w-100 pl-14 pr-14">-->
<!--            <v-card class="secondBlockCard"-->
<!--                    v-for="i in exampleInstrument2"-->
<!--            >-->
<!--              &lt;!&ndash; -&#45;&#45;TOP&ndash;&gt;-->
<!--              <div class="secondBlockCardTop d-flex flex-wrap">-->

<!--                <div class="secondBlockCardTopPhoto">-->
<!--                  <img class="secondPhotoMain"-->
<!--                       alt=""-->
<!--                       :src="i.imgTitle">-->

<!--                </div>-->

<!--                <div class="secondBlockCardTopTitle">-->
<!--                  <a :href="i.to"-->
<!--                     class="secondTopTitle pa-1">{{ i.name }}</a>-->
<!--                </div>-->
<!--              </div>-->

<!--              &lt;!&ndash; -&#45;&#45;BOTTOM&ndash;&gt;-->

<!--              <div class="secondBlockCardBottom d-flex flex-row">-->
<!--                <div class="secondPrice d-flex align-center">-->
<!--                  <p class="secondPriceText d-flex align-center">{{ i.price }} <v-icon icon="fa-solid fa-tag" size="ml" end></v-icon></p>-->
<!--                </div>-->
<!--                <div class="secondBuy d-flex justify-center align-center">-->
<!--                  <v-btn class="blockBuy d-flex justify-center align-center"-->
<!--                         icon="fa-solid fa-cart-shopping"-->
<!--                  ></v-btn>-->
<!--                </div>-->
<!--              </div>-->

<!--            </v-card>-->
<!--          </div>-->
<!--        </v-carousel-item>-->
<!--      </v-carousel>-->

<!--    </div>-->
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/mixins';

// FIRST
.firstBlock {
  width: 100%;
  height: 700px;
}

.cardMainShopSidePhoto {
  width: 100%;
  height: 600px;
}

.carouselMainComponent {
  width: 100%;
  height: 650px;
  border: 1px solid red;
  transition: all 0.3s ease-in-out;
}

.carouselMainComponent:hover {
  transition: all 0.3s ease-in-out;
}

// SECOND MAIN

.carouselSecondComponent {
  //background-color: red;
}

.carouselSecondComponentItemBlock {
  background-color: white;
}
// SECOND
.secondBlock {
  width: 100%;
  height: 700px;
  //background-color: black;
}

.secondBlockCard {
  width: 250px;
  height: 400px;
  margin: 10px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.secondBlockCard:hover {
  box-shadow: 0 0 5px 1px $text;
  transition: all 0.3s ease-in-out;
}
// SECOND TOP
.secondBlockCardTop {
  width: 100%;
  height: 350px;
  //background-color: #4CAF50;
}

// SECOND TOP PHOTO
.secondBlockCardTopPhoto {
  width: 100%;
  height: 250px;
  //background-color: red;
}

.secondPhotoMain {
  width: 100%;
  padding: 12px;
  height: 250px;
}

// SECOND TOP TITLE
.secondBlockCardTopTitle {
  width: 100%;
  height: 100px;
  //background-color: green;
}

.secondTopTitle {
  width: 250px;
  height: 100px;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: $text;
}

// SECOND BOTTOM
.secondBlockCardBottom {
  width: 100%;
  height: 50px;
  //background-color: gainsboro;
}
// BOTTOM PRICE

.secondPrice {
  width: 70%;
  height: 50px;
  //background-color: blue;
}

.secondPriceText {
  padding-left: 8px;
  font-size: 1.5rem;
  color: $text;
}
// BOTTOM BUY
.secondBuy {
  width: 30%;
  height: 50px;
  //background-color: red;
}

.blockBuy {
  text-align: center;
  color: $background;
  background-color: $primary;
}

.blockBuy:hover {
  color: $primary;
  background-color: $background;
}

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */

}
@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */

}
@media screen and (min-width: 960px) and (max-width: 1264px)  {
  /* стили для md-устройств */
  .carouselSecondComponent {
  }
  .carouselSecondComponentItem {
  }
  .carouselSecondComponentItemBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1264px) and (max-width: 1904px)  {
  /*  стили для lg-устройств */
  .carouselSecondComponent {
  }
  .carouselSecondComponentItem {
  }
  .carouselSecondComponentItemBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1904px) {
  /*  стили для xl-устройств */
  .carouselSecondComponentItemBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

</style>
