<script setup="">
// - import
import {ref} from 'vue'

// router
import {useRouter} from 'vue-router'

const router = useRouter()

const clickToTitle = () => {
  localStorage.setItem("name_type_this_true_or_false", JSON.stringify(false))
}
const clickTo = (nameTypeThis) => {
  localStorage.setItem("name_type_this", JSON.stringify(nameTypeThis))
  localStorage.setItem("name_type_this_true_or_false", JSON.stringify(true))
}
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
              <a @click="clickToTitle()" href="/cordless-instrument/catalog/" class="textExpansionMain">Каталог
                аккмуляторного инструмента</a>
              <a @click="clickTo('Аккумуляторная дрель-шуруповерт')"
                 href="/cordless-instrument/drills" class="textExpansion">Аккумуляторные дрели</a>
<!--              <a @click="clickTo('Аккумуляторный перфоратор')"-->
<!--                 href="/cordless-instrument/screwdrivers" class="textExpansion">Аккумуляторные перфораторы</a>-->
<!--              <a @click="clickTo('Аккумуляторная болгарка')"-->
<!--                 href="/cordless-instrument/grinders" class="textExpansion">Аккумуляторные болгарки</a>-->
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
              <a  @click="clickToTitle()" href="/gasoline-instrument/catalog/" class="textExpansionMain">Каталог бензинового
                инструмента
              </a>
              <a @click="clickTo('Бензогенератор')" href="/gasoline-instrument/generator/" class="textExpansion">Бензогенераторы</a>
<!--              <a @click="clickTo('Бензиновый мотоблок')"  href="/gasoline-instrument/motoblock/" class="textExpansion">Мотоблоки</a>-->
              <a @click="clickTo('Бензопила')"  href="/gasoline-instrument/chainsaw/" class="textExpansion">Бензопилы</a>
              <a @click="clickTo('Бензотриммер')"  href="/gasoline-instrument/petrol-trimmer/" class="textExpansion">Бензиновые триммеры</a>
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
              <a @click="clickToTitle()" href="/network-instrument/catalog/" class="textExpansionMain">Каталог сетевого инструмента
              </a>
              <a @click="clickTo('Дрель')" href="/network-instrument/drill/" class="textExpansion">Сетевые дрели</a>
              <a @click="clickTo('Лобзик электрический')" href="/network-instrument/fretsaw/" class="textExpansion">Сетевые лобзики</a>
              <a @click="clickTo('Перфоратор')" href="/network-instrument/perforator/" class="textExpansion">Сетевые перфораторы</a>
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
              <a @click="clickToTitle()" href="/pneumotool-instrument/catalog/" class="textExpansionMain">Каталог пневматического
                инструмента
              </a>
              <a @click="clickTo('Компрессор')" href="/pneumotool-instrument/compressor/" class="textExpansion">Компрессоры</a>
              <a @click="clickTo('Пневматическая отбойная молотковая машина')" href="/pneumotool-instrument/jackhammer/" class="textExpansion">Отбойный молоток</a>
              <a @click="clickTo('Гвоздезабивной пистолет пневматический')" href="/pneumotool-instrument/nail-gun/" class="textExpansion">Гвоздезабивной пистолет
              </a>
            </v-card-text>
          </v-expansion-panel-text>
          <!--          END TEXT-->
        </v-expansion-panel>

<!--        DIESEL-->
        <v-expansion-panel>
          <!--          START TITLE-->
          <v-expansion-panel-title>
            <v-row>
              <v-col><p class="titleLeftInExpansion">Дизельный инструмент</p></v-col>
            </v-row>
          </v-expansion-panel-title>
          <!--          END TITLE-->
          <!--          START TEXT-->
          <v-expansion-panel-text>
            <v-card-text class="d-flex justify-center flex-column">
              <a @click="clickToTitle()" href="/diesel-instrument/catalog/" class="textExpansionMain">Каталог дизельного
                инструмента
              </a>
              <a @click="clickTo('Дизельный генератор')" href="/diesel-instrument/generator/" class="textExpansion">Дизельные генераторы</a>
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
