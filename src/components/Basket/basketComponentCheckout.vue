<script setup="">
// core
import {ref} from 'vue'
//
import {useDisplay} from 'vuetify'

const {name} = useDisplay()
import _ from 'lodash'
// store
import {useBasketStore} from '../../stores/counterBasket.js'

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
const firstNameUser = ref("")
const numberInPhoneUser = ref("")
const emailUser = ref("")
const stringDeliveryUser = ref("")
const arrayCheckboxUser = ref([])
const stringDelivery = ref("")


const nameRulesUser = [
  value => {
    if (value?.length <= 1) return "Мало символов"
  },
  value => {
    if (value) return "Отлично! Дальше номер телефона."
  },
]
const numberRulesUser = [
  value => {
    if (value.length <= 10) return "Мало цифр!"
  },
  value => {
    if (value) return "Отлично! Дальше email."
  },
]
const emailRulesUser = [
  value => {
    if (/.+@.+\..+/.test(value)) return 'Отлично! Выберите тип доставки. И не забудьте написать адрес доставки!'
  },
  value => {
    if (value) return "Введите email правильно! Не забудьте про @"
  },

]
const checkboxDeliveryRulesUser = [
  value => {
    if (value.length <= 12) return "Мало символов!"
  },
  value => {
    if (value.length >= 13) return "Отлично! Не забудьте написать город, район, дом, квартира, номер."
  }
]

// form end


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
                v-model="firstNameUser"
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
                v-model="numberInPhoneUser"
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
                v-model="emailUser"
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
                v-model="arrayCheckboxUser"
                label="Самовывоз"
                value="Самовывоз"
                :disabled="arrayCheckboxUser[0] === 'Доставка'"
                hide-details
            ></v-checkbox>

            <v-checkbox
                color="primary"
                v-model="arrayCheckboxUser"
                label="Доставка"
                value="Доставка"
                :disabled="arrayCheckboxUser[0] === 'Самовывоз'"
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
                v-model="stringDeliveryUser"
                :rules="checkboxDeliveryRulesUser"
                :counter="3"
                label="Адрес доставки"
                prepend-icon="fa-solid fa-input-text"
                variant="solo"
                :disabled="arrayCheckboxUser[0] === 'Самовывоз' || arrayCheckboxUser[0] === undefined"
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
          <h1 class="userDataNameTitle">Имя: {{ firstNameUser }}</h1>
          <h1 class="userDataNumberTitle">Номер телефона: {{ numberInPhoneUser }}</h1>
          <h1 class="userDataEmailTitle">Email: {{ emailUser }}</h1>
          <h1 class="userDataCheckbox">{{ arrayCheckboxUser[0] }} {{ stringDeliveryUser }}</h1>
        </div>
        <div class="purchaseVCardSecondBlockButtonAction d-flex justify-center align-center">
          <v-btn
              @click=""
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

.userDataTitle {}

.userDataNameTitle {}

.userDataNumberTitle {}

.userDataEmailTitle {}

.userDataCheckbox {}



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
