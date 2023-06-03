<script setup="">
import {ref} from "vue";

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
  <v-container fluid>
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
    <div class="photoMainBlock d-flex justify-space-evenly flex-wrap">
      <h1 class="photoTitle">Топ 3 категории товаров за этот месяц</h1>
      <div class="photoSrc" v-for="item in photoInBlock">
        <p class="photoSrcAbsoluteText">{{ item.title }}</p>
        <a :href="item.link" class="photoSrcLink">
          <v-img :src="item.src" alt=""></v-img>
        </a>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/mixins';


@media screen and (max-width: 600px) {

  .headerTitle {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .infoPhone,
  .infoCity {
    margin: 5px;
    font-size: 1rem;
  }

  .photoSrcLink {
    width: 100%;
    margin-bottom: 10px;
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
    justify-content: center;
    padding: 20px;
    margin-top: 30px;
  }

  .photoTitle {
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 120px;
    text-align: center;
    color: $text;
  }

  .photoSrc {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .photoSrcAbsoluteText {
    position: absolute;
    top: -90px;
    margin: 0 auto;
    text-align: center;
    font-size: 0.8rem;
    color: $text;
  }

  .photoSrcLink {
    min-width: 200px;
    margin-bottom: 120px;
    height: 100px;
    display: block;
    background-size: cover;
    background-position: center;
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
    justify-content: center;
    padding: 20px;
    margin-top: 30px;
  }

  .photoTitle {
    width: 100%;
    font-size: 1.3rem;
    margin-bottom: 120px;
    text-align: center;
    color: $text;
  }

  .photoSrc {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .photoSrcAbsoluteText {
    position: absolute;
    top: -90px;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    color: $text;
  }

  .photoSrcLink {
    min-width: 250px;
    height: 100px;
    display: block;
    background-size: cover;
    background-position: center;
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
    justify-content: center;
    padding: 20px;
    margin-top: 30px;
  }

  .photoTitle {
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 120px;
    text-align: center;
    color: $text;
  }

  .photoSrc {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .photoSrcAbsoluteText {
    position: absolute;
    top: -90px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    color: $text;
  }

  .photoSrcLink {
    min-width: 350px;
    height: 150px;
    display: block;
    background-size: cover;
    background-position: center;
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
    justify-content: center;
    padding: 20px;
    margin-top: 30px;
  }

  .photoTitle {
    width: 100%;
    font-size: 2.5rem;
    margin-bottom: 120px;
    text-align: center;
    color: $text;
  }

  .photoSrc {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .photoSrcAbsoluteText {
    position: absolute;
    top: -90px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    color: $text;
  }

  .photoSrcLink {
    min-width: 350px;
    height: 200px;
    display: block;
    background-size: cover;
    background-position: center;
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
    justify-content: center;
    padding: 20px;
    margin-top: 30px;
  }

  .photoTitle {
    width: 100%;
    font-size: 2.5rem;
    margin-bottom: 120px;
    text-align: center;
    color: $text;
  }

  .photoSrc {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .photoSrcAbsoluteText {
    position: absolute;
    top: -90px;
    margin: 0 auto;
    font-size: 1.6rem;
    color: $text;
  }

  .photoSrcLink {
    min-width: 650px;
    height: 350px;
    display: block;
    background-size: cover;
    background-position: center;
  }
}
</style>
