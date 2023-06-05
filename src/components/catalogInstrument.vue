<script setup="">
// - import
import {ref} from 'vue'

// router
import { useRouter } from 'vue-router'
const router = useRouter()

//

//
// const arrayInBasketInstrument = localStorage.setItem("basket_array", JSON.stringify([]))

</script>

<template>
  <v-card
      width="500"
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
          <v-expansion-panel-title>
            <v-row>
              <v-col><p class="titleLeftInExpansion">Аккумуляторный инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->

          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <router-link to="/cordless-instrument/catalog/" class="textExpansionMain">Каталог аккмуляторного инструмента</router-link>
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
          <v-expansion-panel-title>
            <v-row>
              <v-col><p class="titleLeftInExpansion">Бензиновый инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <router-link to="/gasoline-instrument/catalog/" class="textExpansionMain">Каталог бензинового инструмента</router-link>
              <router-link to="/gasoline-instrument/generator/" class="textExpansion">Бензогенераторы</router-link>
              <router-link to="/gasoline-instrument/motoblock/" class="textExpansion">Мотоблоки</router-link>
              <router-link to="/gasoline-instrument/chainsaw/" class="textExpansion">Бензопилы</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

        <!--          -------------- NetworkTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title>
            <v-row>
              <v-col><p class="titleLeftInExpansion">Сетевой инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <router-link to="/network-instrument/catalog/" class="textExpansionMain">Каталог сетевого инструмента</router-link>
              <router-link to="/network-instrument/drill/" class="textExpansion">Сетевые дрели</router-link>
              <router-link to="/network-instrument/fretsaw/" class="textExpansion">Сетевые лобзики</router-link>
              <router-link to="/network-instrument/perforator/" class="textExpansion">Сетевые перфораторы</router-link>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

        <!--          -------------- PneuomoTools-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title>
            <v-row>
              <v-col><p class="titleLeftInExpansion">Пневмоинструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <router-link to="/pneumotool-instrument/catalog/" class="textExpansionMain">Каталог пневматического инструмента</router-link>
              <router-link to="/pneumotool-instrument/compressor/" class="textExpansion">Компрессоры</router-link>
              <router-link to="/pneumotool-instrument/jackhammer/" class="textExpansion">Отбойный молоток</router-link>
              <router-link to="/pneumotool-instrument/nail-gun/" class="textExpansion">Гвоздезабивной пистолет</router-link>
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


@media screen and (max-width: 600px) {
  .catalogTitle {
    text-align: center;
    font-size: 1.5rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.2rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 0.8rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .catalogTitle {
    text-align: center;
    font-size: 1.5rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.3rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 0.9rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .catalogTitle {
    text-align: center;
    font-size: 1.5rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.3rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 0.9rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  .catalogTitle {
    text-align: center;
    font-size: 1.5rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.3rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 1rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .catalogTitle {
    text-align: center;
    font-size: 1.6rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.4rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 1.1rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary;
  }
}

@media screen and (min-width: 2560px) {
  .catalogTitle {
    text-align: center;
    font-size: 2rem;
  }

  .v-expansion-panel {
    color: $text;
    background-color: $background;
  }

  .titleLeftInExpansion {
    font-size: 1.7rem;

  }
  .textExpansion, .textExpansionMain {
    font-size: 1.5rem;
    line-height: 1.1;
    color: $text;
    padding-top: 6px;
    text-decoration: none;
    transition: all 0.3s;
  }
  .textExpansion:hover, .textExpansionMain:hover {
    color: $primary;
    transition: all 0.3s;
  }
  .textExpansionMain {
    line-height: 1;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 12px;
    color: $primary;
  }
}

</style>
