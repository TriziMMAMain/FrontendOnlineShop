<script setup="">
// - Import
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const gasolineLocal = JSON.parse(localStorage.getItem("gasoline"))

//
const gasolineGeneratorArray = []
const gasolineGenerator = () => {
  for (let i = 0; i < gasolineLocal.length; i++) {
    if (gasolineLocal[i].typeThis === 'Бензогенератор') {
      gasolineGeneratorArray.push(gasolineLocal[i])
    }
  }
}
gasolineGenerator()

const viewDetails = (id) => {
  router.push({name: 'gasolineInstrumentGeneratorId', params: {id: id}}) // /id/:id
  localStorage.setItem("id_gasoline", JSON.stringify(id))
}
// - Logical


</script>

<template>
  <!--        CARD -->
  <v-card
      width="750"
      height="250"
      color="background"
      elevation="5"
      class="pa-1 ma-1 d-flex justify-space-around"
      v-for="i in gasolineGeneratorArray">
    <v-row>
      <!--      FIRST COL-->
      <v-col cols="4"
             class="pa-1">
        <!--    CARD ITEM START-->
        <v-card-item
            class="pa-1">
          <v-card-subtitle>код: {{ i.id }}<br> {{ i.typeThis }}</v-card-subtitle>
          <div class="photoInCard">
            <v-img
                width="100%"
                :src="i.imgTitle"></v-img>
          </div>
        </v-card-item>
        <!--    CARD ITEM END-->
      </v-col>
      <!--      SECOND COL-->
      <v-col cols="5"
             class="pa-1">
        <!--        TITLE-->
        <div class="blockTitleCard">
          <button @click="viewDetails(i.id)" class="cardTextHref">{{ i.name }}</button>
        </div>
        <!--        SPAN AND TEXT-->
        <div
            class="mt-1">
          <v-card-text v-for="item in gasolineGeneratorArray[i.numberInList].featureTopTitle"
                       :key="item"
                       class="textCardFeature pa-0">{{ item.featureTopTitleInfoTitle }}
            <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></v-card-text>
        </div>


      </v-col>
      <!--      THIRD COL-->
      <v-col cols="3"
             class="pa-1">
        <!--    CARD ACTIONS START-->
        <p class="textCardPrice pa-2">
          {{ i.price }} рублей
        </p>
        <v-card-actions
            class="pa-0 pr-1">

          <v-btn
              @click=""
              elevation="1"
              class="vBtnBuy"
              width="170px"
              prepend-icon="fa-solid fa-cart-shopping"
          >
            Купить
          </v-btn>
        </v-card-actions>
        <p class="textCardAvailability">
          В наличии имеется > {{ i.availability }}
        </p>
        <!--    CARD ACTIONS END-->
      </v-col>
    </v-row>
  </v-card>
  <v-divider></v-divider>
  <!--        END CARD-->
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';

.v-card-title, .v-card-subtitle, .v-card-text {
  font-size: 0.8rem;
}

.v-card {

}

.v-btn {
  color: $primary;
  background-color: $background;
}

.photoInCard {
  width: 242px;
  height: 190px;
}

.cardTextHref {
  font-size: 1.1rem;
  text-decoration: none;
  text-align: center;
  color: $textSpan;
  font-weight: 500;
}

.blockTitleCard {
  width: 100%;
  display: flex;
  justify-content: center;
}

.textCardPrice {
  font-size: 0.9rem;
  text-align: right;
  font-weight: 600;
  color: #282828;
}

.spanTextCard {
  color: $textSpan;
}

.v-card-text {
  color: $text;
}

.textCardAvailability {
  color: $success;
  font-size: 0.8rem;
  font-weight: 600;
}
.vBtnBuy {
  color: $background;
  background: $primary;
}
.vBtnBuy:hover {
  color: $primary;
  background: $background;
  border: 1px solid $primary;
}
</style>