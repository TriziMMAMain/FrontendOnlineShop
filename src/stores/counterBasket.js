// - import
import {defineStore} from 'pinia'
import instrumentJsonCordless from './instrumentStoreCordless.json'
import instrumentJsonGasoline from './instrumentStoreGasoline.json'
import instrumentJsonNetwork from './instrumentStoreNetwork.json'
import instrumentJsonPneumotool from './instrumentStorePneumotool.json'
import _ from 'lodash'

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
        async toLocalStorageInBasketItem(arrayFirst) {
            await localStorage.setItem("basket_array", JSON.stringify(arrayFirst))
            console.log(`Good`)
        },
        async setLocalStorageBasketObject(array) {
            let arrayForBasket = [];
            arrayForBasket = JSON.parse(localStorage.getItem("basket_object"))
            arrayForBasket.push(array)
            localStorage.setItem("basket_object", JSON.stringify(arrayForBasket));
        },
        async getLocalStorageInBasketItem() {
            let importItemInBasket = await JSON.parse(localStorage.getItem("basket_array"))
            this.basket.push(importItemInBasket)
        },
        getLocalStorageInBasketObject () {
            const exportBasketArray = JSON.parse(localStorage.getItem("basket_object"))
            this.basketArray.push(exportBasketArray)
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
