<script setup="">
import {ref} from 'vue'
import axios from "axios";

// Получаем пользователей

let users = ref([])

const fetchingUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (response.ok) {
      users.value = await response.json();
    } else {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchingUsers()
    .then(() => {
      // console.log(`users`, users.value);
    })
    .catch((error) => {
      console.log(error);
    });

// Пользователи загружены


// Обработка запросов

const data = ref({})

const fetchingUsersProcessingAccepted = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user/processing/accepted');
    if (response.ok) {
      let asd = await response.json();
    } else {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
const fetchingUsersProcessingRefusal = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user/processing/refusal');
    if (response.ok) {
      let user = await response.json();
    } else {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
const fetchingUsersProcessingChange = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user/processing/change');
    if (response.ok) {
      let user = await response.json();
    } else {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}



const processingInAccept = async (user) => {

  data.value.userInProcessing = user
  axios.post('http://localhost:3000/api/user/processing', data.value)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

  fetchingUsersProcessingAccepted()
      .then(() => {
        console.log(`Good`);
      })
      .catch((error) => {
        console.log(error);
      });

  fetchingUsersProcessingChange()
      .then(() => {
        console.log(`Change good`);
      })
      .catch((error) => {
        console.log(error);
      });



}
const processingInRefusal = async (user) => {

  data.value.userInProcessing = user
  axios.post('http://localhost:3000/api/user/processing', data.value)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))


  fetchingUsersProcessingRefusal()
      .then(() => {
        console.log(`Refusal good`);
      })
      .catch((error) => {
        console.log(error);
      });


  fetchingUsersProcessingChange()
      .then(() => {
        console.log(`Change good`);
      })
      .catch((error) => {
        console.log(error);
      });
}

// Обработка завершена



</script>

<template>
  <div>
    <h2>Пользователи которые выбрали товар</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.newId }} - {{ user.name }} - {{ user.phone }} - {{ user.email }} -
        {{ user.deliveryType[0] }} - {{ user.address }}
        <span v-for="i in user.instrumentArray">
          <br>
          Название: {{ i.name }} -
          Цена за шт: {{ i.price }} -
          Кол-во шт: {{ i.orderSum }} -
          Общая сумма: {{ i.priceOrder }} - </span>
        <br>
        Обработка: {{ user.processing }}
        <v-btn
            href="/admin-panel/"
            @click="processingInAccept(user)">Добавить в обработку {{ user.newId }}</v-btn>
        <v-btn
            href="/admin-panel/"
            @click="processingInRefusal(user)">Отказать в обработке {{ user.newId }}</v-btn>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
