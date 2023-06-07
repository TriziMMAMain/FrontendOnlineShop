<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
import _ from 'lodash'
import {useBasketStore} from '../../stores/counterBasket.js'
import axios from 'axios';
import {ProccesingSuccessfuly} from "../../notification/toasting";
import {useRouter} from 'vue-router'

const router = useRouter()
const {name} = useDisplay()
const {postAxiosUser} = useBasketStore()

const numberInPriceSum = localStorage.getItem("basket_array_price_sum")

const weightFunc = () => {
  if (name.value === 'xxl') {
    return '550'
  } else if (name.value === 'xl') {
    return '550'
  } else if (name.value === 'lg') {
    return '450'
  } else if (name.value === 'md') {
    return '300'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'xs') {
    return ''
  }
}
const heightFunc = () => {
  if (name.value === 'xxl') {
    return '100'
  } else if (name.value === 'xl') {
    return '72'
  } else if (name.value === 'lg') {
    return '72'
  } else if (name.value === 'md') {
    return '56'
  } else if (name.value === 'sm') {
    return '48'
  } else if (name.value === 'xs') {
    return ''
  }
}
const weightFuncSecond = () => {
  if (name.value === 'xxl') {
    return '550'
  } else if (name.value === 'xl') {
    return '550'
  } else if (name.value === 'lg') {
    return '450'
  } else if (name.value === 'md') {
    return '300'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'xs') {
    return ''
  }
}
const heightFuncSecond = () => {
  if (name.value === 'xxl') {
    return '72'
  } else if (name.value === 'xl') {
    return '64'
  } else if (name.value === 'lg') {
    return '64'
  } else if (name.value === 'md') {
    return '56'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'xs') {
    return ''
  }
}

// form
const valid = ref(false)

const nameRulesUser = [
  value => {
    if (value?.length <= 1) {
      return "Мало символов"
    } else {
      return true
    }
  }
]
const numberRulesUser = [
  value => {
    if (value.length <= 9) {
      return "Мало цифр!"
    } else {
      return true
    }
    if (!/^\d+$/.test(value)) {
      return "Неверный формат номера!"
    } else {
      return true
    }
  }
];
const emailRulesUser = [
  value => {
    if (!/.+@.+\..+/.test(value)) {
      return 'Пишите корректный email'
    } else {
      return true
    }
  },
]
const checkboxDeliveryRulesUser = [
  value => {
    if (value.length <= 12) {
      return "Пишите полный адрес вашего проживания"
    } else {
      return true
    }
  }
]

// form end

const local = JSON.parse(localStorage.getItem("basket_object"))

// node js

const formData = ref({
  newId: 0,
  name: '',
  phone: '',
  email: '',
  deliveryType: [],
  address: '',
  instrumentArray: local,
  dayAndTime: '',
  processing: 'Ожидание обработки'
})

const clickInInfo = async () => {
  const newIdMath = ref(Math.floor(Math.random() * 1000000))
  formData.value.newId = newIdMath.value
  await postAxiosUser(formData.value)
  localStorage.setItem("id_user_basket", JSON.stringify(formData.value.newId))
  ProccesingSuccessfuly('Вы подтвердили свой заказ, ожидайте!')
  formData.value = {
    newId: 0,
    name: '',
    phone: '',
    email: '',
    deliveryType: [],
    address: '',
    instrumentArray: local,
    dayAndTime: '',
    processing: 'Ожидание обработки'
  }
  localStorage.setItem("basket_object", JSON.stringify([]))
  localStorage.setItem("basket_click_user", JSON.stringify(true))
  await router.push({name: 'basketComponent'})
}

// node js end

const valueDelivery = ref('Самовывоз')
const checkValueDelivery = () => {
  if (formData.value.deliveryType[0] === 'Самовывоз') {
    valueDelivery.value = 'Самовывоз'
  } else if (formData.value.deliveryType[0] === 'Доставка') {
    valueDelivery.value = 'Самовывоз'
  } else {
    valueDelivery.value = 'Адрес пункта выдачи: г.Донецк, Ленинский район, пр.Алымова дом 10'
  }
}
const trueOrFalseTitle = ref(false)
const trueOrFalseTitleDelivery = ref(false)
const checkValueTitle = () => {
  if (formData.value.deliveryType[0] === undefined) {
    trueOrFalseTitle.value = false
    trueOrFalseTitleDelivery.value = false
  }
  if (formData.value.deliveryType[0] === 'Самовывоз') {
    trueOrFalseTitle.value = false
    trueOrFalseTitleDelivery.value = true
  } else if (formData.value.deliveryType[0] === 'Доставка') {
    trueOrFalseTitle.value = true
    trueOrFalseTitleDelivery.value = false
  }
}
checkValueTitle()

