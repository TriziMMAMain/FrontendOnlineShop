import {createRouter, createWebHistory} from 'vue-router'

import MainComponents from '../components/mainComponentInstrument.vue'
import homeComponentSite from '../components/homeComponentSite.vue'
import SearchInstrumentByName from '../components/searchInstrument/searchInstrumentByName.vue'
import SearchInstrumentByParams from '../components/searchInstrument/searchInsrumentByFilter.vue'
// basket
import basketComponentSite from '../components/Basket/basketComponentSite.vue'
import BasketComponentCheckout from '../components/Basket/basketComponentCheckout.vue'
// Cordless
import ShopCordlessInstruments from '../components/ShopCordlessInstrument/ShopCordlessInstruments.vue'
import ShopCordless from '../components/ShopCordlessInstrument/ShopCordlessInstrument.vue'
import ShopCordlessAll from '../components/ShopCordlessInstrument/ShopCordlessInstrumentAll.vue'
// Cordless ID
import ShopCordlessInstrumentsId from '../components/ShopInstrumentByID/CordlessId/ShopCordlessInstrumentsId.vue'
// Gasoline
import ShopGasoline from '../components/ShopGasolineInstrument/ShopGasolineInstrument.vue'
import ShopGasolineAll from '../components/ShopGasolineInstrument/ShopGasolineInstrumentAll.vue'
import ShopGasolineInstruments from '../components/ShopGasolineInstrument/ShopGasolineInstruments.vue'
// Gasoline ID
import ShopGasolineInstrumentsId from '../components/ShopInstrumentByID/GasolineId/ShopGasolineInstrumentsId.vue'
// Network
import ShopNetwork from '../components/ShopNetworkInstrument/ShopNetworkInstrument.vue'
import ShopNetworkInstrumentAll from '../components/ShopNetworkInstrument/ShopNetworkInstrumentAll.vue'
import ShopNetworkInstruments from '../components/ShopNetworkInstrument/ShopNetworkInstruments.vue'
// Network ID
import ShopNetworkInstrumentsId from '../components/ShopInstrumentByID/NetworkId/ShopNetworkInstrumentsId.vue'
// Pneumotool
import ShopPneumotoolInstrument from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrument.vue'
import ShopPneumotoolInstrumentAll from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentAll.vue'
import ShopPneumotoolInstruments from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstruments.vue'
// Pneumotool ID
import ShopPneumotoolInstrumentsId from '../components/ShopInstrumentByID/PneumotoolId/ShopPneumotoolInstrumentsId.vue'
// Diesel
import ShopDieselInstrument from '../components/ShopDieselInstrument/ShopDieselInstrument.vue'
import ShopDieselInstrumentAll from '../components/ShopDieselInstrument/ShopDieselInstrumentAll.vue'
import ShopDieselInstruments from '../components/ShopDieselInstrument/ShopDieselInstruments.vue'
// Diesel ID
import ShopDieselInstrumentsId from '../components/ShopInstrumentByID/DieselId/ShopDieselInstrumentsId.vue'


