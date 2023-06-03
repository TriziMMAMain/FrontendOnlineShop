// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
import axios from "axios";


export const useBasketStore = defineStore({
    id: 'basketStore',
    state: () => ({
        // Fetching user
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
        // Post axios user
        async postAxiosUser(data) {
            try {
                const responseData = await axios.post('http://localhost:3000/api/user', data)
                return true
            } catch (err) {
                this.error = err
                console.error(err);
                return false
            }
        },
        async postAxiosUserById(data) {
            try {
                const responseData = await axios.post('http://localhost:3000/api/user/id', data)
                return true
            } catch (err) {
                this.error = err
                console.error(err);
                return false
            }
        },
        // Fetching user
        async fetchingUserId() {
            try {
                const response = await axios.get('http://localhost:3000/user/id')
                this.userId = response.data
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
