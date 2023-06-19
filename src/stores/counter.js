// - import
import {defineStore} from 'pinia'
import _ from 'lodash'
import interceptors  from '../api.js';
import {ProcessingError} from '../notification/toasting.js'

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
        instrumentFilterByParams: null,
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
                localStorage.setItem("user_id", JSON.stringify(null))
            } else {
                const newVisits = visits + 1;
                localStorage.setItem('visits', JSON.stringify(newVisits));
                visits = newVisits;
                console.log(`visits`, visits)
            }
        },
        // Fetching instrument
        async fetchingInstrumentAll() {
            try {
                const response = await interceptors.get('api/instruments/get/all')
                this.allLocalCopyPinia = response.data
                let uniqueBrands = _.uniqBy(this.allLocalCopyPinia, 'brand').map(instrument => instrument.brand)
                let uniqueType = _.uniqBy(this.allLocalCopyPinia, 'type').map(instrument => instrument.type)
                localStorage.setItem("all_instrument", JSON.stringify(this.allLocalCopyPinia))
                localStorage.setItem("all_instrument_type", JSON.stringify(uniqueType))
                localStorage.setItem("all_instrument_brand", JSON.stringify(uniqueBrands))
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
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
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
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
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
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
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
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
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
            }
        },


        async fetchingInstrumentByName() {
            try {
                await this.fetchingInstrumentAllName(this.instrumentNameCordless, this.instrumentNameGasoline, this.instrumentNameNetwork, this.instrumentNamePneumo)
            } catch (error) {
                this.error = error
                console.log(error)
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
            }
        },
        async fetchingInstrumentById() {
            try {
                await localStorage.setItem("fetching_instrument_by_id", JSON.stringify(true))
                return true
            } catch (error) {
                this.error = error
                console.log(error)
                localStorage.setItem("fetching_instrument_by_id", JSON.stringify(false))
                ProcessingError('Возникла ошибка. Перезагрузите страницу!')
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
                localStorage.setItem("filter_by_id", JSON.stringify(data))
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
            if (await this.filterByParamsMain(dataObj)) {
                return true
            } else {
                return false
            }
        },
        async filterByParamsMain(dataObj) {
            console.log(dataObj);
            const instrumentFilteredType = _.filter(this.allLocalCopyPinia, {type: dataObj.type});
            const instrumentFilteredTypeThis = _.filter(instrumentFilteredType, {typeThis: dataObj.typeThis});
            const instrumentFilteredBrand = _.filter(instrumentFilteredTypeThis, {brand: dataObj.brand});
            const instrumentFilteredAvalibilitySecond = _.filter(instrumentFilteredBrand, {avalibilitySecond: dataObj.avalibilitySecond});
            const instrumentFiltered = _.filter(instrumentFilteredAvalibilitySecond, (instrument) => {
                return instrument.price <= dataObj.price;
            });
            console.log(instrumentFiltered);
            if (instrumentFiltered.length >= 1) {
                this.instrumentFilterByParams = instrumentFiltered
                localStorage.setItem("instrument_filter_by_params", JSON.stringify(this.instrumentFilterByParams))
                return true
            } else {
                ProcessingError('Такого инструмента нету!')
                return false
            }
        },
    },
    getters: {
        getInstrument: state => state.instrumentLocalCopyById
    },
})
