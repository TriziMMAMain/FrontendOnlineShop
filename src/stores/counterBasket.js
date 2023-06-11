// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
import interceptors  from '../api.js';



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
        // Post interceptors user
        async postAxiosUser(data) {
            try {
                const responseData = await interceptors.post('api/user/add', data)
                return true
            } catch (err) {
                this.error = err
                console.error(err);
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
        async fetchingUserId() {
            try {
                // const response = await interceptors.get('user/id')
                // this.userId = response.data
                // localStorage.setItem("user_id", JSON.stringify(this.userId))
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