const fluidFunc = () => {
  if (name.value === 'xs') {
    return ''
  } else if (name.value === 'sm') {
    return 'fluid'
  } else if (name.value === 'md') {
    return 'fluid'
  } else if (name.value === 'lg') {
    return 'fluid'
  } else if (name.value === 'xl') {
    return 'fluid'
  } else if (name.value === 'xxl') {
    return 'fluid'
  }
}
</script>

<template>
  <v-container class="mainBlockInSite d-flex" fluid>
    <div class="blockFormMain">
      <v-form v-model="valid">
        <div class="divForNameNumberEmail">
          <v-text-field
              class="vTextFieldInForm"
              color="text"
              bg-color="background"
              v-model="formData.name"
              :rules="nameRulesUser"
              :counter="1"
              label="Имя"
              prepend-icon="fa-solid fa-signature"
              variant="solo"
              required
          ></v-text-field>
          <v-text-field
              type="number"
              class="vTextFieldInForm"
              color="text"
              bg-color="background"
              v-model="formData.phone"
              :rules="numberRulesUser"
              :counter="11"
              label="Номер телефона"
              prepend-icon="fa-solid fa-phone"
              variant="solo"
              required
          ></v-text-field>
          <v-text-field
              class="vTextFieldInForm"
              color="text"
              bg-color="background"
              v-model="formData.email"
              :rules="emailRulesUser"
              label="Email"
              prepend-icon="fa-solid fa-envelope"
              variant="solo"
              required
          ></v-text-field>
        </div>
        <div class="divForDelivery"
             @click="checkValueDelivery()">
          <v-checkbox
              color="primary"
              v-model="formData.deliveryType"
              :label="valueDelivery"
              value="Самовывоз"
              :disabled="formData.deliveryType[0] === 'Доставка'"
              hide-details
          ></v-checkbox>
          <v-checkbox
              color="primary"
              v-model="formData.deliveryType"
              label="Доставка"
              value="Доставка"
              :disabled="formData.deliveryType[0] === 'Самовывоз'"
              hide-details
          ></v-checkbox>
          <v-text-field
              class="vTextFieldInForm"
              color="text"
              bg-color="background"
              v-model="formData.address"
              :rules="checkboxDeliveryRulesUser"
              :counter="3"
              label="Адрес доставки"
              prepend-icon="fa-solid fa-truck"
              variant="solo"
              :disabled="formData.deliveryType[0] === 'Самовывоз' || formData.deliveryType[0] === undefined"
              required
          ></v-text-field>
          <v-text-field
              class="vTextFieldInForm"
              color="text"
              bg-color="background"
              v-model="formData.dayAndTime"
              label="Желаемая дата и время доставки на дом"
              prepend-icon="fa-solid fa-truck"
              variant="solo"
              :disabled="formData.deliveryType[0] === 'Самовывоз' || formData.deliveryType[0] === undefined"
              required
          ></v-text-field>
        </div>
      </v-form>
    </div>
    <div class="blockConfirmPurchase">
      <div class="purchaseVCardMain">
        <h1 class="purchaseVCardMainTitle">Сумма заказа: {{ numberInPriceSum }} рублей</h1>
        <div class="purchaseVCardSecondBlockUserData">
          <h1 class="userDataTitle">Введенные данные: </h1>
          <h1 class="userDataNameTitle">Имя: <span class="spanTextUserData">{{ formData.name }}</span></h1>
          <h1 class="userDataNumberTitle">Номер телефона: <span class="spanTextUserData">{{ formData.phone }}</span>
          </h1>
          <h1 class="userDataEmailTitle">Почта: <span class="spanTextUserData">{{ formData.email }}</span></h1>
          <div class="purchaseVCardBtnActions">
            <v-btn
                class="vbtnUserData"
                :width="weightFuncSecond()"
                :height="heightFuncSecond()"
                @click="checkValueTitle()">Показать тип доставки
            </v-btn>
          </div>
          <h1 class="userDataCheckbox" v-if="trueOrFalseTitle"><span
              class="spanTextUserData">{{ formData.deliveryType[0] + ':' }}
            {{ formData.address + ';' }} {{ 'День и время доставки: ' + formData.dayAndTime }}</span></h1>
          <h1 class="userDataCheckbox" v-if="trueOrFalseTitleDelivery">
            {{ formData.deliveryType[0] }}
          </h1>
        </div>
        <div class="purchaseVCardSecondBlockButtonAction d-flex justify-center align-center">
          <v-btn
              @click="clickInInfo()"
              :width="weightFunc()"
              :height="heightFunc()"
              class="buttonActionBtn">Подтвердить заказ
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../../assets/mixins';

