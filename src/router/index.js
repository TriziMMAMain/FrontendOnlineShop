import {createRouter, createWebHistory} from 'vue-router'

import MainComponents from '../components/mainComponentInstrument.vue'
import homeComponentSite from '../components/homeComponentSite.vue'
import basketComponentSite from '../components/Basket/basketComponent.vue'
import BasketComponentCheckout from '../components/Basket/basketComponentCheckout.vue'
// Cordless
import ShopCordless from '../components/ShopCordlessInstrument/ShopCordlessInstrument.vue'
import ShopCordlessAll from '../components/ShopCordlessInstrument/ShopCrodlessInstrumentAll.vue'
import ShopCordlessDrill from '../components/ShopCordlessInstrument/ShopCordlessInstrumentDrill.vue'
import ShopCordlessGrinders from '../components/ShopCordlessInstrument/ShopCordlessInstrumentGrinders.vue'
import ShopCordlessScrewdrivers from '../components/ShopCordlessInstrument/ShopCordlessInstrumentScrewdrivers.vue'
// Cordless ID
import ShopInstrumentId from '../components/ShopInstrumentByID/ShopInstrumentCordlessIdDrill.vue'
import ShopInstrumentGrindersId from '../components/ShopInstrumentByID/ShopInstrumentCordlessIdGrinders.vue'
import ShopInstrumentScrewdriversId from '../components/ShopInstrumentByID/ShopInstrumentCordlessIdScrewdrivers.vue'
// Gasoline
import ShopGasoline from '../components/ShopGasolineInstrument/ShopGasolineInstrument.vue'
import ShopGasolineAll from '../components/ShopGasolineInstrument/ShopGasolineInstrumentAll.vue'
// import ShopGasoline from '../components/ShopGasolineInstrument/ShopGasolineInstrument.vue'
import ShopGasolineGenerator from '../components/ShopGasolineInstrument/ShopGasolineInstrumentGasoline.vue'
import ShopGasolineGeneratorId from '../components/ShopInstrumentByID/ShopInstrumentGasolineGeneratorId.vue'
// Network
import ShopNetwork from '../components/ShopNetworkInstrument/ShopNetworkInstrument.vue'
import ShopNetworkInstrumentAll from '../components/ShopNetworkInstrument/ShopNetworkInstrumentAll.vue'
import ShopNetworkInstrumentDrill from '../components/ShopNetworkInstrument/ShopNetworkInstrumentDrill.vue'
import ShopNetworkInstrumentDrillId from '../components/ShopInstrumentByID/ShopInstrumentNetworkId.vue'
// Pneumotool
import ShopPneumotoolInstrument from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrument.vue'
import ShopPneumotoolInstrumentAll from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentAll.vue'
import ShopPneumotoolInstrumentCompressor
    from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentCompressor.vue'
import ShopPneumotoolInstrumentCompressorId from '../components/ShopInstrumentByID/ShopInstrumentPneumotoolId.vue'
// Admin
import AdminView from '../views/AdminView.vue'

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
        path: '/cordless-instrument/', // /cordless-instrument/
        name: 'cordlessInstrument',
        components: {
            cordlessTools: ShopCordless,
        },
        children: [
            {
                path: 'catalog/',
                name: 'crodlessInstrumentAll',
                components: {
                    cordlessToolsAll: ShopCordlessAll,
                }
            },
            {
                path: 'drills/', // /cordless-instrument/cordless-drills/
                name: 'cordlessInstrumentDrills',
                components: {
                    cordlessToolsDrill: ShopCordlessDrill,
                },
            },
            {
                path: 'drills/id/:id/', // // /cordless-instrument/cordless-drills/id/1
                name: 'cordlessInstrumentDrillsID',
                components: {
                    cordlessToolsDrillId: ShopInstrumentId,
                },
            },
            // done!
            {
                path: 'grinders/', // /cordless-instrument/cordless-grinders/
                name: 'cordlessInstrumentGrinders',
                components: {
                    cordlessToolsGrinders: ShopCordlessGrinders,
                },

            },
            {
                path: 'grinders/id/:id/', // /cordless-instrument/cordless-grinders/
                name: 'cordlessInstrumentGrindersID',
                components: {
                    cordlessToolsGrindersId: ShopInstrumentGrindersId,
                },

            },
            // done!
            {
                path: 'screwdrivers/', // /cordless-instrument/cordless-screwdrivers/
                name: 'cordlessInstrumentScrewdrivers',
                components: {
                    cordlessToolsScrewdrivers: ShopCordlessScrewdrivers,
                },
            },
            {
                path: 'screwdrivers/id/:id/', // /cordless-instrument/cordless-screwdrivers/id/id
                name: 'cordlessInstrumentScrewdriversID',
                components: {
                    cordlessToolsScrewdriversID: ShopInstrumentScrewdriversId,
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
                path: 'generator/', // /gasoline-instrument/gasoline-generator/
                name: 'gasolineInstrumentGenerator',
                components: {
                    default: MainComponents,
                    gasolineToolsGenerator: ShopGasolineGenerator,
                },
            },
            {
                path: 'generator/id/:id/', // /gasoline-instrument/gasoline-generator/
                name: 'gasolineInstrumentGeneratorId',
                components: {
                    default: MainComponents,
                    gasolineToolsGeneratorId: ShopGasolineGeneratorId,
                },
            },
        ]
    },

    {
        path: '/network-instrument/', // /network-instrument/
        name: 'networkInstrument',
        components: {
            default: MainComponents,
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
                path: 'drill/', // /gasoline-instrument/gasoline-generator/
                name: 'networkInstrumentDrill',
                components: {
                    default: MainComponents,
                    networkToolsDrill: ShopNetworkInstrumentDrill,
                },
            },
            {
                path: 'drill/id/:id/', // /gasoline-instrument/gasoline-generator/
                name: 'networkInstrumentDrillId',
                components: {
                    default: MainComponents,
                    networkToolsDrillId: ShopNetworkInstrumentDrillId,
                },
            },
        ]
    },

    {
        path: '/pneumotool-instrument/', // /pneuomotool-instrument/
        name: 'pneumotoolInstrument',
        components: {
            default: MainComponents,
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
                name: 'pneumotoolInstrument',
                components: {
                    default: MainComponents,
                    pneumotoolToolsCompressor: ShopPneumotoolInstrumentCompressor,
                },
            },
            {
                path: 'compressor/id/:id', // /gasoline-instrument/gasoline-generator/
                name: 'pneumotoolInstrumentId',
                components: {
                    default: MainComponents,
                    pneumotoolToolsCompressorId: ShopPneumotoolInstrumentCompressorId,
                },
            },
        ]
    },

    {
        path: '/admin-panel/', // /admin-panel/
        name: 'adminPanel',
        components: {
            adminPanel: AdminView,
        },
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
