// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
import interceptors  from '../api.js';

export const useInstrumentStore = defineStore({
    id: 'instrumentStore',
    state: () => ({
        instrument: null,
        // Fetching instrument
        allLocalCopyPinia: null,
        cordlessLocalCopyPinia: null,
        gasolineLocalCopyPinia: null,
        networkLocalCopyPinia: null,
        pneumoLocalCopyPinia: null,
        instrumentLocalCopyByName: null,
        instrumentLocalCopyById: null,
        // Fetching user
        userId: null,
        // Filter by name instrument
        arrayInFile: {},
        // Fetching name instrument
        instrumentNameCordless: [],
        instrumentNameGasoline: [],
        instrumentNameNetwork: [],
        instrumentNamePneumo: [],
        instrumentNameAll: [],
        // Fetching error
        error: null
    }),
    actions: {
        // Visits
        visitsInSite() {
            let visits = JSON.parse(localStorage.getItem('visits'))
            if (!visits) {
                localStorage.setItem('visits', JSON.stringify(1));
                visits = 1;
                localStorage.setItem('basket_object', JSON.stringify([]))
                localStorage.setItem("basket_click_user", JSON.stringify(false))
            } else {
                const newVisits = visits + 1;
                localStorage.setItem('visits', JSON.stringify(newVisits));
                visits = newVisits;
                console.log(`visits`, visits)
            }
        },
        // Fetching instrument
        async changeInstrumentInFile() {
            try {
                const response = await interceptors.get('api/instrument/change')
                localStorage.setItem("result_change_file", JSON.stringify(true))
            } catch (error) {
                localStorage.setItem("result_change_file", JSON.stringify(false))
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentAll() {
            try {
                const response = await interceptors.get('api/instruments/get/instrument/all')
                this.allLocalCopyPinia = response.data
                let uniqueBrands = _.uniqBy(this.allLocalCopyPinia, 'brand').map(instrument => instrument.brand)
                localStorage.setItem("all_instrument", JSON.stringify(this.allLocalCopyPinia))
                localStorage.setItem("all_instrument_brand", JSON.stringify(uniqueBrands))
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                return false
            }
        },
        async fetchingInstrumentCordless() {
            try {
                const response = await interceptors.get('api/instruments/get/cordless')
                this.cordlessLocalCopyPinia = response.data
                localStorage.setItem("cordless", JSON.stringify(this.cordlessLocalCopyPinia))
                await this.fetchingInstrumentCordlessName(this.cordlessLocalCopyPinia)
            } catch (error) {
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentGasoline() {
            try {
                const response = await interceptors.get('api/instruments/get/gasoline')
                this.gasolineLocalCopyPinia = response.data
                localStorage.setItem("gasoline", JSON.stringify(this.gasolineLocalCopyPinia))
                await this.fetchingInstrumentGasolineName(this.gasolineLocalCopyPinia)
            } catch (error) {
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentNetwork() {
            try {
                const response = await interceptors.get('api/instruments/get/network')
                this.networkLocalCopyPinia = response.data
                localStorage.setItem("network", JSON.stringify(this.networkLocalCopyPinia))
                await this.fetchingInstrumentNetworkName(this.networkLocalCopyPinia)
            } catch (error) {
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentPneumotool() {
            try {
                const response = await interceptors.get('api/instruments/get/pneumo')
                this.pneumoLocalCopyPinia = response.data
                localStorage.setItem("pneumotool", JSON.stringify(this.pneumoLocalCopyPinia))
                await this.fetchingInstrumentPneumoName(this.pneumoLocalCopyPinia)
            } catch (error) {
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentByName() {
            try {
                await this.fetchingInstrumentAllName(this.instrumentNameCordless, this.instrumentNameGasoline, this.instrumentNameNetwork, this.instrumentNamePneumo)
                const response = await interceptors.get('api/instrument/get/filter/name')
                this.instrumentLocalCopyByName = response.data
            } catch (error) {
                this.error = error
                console.log(error)
            }
        },
        async fetchingInstrumentById() {
            try {
                const response = await interceptors.get('api/instruments/get/instrument-find-by-id')
                this.instrumentLocalCopyById = response.data
                await localStorage.setItem("filter_by_id", JSON.stringify(this.instrumentLocalCopyById))
                await localStorage.setItem("fetching_instrument_by_id", JSON.stringify(true))
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                localStorage.setItem("fetching_instrument_by_id", JSON.stringify(false))
                return false
            }
        },
        // Post api Instrument
        async postAxiosInstrumentByName(data) {
            try {
                const responseData = await interceptors.post('api/instrument/filter/name', data)
                return true
            } catch (err) {
                this.error = err
                console.error(err);
                return false
            }
        },
        async postAxiosInstrumentById(data) {
            try {
                const responseData = await interceptors.post('api/instrument/instrument-find-by-id', data)
                return true
            } catch (err) {
                this.error = err
                console.error(err);
                return false
            }
        },
        // Fetching filtered name
        async fetchingInstrumentCordlessName(cordless) {
            let cordlessLocalCopyNameArray = []
            if (Array.isArray(cordless) || (typeof cordless === 'object' && cordless.hasOwnProperty('length'))) {
                for (let i = 0; i < cordless.length; i++) {
                    cordlessLocalCopyNameArray.push(cordless[i]);
                }
                for (let i = 0; i < cordlessLocalCopyNameArray.length; i++) {
                    this.instrumentNameCordless.push(cordlessLocalCopyNameArray[i].name);
                }
            } else {
                console.log('Invalid input');
            }
        },
        async fetchingInstrumentGasolineName(gasoline) {
            let gasolineLocalCopyNameArray = []
            if (Array.isArray(gasoline) || (typeof gasoline === 'object' && cordless.hasOwnProperty('length'))) {
                for (let i = 0; i < gasoline.length; i++) {
                    gasolineLocalCopyNameArray.push(gasoline[i]);
                }
                for (let i = 0; i < gasolineLocalCopyNameArray.length; i++) {
                    this.instrumentNameGasoline.push(gasolineLocalCopyNameArray[i].name);
                }
            } else {
                console.log('Invalid input');
            }
        },
        async fetchingInstrumentNetworkName(network) {
            let networkLocalCopyNameArray = []
            if (Array.isArray(network) || (typeof network === 'object' && cordless.hasOwnProperty('length'))) {
                for (let i = 0; i < network.length; i++) {
                    networkLocalCopyNameArray.push(network[i]);
                }
                for (let i = 0; i < networkLocalCopyNameArray.length; i++) {
                    this.instrumentNameNetwork.push(networkLocalCopyNameArray[i].name);
                }
            } else {
                console.log('Invalid input');
            }
        },
        async fetchingInstrumentPneumoName(pneumo) {
            let pneumoLocalCopyNameArray = []
            if (Array.isArray(pneumo) || (typeof pneumo === 'object' && cordless.hasOwnProperty('length'))) {
                for (let i = 0; i < pneumo.length; i++) {
                    pneumoLocalCopyNameArray.push(pneumo[i]);
                }
                for (let i = 0; i < pneumoLocalCopyNameArray.length; i++) {
                    this.instrumentNamePneumo.push(pneumoLocalCopyNameArray[i].name);
                }
            } else {
                console.log('Invalid input');
            }
        },
        async fetchingInstrumentAllName(cordless, gasoline, network, pneumo) {
            for (let i = 0; i < cordless.length; i++) {
                this.instrumentNameAll.push(cordless[i])
            }
            for (let i = 0; i < gasoline.length; i++) {
                this.instrumentNameAll.push(gasoline[i])
            }
            for (let i = 0; i < network.length; i++) {
                this.instrumentNameAll.push(network[i])
            }
            for (let i = 0; i < pneumo.length; i++) {
                this.instrumentNameAll.push(pneumo[i])
            }
            localStorage.setItem("filter_instrument_all_name", JSON.stringify(this.instrumentNameAll))
        },
        // Filter
        // by name
        async filterByNameInstrument(string) {
            try {
                let cordlessFiltered = _.filter(this.cordlessLocalCopyPinia, {name: string});
                let gasolineFiltered = _.filter(this.gasolineLocalCopyPinia, {name: string});
                let networkFiltered = _.filter(this.networkLocalCopyPinia, {name: string});
                let pneumaticFiltered = _.filter(this.pneumoLocalCopyPinia, {name: string});
                //


                if (cordlessFiltered.length === 0) {
                } else {
                    this.arrayInFile = cordlessFiltered[0]
                }

                if (gasolineFiltered.length === 0) {
                } else {
                    this.arrayInFile = gasolineFiltered[0]
                }

                if (networkFiltered.length === 0) {
                } else {
                    this.arrayInFile = networkFiltered[0]
                }

                if (pneumaticFiltered.length === 0) {
                } else {
                    this.arrayInFile = pneumaticFiltered[0]
                }
                localStorage.setItem("filter_by_name", JSON.stringify(this.arrayInFile))
                return true
            } catch (err) {
                console.log(err)
                return false
            }

        },
        // by type, typeThis, brand, price, avalibility
        async filterByParams(dataObj) {
            console.log(this.allLocalCopyPinia);
        },
    },
    getters: {
        getInstrument: state => state.instrumentLocalCopyById
    },
})