.mainBlockInSite {
  border-radius: 10px;
}

.purchaseVCardMain {
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 150vh;
    margin-top: 40px;
    padding: 10px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 90%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 210px;
    min-height: 350px;
    max-height: 550px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
  ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    min-height: 40px;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    min-height: 150px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 100px;
  }

  .buttonActionBtn {
    font-size: 0.8rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 150vh;
    margin-top: 40px;
    padding: 10px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 90%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 210px;
    min-height: 350px;
    max-height: 550px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
  ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    min-height: 40px;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    min-height: 150px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 100px;
  }

  .buttonActionBtn {
    font-size: 0.8rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 40px;
    padding: 25px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
    //background-color: $primary;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 80%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 320px;
    min-height: 750px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
    ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    min-height: 40px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    height: 400px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 200px;
  }

  .buttonActionBtn {
    width: 60%;
    font-size: 1.2rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 40px;
    padding: 35px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
    //background-color: $primary;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 80%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 450px;
    min-height: 750px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
  ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    height: 70px;
    font-size: 1.5rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    height: 400px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 1.2rem;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 200px;
  }

  .buttonActionBtn {
    width: 60%;
    font-size: 1.3rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 40px;
    padding: 45px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
    //background-color: $primary;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 80%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 650px;
    min-height: 750px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
  ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    height: 100px;
    font-size: 2rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    height: 400px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 2rem;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 200px;
  }

  .buttonActionBtn {
    width: 60%;
    font-size: 1.5rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 2560px) {
  .mainBlockInSite {
    width: 100%;
    min-height: 100vh;
    margin-top: 40px;
    padding: 45px;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
    background-color: $background;
  }

  .blockFormMain {
    width: 60%;
    min-height: 100vh;
    //background-color: $primary;
  }

  .divForNameNumberEmail {
    width: 100%;
    height: 250px;
    background-color: $background;
  }

  .vTextFieldInForm {
    width: 80%;
    color: $primary;
  }

  .divForDelivery {
    width: 100%;
  }

  //

  .blockConfirmPurchase {
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: end;
  }

  .purchaseVCardMain {
    width: 650px;
    min-height: 750px;
    padding: 20px;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.35)
  ;
    background-color: $background;
  }

  .purchaseVCardMainTitle {
    width: 100%;
    height: 100px;
    font-size: 2rem;
    font-weight: 600;
    color: $primary;
    background-color: $background;
  }

  .purchaseVCardSecondBlockUserData {
    width: 100%;
    height: 400px;
    background-color: $background;
  }

  .userDataTitle {
    text-align: center;
    font-size: 2rem;
    color: $text;
  }

  .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    color: $primary;
  }

  .spanTextUserData {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    color: $text;
  }

  .userDataNameTitle {
  }

  .userDataNumberTitle {
  }

  .userDataEmailTitle {
  }

  .userDataCheckbox {
  }

  .purchaseVCardBtnActions {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .vbtnUserData {
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .vbtnUserData:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .purchaseVCardSecondBlockButtonAction {
    width: 100%;
    min-height: 200px;
  }

  .buttonActionBtn {
    width: 60%;
    font-size: 1.5rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .buttonActionBtn:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}
</style>