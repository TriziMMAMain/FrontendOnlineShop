<script setup="">
import {ref} from "vue";
import {useRouter} from 'vue-router'
import _ from 'lodash'
import {useDisplay} from 'vuetify'

const {name} = useDisplay()


const photoInBlock = ref([
  {
    title: 'Аккумуляторные дрели',
    src: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/800943/560x504/53392205.jpg',
    link: '/cordless-instrument/drills'
  },
  {
    title: 'Аккумуляторные перфораторы',
    src: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/akkumulyatornyj-instrument/701952/560x504/51268908.jpg',
    link: '/cordless-instrument/screwdrivers/'
  },
  {
    title: 'Аккумуляторные болгарки',
    src: 'https://procraft.ua/image/cache/catalog/akkumuljatornye_instryment/akkumuljatornaja-bolgarka/PWA216/PWA216_1-750x610.jpg',
    link: '/cordless-instrument/grinders/'
  },
])
</script>

<template>
  <v-container>
    <div class="blockHeader">
      <h1 class="headerTitle">Интернет магазин "<span class="headerTitleSpan">Все Инструменты Дон</span>"</h1>
      <div class="headerblockInfo">
        <div class="infoPhone">
          <p class="infoPhoneText">
            <i class="fa fa-phone"></i> +7 (949) 412 91 53
          </p>
        </div>
        <div class="infoCity">
          <p class="infoCityText">
            <i class="fa fa-map-marker"></i> Россия, ДНР, Донецк, Ленинский район, пр. Алымова дом 10
          </p>
        </div>
      </div>
    </div>
    <div class="photoMainBlock">
      <div class="instrumentBlock">
        <h1 class="titleInBlock">Перейти к инструменту</h1>
        <div class="actionsImg">
          <img class="actionsImgPhoto" src="https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/800943/560x504/53392205.jpg" alt="">
        </div>
      </div>
      <div class="sparesBlock">
        <h1 class="titleInBlock">Перейти к запчастям</h1>
        <div class="actionsImg">
          <img class="actionsImgPhoto" src="https://zapshast.ru/uploads/news/1571897138.jpg" alt="">
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/mixins';

@media screen and (max-width: 376px) {
  // Стили для lg дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 1.4rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 10px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 1rem;
    color: $text;
  }

  .actionsImg {
    width: 250px;
    height: 186px;
    margin-top: 20px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 376px) and (max-width: 600px) {
  // Стили для lg дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 1.4rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 10px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 1rem;
    color: $text;
  }

  .actionsImg {
    width: 180px;
    height: 135px;
    margin-top: 20px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 600px) and (max-width: 960px) {
  // Стили для lg дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 1.4rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 1rem;
    color: $text;
  }

  .actionsImg {
    width: 180px;
    height: 135px;
    margin-top: 20px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  // Стили для lg дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 1.7rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 1.2rem;
    color: $text;
  }

  .actionsImg {
    width: 300px;
    height: 225px;
    margin-top: 20px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  // Стили для lg дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 2rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 1.5rem;
    color: $text;
  }

  .actionsImg {
    width: 400px;
    height: 300px;
    margin-top: 20px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  // Стили для xl дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 4rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 2.5rem;
    color: $text;
  }

  .actionsImg {
    width: 600px;
    height: 480px;
    margin-top: 30px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}

@media screen and (min-width: 2560px) {
  // Стили для xxl дисплея
  .blockHeader {
    width: 100%;
    min-height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 0 1.7px rgba(0, 0, 0, 0.101),
    0 0 5.6px rgba(0, 0, 0, 0.149),
    0 0 25px rgba(0, 0, 0, 0.25);
  }

  .headerTitle {
    margin-bottom: 10px;
    font-size: 4rem;
    text-align: center;
    color: $text;
  }

  .headerTitleSpan {
    color: $primary;
  }

  .headerblockInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .infoPhone, .infoCity {
    margin: 5px 20px;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  .infoPhone i, .infoCity i {
    margin-right: 5px;
    color: $text;
  }

  .infoPhoneText, .infoCityText {
    margin: 0;
    color: $primary;
  }

  .photoMainBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
  }

  //  Instrument block

  .instrumentBlock, .sparesBlock {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 25px;
    background-color: $background;
  }

  // Spares block

  .sparesBlock {}

  // block

  .titleInBlock {
    text-align: center;
    font-size: 2.5rem;
    color: $text;
  }

  .actionsImg {
    width: 800px;
    height: 667px;
    margin-top: 30px;
  }

  .actionsImgPhoto {
    width: 100%;
    height: 100%;
  }

}
</style>
