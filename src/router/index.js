import {createRouter, createWebHistory} from 'vue-router'

import MainComponents from '../components/mainComponentInstrument.vue'
import homeComponentSite from '../components/homeComponentSite.vue'
import SearchInstrumentByName from '../components/searchInstrument/searchInstrumentByName.vue'
// basket
import basketComponentSite from '../components/Basket/basketComponentSite.vue'
import BasketComponentCheckout from '../components/Basket/basketComponentCheckout.vue'
// Cordless
import ShopCordless from '../components/ShopCordlessInstrument/ShopCordlessInstrument.vue'
import ShopCordlessAll from '../components/ShopCordlessInstrument/ShopCrodlessInstrumentAll.vue'
import ShopCordlessDrill from '../components/ShopCordlessInstrument/ShopCordlessInstrumentDrill.vue'
import ShopCordlessGrinders from '../components/ShopCordlessInstrument/ShopCordlessInstrumentGrinders.vue'
import ShopCordlessScrewdrivers from '../components/ShopCordlessInstrument/ShopCordlessInstrumentScrewdrivers.vue'
// Cordless ID
import ShopInstrumentId from '../components/ShopInstrumentByID/CordlessId/ShopInstrumentCordlessIdDrill.vue'
import ShopInstrumentGrindersId from '../components/ShopInstrumentByID/CordlessId/ShopInstrumentCordlessIdGrinders.vue'
import ShopInstrumentScrewdriversId from '../components/ShopInstrumentByID/CordlessId/ShopInstrumentCordlessIdScrewdrivers.vue'
// Gasoline
import ShopGasoline from '../components/ShopGasolineInstrument/ShopGasolineInstrument.vue'
import ShopGasolineAll from '../components/ShopGasolineInstrument/ShopGasolineInstrumentAll.vue'
// import ShopGasoline from '../components/ShopGasolineInstrument/ShopGasolineInstrument.vue'
import ShopGasolineGenerator from '../components/ShopGasolineInstrument/ShopGasolineInstrumentGenerator.vue'
import ShopGasolineGeneratorId from '../components/ShopInstrumentByID/GasolineId/ShopInstrumentGasolineIdGenerator.vue'
import ShopGasolineMotoblock from '../components/ShopGasolineInstrument/ShopGasolineInstrumentMotoblock.vue'
import ShopGasolineMotoblockId from '../components/ShopInstrumentByID/GasolineId/ShopInstrumentGasolineIdMotoblock.vue'
import ShopGasolineChainsaw from '../components/ShopGasolineInstrument/ShopGasolineInstrumentChainsaw.vue'
import ShopGasolineChainsawId from '../components/ShopInstrumentByID/GasolineId/ShopInstrumentGasolineIdChainsaw.vue'
// Network
import ShopNetwork from '../components/ShopNetworkInstrument/ShopNetworkInstrument.vue'
import ShopNetworkInstrumentAll from '../components/ShopNetworkInstrument/ShopNetworkInstrumentAll.vue'
import ShopNetworkInstrumentDrill from '../components/ShopNetworkInstrument/ShopNetworkInstrumentDrill.vue'
import ShopNetworkInstrumentDrillId from '../components/ShopInstrumentByID/NetworkId/ShopInstrumentNetworkIdDrill.vue'
import ShopNetworkInstrumentFretsaw from '../components/ShopNetworkInstrument/ShopNetworkInstrumentFretsaw.vue'
import ShopNetworkInstrumentFretsawId from '../components/ShopInstrumentByID/NetworkId/ShopInstrumentNetworkIdFretsaw.vue'
import ShopNetworkInstrumentPerforator from '../components/ShopNetworkInstrument/ShopNetworkInstrumentPerforator.vue'
import ShopNetworkInstrumentPerforatorId from '../components/ShopInstrumentByID/NetworkId/ShopInstrumentNetworkIdPerforator.vue'
// Pneumotool
import ShopPneumotoolInstrument from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrument.vue'
import ShopPneumotoolInstrumentAll from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentAll.vue'
import ShopPneumotoolInstrumentCompressor from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentCompressor.vue'
import ShopPneumotoolInstrumentCompressorId from '../components/ShopInstrumentByID/PneumotoolId/ShopInstrumentPneumotoolIdCompressor.vue'
import ShopPneumotoolInstrumentJackhammer from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentJackhammer.vue'
import ShopPneumotoolInstrumentJackhammerId from '../components/ShopInstrumentByID/PneumotoolId/ShopInstrumentPneumotoolIdJackhammer.vue'
import ShopPneumotoolInstrumentNailGun from '../components/ShopPneuomotoolInstrument/ShopPneumotoolInstrumentNailGun.vue'
import ShopPneumotoolInstrumentNailGunId from '../components/ShopInstrumentByID/PneumotoolId/ShopInstrumentPneumotoolIdNailGun.vue'
// Admin

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
                path: 'generator/',
                name: 'gasolineInstrumentGenerator',
                components: {
                    gasolineToolsGenerator: ShopGasolineGenerator,
                },
            },
            {
                path: 'generator/id/:id/',
                name: 'gasolineInstrumentGeneratorId',
                components: {
                    gasolineToolsGeneratorId: ShopGasolineGeneratorId,
                },
            },
            {
                path: 'motoblock/',
                name: 'gasolineInstrumentMotoblock',
                components: {
                    gasolineToolsMotoblock: ShopGasolineMotoblock,
                },
            },
            {
                path: 'motoblock/id/:id/',
                name: 'gasolineInstrumentMotoblockId',
                components: {
                    gasolineToolsMotoblockId: ShopGasolineMotoblockId,
                },
            },
            {
                path: 'chainsaw/',
                name: 'gasolineInstrumentChainsaw',
                components: {
                    gasolineToolsChainsaw: ShopGasolineChainsaw,
                },
            },
            {
                path: 'chainsaw/id/:id/',
                name: 'gasolineInstrumentChainsawId',
                components: {
                    gasolineToolsChainsawId: ShopGasolineChainsawId,
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
                name: 'networkInstrumentDrill',
                components: {
                    networkToolsDrill: ShopNetworkInstrumentDrill,
                },
            },
            {
                path: 'drill/id/:id/',
                name: 'networkInstrumentDrillId',
                components: {
                    networkToolsDrillId: ShopNetworkInstrumentDrillId,
                },
            },
            {
                path: 'fretsaw/',
                name: 'networkInstrumentFretsaw',
                components: {
                    networkToolsFretsaw: ShopNetworkInstrumentFretsaw,
                },
            },
            {
                path: 'fretsaw/id/:id/',
                name: 'networkInstrumentFretsawId',
                components: {
                    networkToolsFretsawId: ShopNetworkInstrumentFretsawId,
                },
            },
            {
                path: 'perforator/',
                name: 'networkInstrumentPerforator',
                components: {
                    networkToolsPerforator: ShopNetworkInstrumentPerforator,
                },
            },
            {
                path: 'perforator/id/:id/',
                name: 'networkInstrumentPerforatorId',
                components: {
                    networkToolsPerforatorId: ShopNetworkInstrumentPerforatorId,
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
                name: 'pneumotoolInstrument',
                components: {
                    pneumotoolToolsCompressor: ShopPneumotoolInstrumentCompressor,
                },
            },
            {
                path: 'compressor/id/:id', // /gasoline-instrument/gasoline-generator/
                name: 'pneumotoolInstrumentId',
                components: {
                    pneumotoolToolsCompressorId: ShopPneumotoolInstrumentCompressorId,
                },
            },

            {
                path: 'jackhammer/',
                name: 'pneumotoolInstrumentJackhammer',
                components: {
                    pneumotoolToolsJackhammer: ShopPneumotoolInstrumentJackhammer,
                },
            },
            {
                path: 'jackhammer/id/:id',
                name: 'pneumotoolInstrumentJackhammerId',
                components: {
                    pneumotoolToolsJackhammerId: ShopPneumotoolInstrumentJackhammerId,
                },
            },

            {
                path: 'nail-gun/',
                name: 'pneumotoolInstrumentNailGun',
                components: {
                    pneumotoolToolsNailGun: ShopPneumotoolInstrumentNailGun,
                },
            },
            {
                path: 'nail-gun/id/:id',
                name: 'pneumotoolInstrumentNailGunId',
                components: {
                    pneumotoolToolsNailGunId: ShopPneumotoolInstrumentNailGunId,
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
