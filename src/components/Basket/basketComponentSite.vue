<script setup="">
// core
import {computed, onMounted, ref} from 'vue'
import _ from 'lodash'
import {useDisplay} from 'vuetify'
import {useBasketStore} from '../../stores/counterBasket.js'
import {useInstrumentStore} from '../../stores/counter.js'
import {useRouter} from "vue-router/dist/vue-router";
import axios from "axios";
import {ProccesingSuccessfuly} from "../../notification/toasting";
import {formatDateAndTime} from '../../moment/moment.js'
import {useRoute} from 'vue-router'

const {date, time} = formatDateAndTime()
const {name} = useDisplay()
const router = useRouter()

const {filterByNameInstrument, postAxiosInstrumentById} = useInstrumentStore()
const {
  getLocalStorageInBasketObject,
  fetchingUsers,
  fetchingUserId,
} = useBasketStore()
getLocalStorageInBasketObject()

const widthFunc = () => {
  if (name.value === 'xxl') {
    return '500'
  } else if (name.value === 'xl') {
    return '400'
  } else if (name.value === 'lg') {
    return '270'
  } else if (name.value === 'md') {
    return '200'
  } else if (name.value === 'sm') {
    return '130'
  } else if (name.value === 'xs') {
    return '120'
  }
}
const heightFunc = () => {
  if (name.value === 'xxl') {
    return '90'
  } else if (name.value === 'xl') {
    return '90'
  } else if (name.value === 'lg') {
    return '72'
  } else if (name.value === 'md') {
    return '49'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'xs') {
    return '36'
  }
}
const widthFuncVBtnBasket = () => {
  if (name.value === 'xxl') {
    return '48'
  } else if (name.value === 'xl') {
    return '48'
  } else if (name.value === 'lg') {
    return '32'
  } else if (name.value === 'md') {
    return '32'
  } else if (name.value === 'sm') {
    return '32'
  } else if (name.value === 'xs') {
    return '32'
  }
}
const heightFuncVBtnBasket = () => {
  if (name.value === 'xxl') {
    return '48'
  } else if (name.value === 'xl') {
    return '48'
  } else if (name.value === 'lg') {
    return '32'
  } else if (name.value === 'md') {
    return '32'
  } else if (name.value === 'sm') {
    return '32'
  } else if (name.value === 'xs') {
    return '32'
  }
}
const sizeFuncVBtnBasket = () => {
  if (name.value === 'xxl') {
    return 'large'
  } else if (name.value === 'xl') {
    return 'default'
  } else if (name.value === 'lg') {
    return 'x-small'
  } else if (name.value === 'md') {
    return 'x-small'
  } else if (name.value === 'sm') {
    return 'x-small'
  } else if (name.value === 'xs') {
    return 'x-small'
  }
}

// Basket, Amount

let counterTrueFalseInBasket = ref(false)

const arrayObjectsInInstrumentCopy = JSON.parse(localStorage.getItem("basket_object"))

let arrayAmount = []
let arraySum = []


const deleteArray = () => {
  localStorage.setItem("basket_object", JSON.stringify([]))
}

const forIArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    arrayAmount.push(array[i].orderSum)
    arraySum.push(array[i].priceOrder)
  }
}
forIArray(arrayObjectsInInstrumentCopy)

const numberInAmount = ref(0)
const numberInPriceSum = ref(0)

const forIArrayAmount = (array) => {
  for (let i = 0; i < array.length; i++) {
    numberInAmount.value = numberInAmount.value + array[i]
  }
  localStorage.setItem("basket_array_amount", JSON.stringify(numberInAmount.value))
}
forIArrayAmount(arrayAmount)
const forIArraySum = (array) => {
  for (let i = 0; i < array.length; i++) {
    numberInPriceSum.value = numberInPriceSum.value + array[i]
  }
  localStorage.setItem("basket_array_price_sum", JSON.stringify(numberInPriceSum.value))
}
forIArraySum(arraySum)


