// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
const instrumentJsonCordless = ''
const instrumentJsonGasoline = ''
const instrumentJsonNetwork = ''
const instrumentJsonPneumotool = ''

export const useBasketStore = defineStore({
    id: 'basketStore',
    state: () => ({
        instrumentJsonCordless: instrumentJsonCordless,
        instrumentJsonGasoline: instrumentJsonGasoline,
        instrumentJsonNetwork: instrumentJsonNetwork,
        instrumentJsonPneumotool: instrumentJsonPneumotool,
        basket: [],
        basketArray: [],
    }),
    actions: {
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
            console.log(`Good`)
        },
        async getLocalStorageInBasketItem() {
            let importItemInBasket = await JSON.parse(localStorage.getItem("basket_array"))
            this.basket.push(importItemInBasket)
        },
        findByCordlessID(id) {
            return _.find(this.instrumentJsonCordless, {'id': id})
        },
        findByGasolineID(id) {
            return _.find(this.instrumentJsonGasoline, {'id': id})
        },
        findByNetworkID(id) {
            return _.find(this.instrumentJsonNetwork, {'id': id})
        },
        findByPneuomotoolID(id) {
            return _.find(this.instrumentJsonPneumotool, {'id': id})
        },
    },
    getters: {
        getBasket() {
            return this.basketArray
        }
    },
})
