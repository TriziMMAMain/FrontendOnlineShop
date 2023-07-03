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
const paramsCordlessInstrument = ref([
  {
    nameTypeThis: 'Аккумуляторная дрель-шуруповерт',
    href: '/cordless-instrument/drills/',
    title: 'Аккумуляторные дрели',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Аккумуляторный перфоратор',
    href: '/cordless-instrument/screwdrivers/',
    title: 'Аккумуляторные перфораторы',
    trueOrFalse: false
  },
  {
    nameTypeThis: 'Аккумуляторная болгарка',
    href: '/cordless-instrument/grinders/',
    title: 'Аккумуляторные болгарки',
    trueOrFalse: true
  },
])
const paramsGasolineInstrument = ref([
  {
    nameTypeThis: 'Бензогенератор',
    href: '/gasoline-instrument/generator/',
    title: 'Бензогенераторы',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Бензиновый мотоблок',
    href: '/gasoline-instrument/motoblock/',
    title: 'Мотоблоки',
    trueOrFalse: false
  },
  {
    nameTypeThis: 'Бензопила',
    href: '/gasoline-instrument/chainsaw/',
    title: 'Бензопилы',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Бензотриммер',
    href: '/gasoline-instrument/petrol-trimmer/',
    title: 'Бензиновые триммеры',
    trueOrFalse: true
  },
])
const paramsNetworkInstrument = ref([
  {
    nameTypeThis: 'Дрель',
    href: '/network-instrument/drill/',
    title: 'Сетевые дрели',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Электрическая болгарка',
    href: '/network-instrument/grinders/',
    title: 'Сетевые болгарки',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Лобзик электрический',
    href: '/network-instrument/fretsaw/',
    title: 'Сетевые лобзики',
    trueOrFalse: false
  },
  {
    nameTypeThis: 'Садовый пылесос',
    href: '/network-instrument/garden-vacuum-cleaner/',
    title: 'Сетевые садовые пылесосы',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Перфоратор',
    href: '/network-instrument/perforator/',
    title: 'Сетевые перфораторы',
    trueOrFalse: true
  },
])
const paramsPneumotoolInstrument = ref([
  {
    nameTypeThis: 'Компрессор',
    href: '/pneumotool-instrument/compressor/',
    title: 'Компрессоры',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Пневматическая отбойная молотковая машина',
    href: '/pneumotool-instrument/jackhammer/',
    title: 'Отбойный молоток',
    trueOrFalse: true
  },
  {
    nameTypeThis: 'Гвоздезабивной пистолет пневматический',
    href: '/pneumotool-instrument/nail-gun/',
    title: 'Гвоздезабивной пистолет',
    trueOrFalse: true
  },
])
const paramsDieselInstrument = ref([
  {
    nameTypeThis: '',
    href: '',
    title: '',
    trueOrFalse: true
  },
])


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
              <div v-for="item in paramsCordlessInstrument">
                <a :href="item.href" @click="clickTo(`${item.nameTypeThis}`)"
                   class="textExpansion" v-if="item.trueOrFalse">{{ item.title }}
                </a>
              </div>

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
              <a @click="clickToTitle()" href="/gasoline-instrument/catalog/" class="textExpansionMain">Каталог
                бензинового
                инструмента
              </a>

              <div v-for="item in paramsGasolineInstrument">
                <a :href="item.href" @click="clickTo(`${item.nameTypeThis}`)"
                   class="textExpansion" v-if="item.trueOrFalse">{{ item.title }}
                </a>
              </div>

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
              <a @click="clickToTitle()" href="/network-instrument/catalog/" class="textExpansionMain">Каталог сетевого
                инструмента
              </a>

              <div v-for="item in paramsNetworkInstrument">
                <a :href="item.href" @click="clickTo(`${item.nameTypeThis}`)"
                   class="textExpansion" v-if="item.trueOrFalse">{{ item.title }}
                </a>
              </div>

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
              <a @click="clickToTitle()" href="/pneumotool-instrument/catalog/" class="textExpansionMain">Каталог
                пневматического
                инструмента
              </a>
              <div v-for="item in paramsPneumotoolInstrument">
                <a :href="item.href" @click="clickTo(`${item.nameTypeThis}`)"
                   class="textExpansion" v-if="item.trueOrFalse">{{ item.title }}
                </a>
              </div>
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
              <a @click="clickTo('Дизельный генератор')" href="/diesel-instrument/generator/" class="textExpansion">Дизельные
                генераторы</a>
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
