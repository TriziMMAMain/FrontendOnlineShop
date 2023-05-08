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
      console.log(`asd`, asd)
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
      console.log(`user`, user)
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
  try {
    data.value = user
    const response = await axios.post('http://localhost:3000/api/user/processing', data.value)


    setTimeout(() => {
      fetchingUsersProcessingAccepted()
          .then(() => {
            console.log(`Accepted good`);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 1500)

    setTimeout(() => {
      fetchingUsersProcessingChange()
          .then(() => {
            console.log(`Change good`);
          })
          .catch((error) => {
            console.log(error);
          });

    }, 2000)

    setTimeout(() => {
      console.log(`reload Window`)
      window.location.reload()
    }, 2500)

  } catch (error) {
    console.log(error)
  }





}
const processingInRefusal = async (user) => {
  try {
    data.value = user
    const response = await axios.post('http://localhost:3000/api/user/processing', data.value)


    setTimeout(() => {
      fetchingUsersProcessingRefusal()
          .then(() => {
            console.log(`Refusal good`);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 1500)


    setTimeout(() => {
      fetchingUsersProcessingChange()
          .then(() => {
            console.log(`Change good`);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 2000)

    setTimeout(() => {
      console.log(`reload Window`)
      window.location.reload()
    }, 2500)

  } catch (error) {
    console.log(error)
  }



}

// Обработка завершена


</script>

<template>
  <div>
    <h2>Пользователи которые выбрали товар</h2>
    <ul>
      <li class="userLi"
          v-for="user in users" :key="user.id">
        <br>
        <v-divider
            :thickness="4"
            class="border-opacity-25"
            color="primary"
        ></v-divider>
        <br>
        ID: {{ user.newId }} <br>
        Имя: {{ user.name }} <br>
        Номер телефона: {{ user.phone }} <br>
        Почта: {{ user.email }} <br>
        Тип доставки: {{ user.deliveryType[0] }} <br>
        Адрес: {{ user.address }} <br>
        Время доставки: {{ user.dayAndTime }} <br>
        <h3>Инструменты пользователя</h3>
        <span v-for="i in user.instrumentArray">
          Название: {{ i.name }} -
          Цена за шт: {{ i.price }} -
          Кол-во шт: {{ i.orderSum }} -
          Общая сумма: {{ i.priceOrder }} -
          <br>
        </span>
        <br>
        Обработка: {{ user.processing }}
        <v-btn @click="processingInAccept(user)">Добавить в обработку {{ user.newId }}</v-btn>
        <v-btn @click="processingInRefusal(user)">Отказать в обработке {{ user.newId }}</v-btn>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.userLi {
  list-style-type: none;
}

</style>
