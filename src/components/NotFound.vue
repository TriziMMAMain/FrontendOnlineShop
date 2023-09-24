<script setup="">

</script>

<template>
  <div class="not_found">
    <div class="not_found_block_title">
      <h1 class="not_found_title">404 страница не найдена</h1>
    </div>
    <br>
    <div class="not-found_block_title_second">
      <a class="not_found_title_second"
         href="/home/"
      >Вернуться на главную</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.not_found {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.not_found_block_title, .not-found_block_title_second {
  width: 100%;
  display: flex;
  justify-content: center;
}

.not_found_title, .not_found_title_second {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 30px;
  color: $text;
}

.not_found_title_second {
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: $primary;
}

.not_found_title_second:hover {
  color: $text;
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}


</style>