const clickInBasket = async (array) => {
  try {
    const data = ref({
      string: array.name
    })
    if (await postAxiosInstrumentById(data.value)) {
      await filterByNameInstrument(array.name)
      await router.push({name: 'searchInstrumentByName', params: {id: array.id}})
    }
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
}

// User

const userIdData = ref('')
const userIdDataMain = ref('')
const titleInProcessing = ref('Ожидание обработки')
const trueOrFalseDiv = ref(JSON.parse(localStorage.getItem("basket_click_user")))

let dateClickUserOrder = ref(null)
localStorage.setItem("basket_click_user", JSON.stringify(false))
const getIdUser = async () => {
  const userId = ref(JSON.parse(localStorage.getItem("id_user_basket")))

  if (await fetchingUsers()) {
    if (await fetchingUserId(userId.value)) {
      if (JSON.parse(localStorage.getItem("basket_click_user"))) {
        userIdDataMain.value = JSON.parse(localStorage.getItem("user_id"))
        userIdData.value = userIdDataMain.value[0].instrumentArray
        dateClickUserOrder.value = userIdDataMain.value[0].dateClick
        console.log(`Fetching user id good`);
        if (userIdDataMain.value[0].processing === 'Ожидание обработки') {
          titleInProcessing.value = 'Ожидание обработки'
        } else if (userIdDataMain.value[0].processing === 'Принят в обработку') {
          titleInProcessing.value = 'Принят в обработку'
        } else if (userIdDataMain.value[0].processing === 'Отклонен в обработке') {
          titleInProcessing.value = 'Отклонен в обработке'
        }
      } else {

      }

    } else {

    }
  }




}

const clickToDeleteInBasket = (name) => {
  const data = ref('')
  data.value = _.remove(arrayObjectsInInstrumentCopy, {name: name})
  localStorage.setItem("basket_object", JSON.stringify(arrayObjectsInInstrumentCopy))
  ProccesingSuccessfuly(`Вы успешно удалили "${name}"`)
  setTimeout(() => {
    window.location.reload()
  }, 2000)
}
const funcDisabled = () => {
  if (titleInProcessing.value === 'Ожидание обработки' || counterTrueFalseInBasket.value === true) {
    return true
  } else {
    return false
  }
}
onMounted(async () => {
  await getIdUser()


  if (arrayObjectsInInstrumentCopy.length === 0) {
    counterTrueFalseInBasket.value = true
  } else {
    counterTrueFalseInBasket.value = false
  }
})
</script>

<template>
  <v-container class="d-flex flex-column flex-wrap">
    <div class="blockTitleInSite d-flex">
      <h1 class="blockTitleInSiteTitle">Корзина</h1>
      <v-btn
          @click="deleteArray"
          class="blockTitleInSiteBtnDelete d-flex justify-center align-center"
          href="/basket/">Удалить все товары
      </v-btn>
    </div>
    <div class="blockBasketInSite">
      <div class="blockFirstBasket">
        <div class="blockTrueInBasketClear"
             v-if="counterTrueFalseInBasket">
          <h1 class="blockTrueInBasketClearTitle">Ваша корзина пока пуста</h1>
          <p class="blockTrueInBasketClearText">Чтобы добавить товар, перейдите в наш каталог, выберите интересующую
            вас категорию, затем выберите тип инструмента и нажмите на кнопку "Купить", или воспользуйтесь поисковой
            строкой. После этого выбранный вами товар отобразится в корзине.</p>
        </div>
        <div v-else>
          <div class="blockMainBasketInfo d-flex ">
            <div class="blockMainBasketInfoText">
              <h1 class="blockMainBasketInfoTextTitle">Наименование</h1>
            </div>
            <div class="blockMainBasketPriceAmountSum d-flex">
              <h1 class="blockMainBasketPrice">Цена</h1>
              <h1 class="blockMainBasketAmount">Кол-во</h1>
              <h1 class="blockMainBasketSum">Сумма</h1>
            </div>
          </div>
          <div class="blockVCardFirstBasketDiv">
            <div class="blockVCardFirstBasket"
                 v-for="item in arrayObjectsInInstrumentCopy">
              <div class="absoluteCloseBlock">
                <v-btn
                    class="absoluteCloseVBtn"
                    :width="widthFuncVBtnBasket()"
                    :height="heightFuncVBtnBasket()"
                    :size="sizeFuncVBtnBasket()"
                    @click="clickToDeleteInBasket(item.name)" icon="fa-solid fa-x"></v-btn>
              </div>
              <div class="blockVCardFirstBasketItemPhotoMain d-flex justify-center align-center">
                <img :src="item.imgTitle" alt="" class="blockVCardFirstBasketItemPhoto">
              </div>
              <div class="blockVCardFirstBasketItemInfoText">
                <p class="blockVCardFirstBasketItemSubtitle">Код: {{ item.id }}</p>
                <h1
                    @click="clickInBasket(item)"
                    class="blockVCardFirstBasketItemTitle">{{ item.name }}</h1>
              </div>
              <div class="blockVCardFirstBasketItemPriceAmountSum">
                <div class="blockVCardFirstBasketItemPriceMain d-flex justify-center align-center">
                  <h1 class="blockVCardFirstBasketItemPriceMainTitle">{{ item.price }} р.</h1>
                </div>
                <div class="blockVCardFirstBasketItemAmountMain d-flex justify-center align-center">
                  <h1 class="blockVCardFirstBasketItemAmountMainTitle">{{ item.orderSum }} шт</h1>
                </div>
                <div class="blockVCardFirstBasketItemSumMain d-flex justify-center align-center">
                  <h1 class="blockVCardFirstBasketItemSumMainTitle">{{ item.priceOrder }} р.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blockVCardFirstBasketDiv"
             v-if="trueOrFalseDiv"
        >
          <h1 class="titleInProcessing">{{ titleInProcessing }}, заказ был сделан в {{ dateClickUserOrder }}</h1>
          <div class="blockVCardFirstBasket"
               v-for="item in userIdData">
            <div class="blockVCardFirstBasketItemPhotoMain d-flex justify-center align-center">
              <img :src="item.imgTitle" alt="" class="blockVCardFirstBasketItemPhoto">
            </div>
            <div class="blockVCardFirstBasketItemInfoText">
              <p class="blockVCardFirstBasketItemSubtitle">Код: {{ item.id }}</p>
              <h1
                  @click="clickInBasket(item)"
                  class="blockVCardFirstBasketItemTitle">{{ item.name }}</h1>
            </div>
            <div class="blockVCardFirstBasketItemPriceAmountSum">
              <div class="blockVCardFirstBasketItemPriceMain d-flex justify-center align-center">
                <h1 class="blockVCardFirstBasketItemPriceMainTitle">{{ item.price }} р.</h1>
              </div>
              <div class="blockVCardFirstBasketItemAmountMain d-flex justify-center align-center">
                <h1 class="blockVCardFirstBasketItemAmountMainTitle">{{ item.orderSum }} шт</h1>
              </div>
              <div class="blockVCardFirstBasketItemSumMain d-flex justify-center align-center">
                <h1 class="blockVCardFirstBasketItemSumMainTitle">{{ item.priceOrder }} р.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blockSecondBasket ">
        <div class="blockSecondBasketDiv">
          <h1 class="secondBasketMainTitle">Ваш заказ</h1>
          <h1 class="secondBasketChoiceTitle">Выбрано товаров на кол-во:
            <span class="secondBasketSpanInText">{{ numberInAmount }} шт</span></h1>
          <h1 class="secondBasketPriceTitle">Общая стоимость заказа:
            <span class="secondBasketSpanInText">{{ numberInPriceSum }} рублей</span></h1>
          <v-divider
              :thickness="2"
              class="border-opacity-25"
              color="background"
          ></v-divider>
          <div class="secondBlockVBtnBlock d-flex justify-center align-center">
            <v-btn
                href="/checkout/"
                :width="widthFunc()"
                :height="heightFunc()"
                :disabled="funcDisabled()"
                class="secondBasketVBtnDesign"
            >Оформить заказ
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../../assets/mixins';


// Media

@media screen and (max-width: 600px) {
  /*  стили для xs-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }


  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 60px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 1.8rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 1.5rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 0.7rem;
    font-weight: 500;
    padding-top: 10px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 50%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 50%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    width: 90%;
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 1.3rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    padding: 12px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 80px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 80px;
    height: 80px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 180px;
    padding-left: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.6rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 0.8rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 50%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 100%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    text-align: center;
    color: $text;
    font-size: 0.8rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
    width: 90%;
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1.3rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 50px;
    font-weight: 500;
    font-size: 0.7rem;
    padding-left: 12px;
    padding-right: 12px;
    color: $text;
  }

  .secondBasketChoiceTitle {

  }

  .secondBasketPriceTitle {
    height: 60px;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 110px;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    font-size: 0.6rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /*  стили для sm-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 60px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 1.8rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 1.5rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 0.7rem;
    font-weight: 500;
    padding-top: 10px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 50%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 50%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    width: 90%;
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 1.3rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    padding: 12px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 80px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 80px;
    height: 80px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 180px;
    padding-left: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.6rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 0.8rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 50%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 100%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    text-align: center;
    color: $text;
    font-size: 0.8rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
    width: 90%;
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1.3rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 50px;
    font-weight: 500;
    font-size: 0.7rem;
    padding-left: 12px;
    padding-right: 12px;
    color: $text;
  }

  .secondBasketChoiceTitle {

  }

  .secondBasketPriceTitle {
    height: 60px;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 110px;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /*  стили для md-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 60px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 1.7rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 0.8rem;
    font-weight: 500;
    padding-top: 10px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }

  .blockMainBasketInfoText {
    width: 50%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1.2rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 50%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
    margin-top: 10px;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 150px;
    display: flex;
    margin-top: 60px;
    padding: 25px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 100px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 100px;
    height: 100px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 180px;
    margin-left: 8px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.6rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 0.8rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 50%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 100%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 1rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1.3rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 70px;
    font-weight: 500;
    font-size: 0.9rem;
    padding-top: 12px;
    padding-left: 24px;
    padding-right: 24px;
    color: $text;
  }

  .secondBasketChoiceTitle {

  }

  .secondBasketPriceTitle {
    height: 80px;
    margin-bottom: 24px;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 110px;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 60px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 2rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 1rem;
    font-weight: 500;
    padding-top: 30px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }

  .blockMainBasketInfoText {
    width: 50%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1.4rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 50%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
    margin-top: 10px;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 1.6rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 170px;
    display: flex;
    margin-top: 60px;
    padding: 25px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 150px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 150px;
    height: 150px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 240px;
    margin-left: 8px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.8rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.2rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 50%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 100%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 1.3rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 450px;
    border-radius: 20px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1.4rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 70px;
    font-weight: 500;
    font-size: 1.1rem;
    padding-top: 12px;
    padding-left: 24px;
    padding-right: 24px;
    color: $text;
  }

  .secondBasketChoiceTitle {

  }

  .secondBasketPriceTitle {
    margin-bottom: 24px;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 45%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 60px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 2.5rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 1.3rem;
    font-weight: 500;
    padding-top: 30px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //
  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 50%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 2rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 50%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
    margin-top: 40px;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 2rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 250px;
    display: flex;
    margin-top: 60px;
    padding: 25px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 200px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 170px;
    height: 150px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 430px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 1.1rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.5rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 50%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 100%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 2rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 650px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 2.5rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 100px;
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: 24px;
    padding-right: 24px;
    color: $text;
  }

  .secondBasketChoiceTitle {
    height: 50px;
  }

  .secondBasketPriceTitle {

  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 45%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  // True block

  .blockTrueInBasketClear {
    width: 100%;
    min-height: 300px;
  }

  .blockTrueInBasketClearTitle {
    font-size: 2.5rem;
    color: $primary;
  }

  .blockTrueInBasketClearText {
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 30px;
    color: $text;
  }

  //

  // Close Basket Item

  .absoluteCloseBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .absoluteCloseVBtn {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .absoluteCloseVBtn:hover {
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  //

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 2rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
    margin-top: 30px;
  }

  .titleInProcessing {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 30px;
    color: $text;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 250px;
    display: flex;
    margin-top: 50px;
    padding: 25px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 200px;
    height: 180px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    margin-left: 16px;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 1.6rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.8rem;
    font-weight: 550;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    display: flex;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 2rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 25%;
  }

  .blockSecondBasketDiv {
    width: 100%;
    height: 650px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 2.5rem;
    padding-top: 20px;
    color: $text;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 100px;
    font-weight: 500;
    font-size: 2rem;
    padding-left: 24px;
    color: $text;
  }

  .secondBasketChoiceTitle {
    height: 60px;
  }

  .secondBasketPriceTitle {

  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 45%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

</style>
