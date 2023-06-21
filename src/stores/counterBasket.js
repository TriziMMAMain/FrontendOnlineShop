// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
import interceptors  from '../api.js';
import {ProccesingSuccessfuly, ProcessingError} from "../notification/toasting.js";



export const useBasketStore = defineStore({
    id: 'basketStore',
    state: () => ({
        // Fetching user
        users: null,
        userId: null,
        //
        basket: [],
        basketArray: [],
    }),
    actions: {
        //
        async setLocalStorageBasketObject(array) {
            let arrayForBasket = [];
            arrayForBasket = JSON.parse(localStorage.getItem("basket_object"))
            arrayForBasket.push(array)
            localStorage.setItem("basket_object", JSON.stringify(arrayForBasket));
        },
        getLocalStorageInBasketObject () {
            const exportBasketArray = JSON.parse(localStorage.getItem("basket_object"))
            this.basketArray.push(exportBasketArray)
        },
        async toLocalStorageInBasketItem(arrayFirst) {
            await localStorage.setItem("basket_array", JSON.stringify(arrayFirst))
        },
        // Update interceptors user
        async updateAxiosUser(data, dataSecond) {
            try {
                const filterNewId = _.filter(this.users, { newId: dataSecond.newId })
                if (filterNewId.length === 0) {
                    await this.postAxiosUser(data)
                } else {
                    const responseData = await interceptors.post(`users/update/${dataSecond.newId}`, dataSecond)
                    ProccesingSuccessfuly('Вы подтвердили свой заказ, ожидайте!')
                }

                return true
            } catch (err) {
                this.error = err
                console.error(err);
                ProcessingError('Возможно вы ввели не корректные данные!')
                return false
            }
        },
        // Post interceptors user
        async postAxiosUser(data) {
            try {
                const responseData = await interceptors.post('api/user/add', data)
                localStorage.setItem("id_user_basket", JSON.stringify(data.newId))
                ProccesingSuccessfuly('Вы подтвердили свой заказ, ожидайте!')
                return true
            } catch (err) {
                this.error = err
                console.error(err);
                ProcessingError('Возможно вы ввели не корректные данные!')
                return false
            }
        },
        // Fetching user
        async fetchingUsers() {
            try {
                const response = await interceptors.get('api/users/get/all')
                this.users = response.data
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                return false
            }
        },
        async fetchingUserId(id) {
            try {
                this.userId = _.filter(this.users, {newId: id})
                localStorage.setItem("user_id", JSON.stringify(this.userId))
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                return false
            }
        },
    },
    getters: {
        getBasket() {
            return this.basketArray
        }
    },
})
