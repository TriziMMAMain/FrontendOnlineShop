<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
import _ from 'lodash'
import {useBasketStore} from '../../stores/counterBasket.js'


const {name} = useDisplay()

const numberInPriceSum = localStorage.getItem("basket_array_price_sum")

const heightFunc = () => {
  if (name.value === 'xl') {
    return '72'
  } else if (name.value === 'lg') {
    return '72'
  } else if (name.value === 'md') {
    return '56'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'xs') {
    return '36'
  }
}

// form
const valid = ref(false)

const nameRulesUser = [
  value => {
    if (value?.length <= 1) return "Мало символов"
  }
]
const numberRulesUser = [
  value => {
    if (value.length <= 10) return "Мало цифр!";
    if (!/^\d+$/.test(value)) return "Неверный формат номера!";
  }
];
const emailRulesUser = [
  value => {
    if (!/.+@.+\..+/.test(value)) return 'Пишите корректный email'
    return true
  },

]
const checkboxDeliveryRulesUser = [
  value => {
    if (value.length <= 12) return "Пишите полный адрес вашего проживания"
  }
]

// form end

const local = JSON.parse(localStorage.getItem("basket_object"))

// node js

//import axios module
import axios from 'axios';

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
});


const clickInInfo = () => {
  const newIdMath = ref(Math.floor(Math.random() * 1000000))
  formData.value.newId = newIdMath.value
  console.log(`formData`, formData.value)
  axios.post('http://localhost:3000/api/user', formData.value)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  localStorage.setItem("id_user_basket", JSON.stringify(formData.value.newId))
  // basket_array

}

// node js end


</script>

<template>
  <v-container class="mainBlockInSite d-flex" fluid>
    <div class="blockFormMain">
      <v-form v-model="valid">
        <v-row
            class="rowInForm d-flex flex-wrap flex-column">
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                class="vTextFieldInForm"
                color="text"
                bg-color="background"
                v-model="formData.name"
                :rules="nameRulesUser"
                :counter="1"
                label="Имя"
                prepend-icon="mdi-vuetify"
                variant="solo"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                type="number"
                class="vTextFieldInForm"
                color="text"
                bg-color="background"
                v-model="formData.phone"
                :rules="numberRulesUser"
                :counter="11"
                label="Номер телефона"
                prepend-icon="mdi-vuetify"
                variant="solo"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                class="vTextFieldInForm"
                color="text"
                bg-color="background"
                v-model="formData.email"
                :rules="emailRulesUser"
                label="Email"
                prepend-icon="fa-solid fa-input-text"
                variant="solo"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="4"
          >
            <v-checkbox
                color="primary"
                v-model="formData.deliveryType"
                label="Самовывоз"
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
          </v-col>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                class="vTextFieldInForm"
                color="text"
                bg-color="background"
                v-model="formData.address"
                :rules="checkboxDeliveryRulesUser"
                :counter="3"
                label="Адрес доставки"
                prepend-icon="fa-solid fa-input-text"
                variant="solo"
                :disabled="formData.deliveryType[0] === 'Самовывоз' || formData.deliveryType[0] === undefined"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                class="vTextFieldInForm"
                color="text"
                bg-color="background"
                v-model="formData.dayAndTime"
                label="Желаемая дата и время доставки на дом"
                prepend-icon="fa-solid fa-input-text"
                variant="solo"
                :disabled="formData.deliveryType[0] === 'Самовывоз' || formData.deliveryType[0] === undefined"
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="blockConfirmPurchase d-flex justify-end">
      <v-card class="purchaseVCardMain">
        <h1 class="purchaseVCardMainTitle d-flex align-center pl-4">Итого: {{ numberInPriceSum }} рублей</h1>
        <div class="purchaseVCardSecondBlockUserData pa-2">
          <h1 class="userDataTitle">Введенные данные: </h1>
          <h1 class="userDataNameTitle">Имя: {{ formData.name }}</h1>
          <h1 class="userDataNumberTitle">Номер телефона: {{ formData.phone }}</h1>
          <h1 class="userDataEmailTitle">Email: {{ formData.email }}</h1>
          <h1 class="userDataCheckbox">{{ formData.deliveryType[0] }} {{ formData.address }}</h1>
        </div>
        <div class="purchaseVCardSecondBlockButtonAction d-flex justify-center align-center">
          <v-btn
              @click="clickInInfo()"
              :height="heightFunc()"
              class="buttonActionBtn">Подтвердить заказ
          </v-btn>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../../assets/mixins';

.mainBlockInSite {
  width: 100%;
  min-height: 100vh;
  border: 1px solid $primary;
  background-color: $background;
}

.blockFormMain {
  width: 60%;
  min-height: 100vh;
  background-color: $primary;
}

.rowInForm {
  width: 100%;
  background-color: $background;
}

.vTextFieldInForm {
  color: $primary;
  background-color: $background;
}

//

.blockConfirmPurchase {
  width: 40%;
  min-height: 100vh;
}

.purchaseVCardMain {
  width: 70%;
  height: 750px;
}

.purchaseVCardMainTitle {
  width: 100%;
  height: 20%;

  font-size: 2rem;
  font-weight: 600;
  color: $textSpan;
  background-color: red;
}

.purchaseVCardSecondBlockUserData {
  width: 100%;
  height: 60%;
  background-color: #0014ff;
}

.userDataTitle, .userDataNameTitle, .userDataNumberTitle, .userDataEmailTitle, .userDataCheckbox {
  font-size: 2rem;
  font-weight: 500;
  color: $text;
}

.userDataTitle {
}

.userDataNameTitle {
}

.userDataNumberTitle {
}

.userDataEmailTitle {
}

.userDataCheckbox {
}


.purchaseVCardSecondBlockButtonAction {
  width: 100%;
  height: 20%;
  background-color: #4CAF50;
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

</style>
<!--  СДЕЛАТЬ СТИЛИ НОРМАЛЬНЫЕ!!!-->