const routes = [
    {
        path: '/', // /
        name: 'mainComponents',
        component: MainComponents,
    },

    {
        path: '/home/', // /
        name: 'homeComponent',
        components: {
            homeComponentSite: homeComponentSite
        },
    },

    {
        path: '/basket/', // /
        name: 'basketComponent',
        components: {
            basketComponentSite: basketComponentSite
        },
    },

    {
        path: '/checkout/',
        name: 'basketComponentCheckout',
        components: {
            basketComponentCheckout: BasketComponentCheckout,
        },
    },

    {
        path: '/search/instrument/id/:id/',
        name: 'searchInstrumentByName',
        components: {
            searchInstrumentByName: SearchInstrumentByName,
        },
    },

    {
        path: '/search/instrument/',
        name: 'searchInstrumentByParams',
        components: {
            searchInstrumentByParams: SearchInstrumentByParams
        }
    },

    {
        path: '/cordless-instrument/', // /cordless-instrument/
        name: 'cordlessInstrument',
        components: {
            cordlessTools: ShopCordless,
        },
        children: [
            {
                path: 'catalog/',
                name: 'cordlessInstrumentAll',
                components: {
                    cordlessToolsAll: ShopCordlessAll,
                }
            },
            {
                path: 'drills/',
                name: 'Аккумуляторная дрель-шуруповерт',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },
            },
            {
                path: 'drills/id/:id/',
                name: 'Аккумуляторная дрель-шуруповерт ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },
            },
            // done!
            {
                path: 'grinders/',
                name: 'Аккумуляторная болгарка',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },

            },
            {
                path: 'grinders/id/:id/',
                name: 'Аккумуляторная болгарка ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },
            },
            // done!
            {
                path: 'screwdrivers/',
                name: 'Аккумуляторный перфоратор',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },
            },
            {
                path: 'screwdrivers/id/:id/',
                name: 'Аккумуляторный перфоратор ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },

            },
        ],
    },
    {
        path: '/gasoline-instrument/', // /gasoline-instrument/
        name: 'gasolineInstrument',
        components: {
            default: ShopGasoline,
        },
        children: [
            {
                path: 'catalog/',
                name: 'gasolineInstrumentAll',
                components: {
                    gasolineToolsAll: ShopGasolineAll,
                }
            },
            {
                path: 'generator/',
                name: 'Бензогенератор',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
            },
            {
                path: 'generator/id/:id/',
                name: 'Бензогенератор ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
            },
            {
                path: 'motoblock/',
                name: 'Бензиновый мотоблок',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
            },
            {
                path: 'motoblock/id/:id/',
                name: 'Бензиновый мотоблок ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
            },
            {
                path: 'chainsaw/',
                name: 'Бензопила',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
            },
            {
                path: 'chainsaw/id/:id/',
                name: 'Бензопила ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
            },
            {
                path: 'petrol-trimmer/',
                name: 'Бензотриммер',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
            },
            {
                path: 'petrol-trimmer/id/:id/',
                name: 'Бензотриммер ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
            },
        ]
    },
    {
        path: '/network-instrument/', // /network-instrument/
        name: 'networkInstrument',
        components: {
            networkTools: ShopNetwork,
        },
        children: [
            {
                path: 'catalog/',
                name: 'networkInstrumentAll',
                components: {
                    networkToolsAll: ShopNetworkInstrumentAll,
                }
            },
            {
                path: 'drill/',
                name: 'Дрель',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
            },
            {
                path: 'drill/id/:id/',
                name: 'Дрель ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
            },
            {
                path: 'fretsaw/',
                name: 'Лобзик электрический',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
            },
            {
                path: 'fretsaw/id/:id/',
                name: 'Лобзик электрический ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
            },
            {
                path: 'perforator/',
                name: 'Перфоратор',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
            },
            {
                path: 'grinders/',
                name: 'Электрическая болгарка',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
            },
            {
                path: 'grinders/id/:id/',
                name: 'Электрическая болгарка ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
            },
            {
                path: 'garden-vacuum-cleaner/',
                name: 'Садовый пылесос',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
            },
            {
                path: 'garden-vacuum-cleaner/id/:id/',
                name: 'Садовый пылесос ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
            },
        ]
    },
    {
        path: '/pneumotool-instrument/', // /pneuomotool-instrument/
        name: 'pneumotoolInstrument',
        components: {
            pneuomoTools: ShopPneumotoolInstrument,
        },
        children: [
            {
                path: 'catalog/',
                name: 'pneumotoolInstrumentAll',
                components: {
                    pneumotoolToolsAll: ShopPneumotoolInstrumentAll,
                }
            },
            {
                path: 'compressor/', // /gasoline-instrument/gasoline-generator/
                name: 'Компрессор',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
            },
            {
                path: 'compressor/id/:id', // /gasoline-instrument/gasoline-generator/
                name: 'Компрессор ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
            },

            {
                path: 'jackhammer/',
                name: 'Пневматическая отбойная молотковая машина',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
            },
            {
                path: 'jackhammer/id/:id',
                name: 'Пневматическая отбойная молотковая машина ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
            },

            {
                path: 'nail-gun/',
                name: 'Гвоздезабивной пистолет пневматический',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
            },
            {
                path: 'nail-gun/id/:id',
                name: 'Гвоздезабивной пистолет пневматический ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
            },
        ]
    },
    {
        path: '/diesel-instrument/',
        name: 'dieselInstrument',
        components: {
            dieselTools: ShopDieselInstrument,
        },
        children: [
            {
                path: 'catalog/',
                name: 'dieselInstrumentAll',
                components: {
                    dieselToolsAll: ShopDieselInstrumentAll,
                }
            },
            {
                path: 'generator/',
                name: 'Дизельный генератор',
                components: {
                    shopDieselInstruments: ShopDieselInstruments,
                },
            },
            {
                path: 'generator/id/:id',
                name: 'Дизельный генератор ID',
                components: {
                    shopDieselInstrumentsId: ShopDieselInstrumentsId,
                },
            },
        ]
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
