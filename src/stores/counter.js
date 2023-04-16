// - import
import {defineStore} from 'pinia'
import instrumentJsonCordless from './instrumentStoreCordless.json'
import instrumentJsonGasoline from './instrumentStoreGasoline.json'
import instrumentJsonNetwork from './instrumentStoreNetwork.json'
import instrumentJsonPneumotool from './instrumentStorePneumotool.json'
import _ from 'lodash'

export const useInstrumentStore = defineStore({
    id: 'instrumentStore',
    state: () => ({
        instrumentJsonCordless: instrumentJsonCordless,
        instrumentJsonGasoline: instrumentJsonGasoline,
        instrumentJsonNetwork: instrumentJsonNetwork,
        instrumentJsonPneumotool: instrumentJsonPneumotool,
        instrument: null,
    }),
    actions: {
        async filterCrodlessInstrument() {
            this.instrumentJsonCordless = _.filter(instrumentJsonCordless, {"type": "Аккумуляторный инструмент"})
            await this.toLocalStorageInstrumentCordless(this.instrumentJsonCordless)
        },
        async filterGasolineInstrument() {
            this.instrumentJsonGasoline = _.filter(instrumentJsonGasoline, {"type": "Бензоинструмент"})
            await this.toLocalStorageInstrumentGasoline(this.instrumentJsonGasoline)
        },
        async filterNetworkInstrument() {
            this.instrumentJsonNetwork = _.filter(instrumentJsonNetwork, {"type": "Сетевой инструмент"})
            await this.toLocalStorageInstrumentNetwork(this.instrumentJsonNetwork)
        },
        async filterPneumotoolInstrument() {
            this.instrumentJsonPneumotool = _.filter(instrumentJsonPneumotool, {"type": "Пневмоинструмент"})
            await this.toLocalStorageInstrumentPneumotool(this.instrumentJsonPneumotool)
        },
        //
        async toLocalStorageInstrumentCordless(instrumentForGet) {
            localStorage.setItem("cordless", JSON.stringify(instrumentForGet))
            this.instrument = await JSON.parse(localStorage.getItem("cordless"))
        },
        async toLocalStorageInstrumentGasoline(instrumentForGet) {
            localStorage.setItem("gasoline", JSON.stringify(instrumentForGet))
            this.instrument = await JSON.parse(localStorage.getItem("gasoline"))
        },
        async toLocalStorageInstrumentNetwork(instrumentForGet) {
            localStorage.setItem("network", JSON.stringify(instrumentForGet))
            this.instrument = await JSON.parse(localStorage.getItem("network"))
        },
        async toLocalStorageInstrumentPneumotool(instrumentForGet) {
            localStorage.setItem("pneumotool", JSON.stringify(instrumentForGet))
            this.instrument = await JSON.parse(localStorage.getItem("pneumotool"))
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
        filterByCordlessName(name) {
            let filterCordlessName = []
            console.log(`name`, name)
            if (name === "") {
                console.log(`Пустая строка`)
            } else {
                filterCordlessName.push(_.filter(instrumentJsonCordless, {"name": name}))
                filterCordlessName.push(_.filter(instrumentJsonGasoline, {"name": name}))
                filterCordlessName.push(_.filter(instrumentJsonNetwork, {"name": name}))
                filterCordlessName.push(_.filter(instrumentJsonPneumotool, {"name": name}))
                return filterCordlessName
            }
        },
        reloadWindow() {
            window.location.reload()
        },
    },
    getters: {
        getInstrument: state => state.instrumentForGet
    },
})
