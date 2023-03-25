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
    }),
    actions: {
        async importBasketId() {
            let importId = await JSON.parse(localStorage.getItem("basket_id"))
            this.basket.push(importId)
        },
        findByCordlessID(id) {
            return _.find(this.instrumentJsonCordless, {'id': id})
        },
        findByGasolineID(id) {
            return _.find(this.instrumentJsonGasoline, {'id': id})
        },
        findByNetworkID(id) {
            return _.find( this.instrumentJsonNetwork, { 'id': id } )
        },
        findByPneuomotoolID(id) {
            return _.find( this.instrumentJsonPneumotool, { 'id': id } )
        },
    },
    getters: {
        getBasket() {
            return state => this.basket
        }
    },
})
