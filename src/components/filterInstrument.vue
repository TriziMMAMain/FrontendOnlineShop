<script setup="">
// - import
import {ref} from 'vue'

// router
import { useRouter } from 'vue-router'
const router = useRouter()

//

//

const cordlessInstrument = () => {
  router.push({name: 'crodlessInstrumentAll'})
}
const gasolineInstrument = () => {
  router.push({name: 'gasolineInstrumentAll'})
}
const networkInstrument = () => {
  router.push({name: 'networkInstrumentAll'})
}
const pneuomotoolInstrument = () => {
  router.push({name: 'pneumotoolInstrumentAll'})
}
// const arrayInBasketInstrument = localStorage.setItem("basket_array", JSON.stringify([]))

</script>

<template>

  <v-card
      width="360px"
      height="700"
      color="background"
      class="ma-1"
      elevation="6">
    <v-card-subtitle
        width="250"
        class="">
      <p class="catalogTitle pa-4">Каталог инструмента</p>
    </v-card-subtitle>
    <div class="d-flex justify-center flex-column">

      <v-expansion-panels variant="accordion">
        <!--          -------------- CordlessTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title  @click="cordlessInstrument">
            <v-row>
              <v-col><p class="titleLeftInExpansion">Аккумуляторный инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->

          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <router-link to="/cordless-instrument/drills" class="textExpansion">Аккумуляторные дрели</router-link>
              <router-link to="/cordless-instrument/screwdrivers" class="textExpansion">Аккумуляторные перфораторы</router-link>
              <router-link to="/cordless-instrument/grinders" class="textExpansion">Аккумуляторные болгарки</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--           END TEXT-->
        </v-expansion-panel>

        <!--          -------------- GasolineTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title @click="gasolineInstrument">
            <v-row>
              <v-col><p class="titleLeftInExpansion">Бензиновый инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text>
              <router-link to="/gasoline-instrument/generator/" class="textExpansion">Бензогенераторы</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

        <!--          -------------- NetworkTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title @click="networkInstrument">
            <v-row>
              <v-col><p class="titleLeftInExpansion">Сетевой инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text>
              <router-link to="/network-instrument/drill/" class="textExpansion">Сетевые дрели</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

        <!--          -------------- PneuomoTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title @click="pneuomotoolInstrument">
            <v-row>
              <v-col><p class="titleLeftInExpansion">Пневмоинструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text >
              <router-link to="/pneumotool-instrument/compressor" class="textExpansion">Компрессоры</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

      </v-expansion-panels>

    </div>

    <!--      -->
  </v-card>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';


.v-checkbox {
  width: 100%;
  height: 80px;
  font-size: 0.7rem;
}

.catalogTitle {
  text-align: center;
  font-size: 1.5rem;
}

.myBtnVCard {
  color: $primary;
  background-color: $background;
  font-weight: 600;
}

.v-expansion-panel {
  color: $text;
  background-color: $background;
}
.titleLeftInExpansion {
  font-size: 1.1rem;

}
.textExpansion {
  color: $text;
  padding-top: 4px;
  text-decoration: none;
  transition: all 0.3s;
}
.textExpansion:hover {
  color: $primary;
  transition: all 0.3s;
}
</style>
