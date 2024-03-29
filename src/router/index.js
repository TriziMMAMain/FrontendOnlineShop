import {createRouter, createWebHistory} from 'vue-router'

import MainComponents from '../components/mainComponentInstrument.vue'
import homeComponentSite from '../components/homeComponentSite.vue'
import SearchInstrumentByName from '../components/searchInstrument/searchInstrumentByName.vue'
import SearchInstrumentByParams from '../components/searchInstrument/searchInsrumentByFilter.vue'
import ErrorNotFound from '../components/NotFound.vue'
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
        path: '/',
        redirect: '/home'
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/error-not-found'
    },

    {
        path: '/home/', // /
        name: 'homeComponent',
        components: {
            homeComponentSite: homeComponentSite
        },
        meta: {
            title: "Интернет-магазин Все Инструменты Дон",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить инструмент в Донецке, то вам нужно попасть к нам. Наша команда экспертов всегда готова помочь вам выбрать правильный инструмент, отвечающий вашим потребностям. Находимся мы в городе Донецк, Ленинский район. Откройте для себя широкий выбор инструментов высокого качества и удобство онлайн-шопинга вместе с Все Инструменты Дон!"
        }
    },

    {
        path: '/error-not-found/',
        name: 'errorNotFound',
        components: {
            errorNotFound: ErrorNotFound
        },
        meta: {
            title: "Страница не найдена 404",
            description: "Страница не найдена 404"
        }
    },

    {
        path: '/basket/', // /
        name: 'basketComponent',
        components: {
            basketComponentSite: basketComponentSite
        },
        meta: {
            title: "Корзина"
        }
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
        meta: {
            title: "Купить аккамуляторный инструмент в Донецке по низкой цене",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить аккумуляторный инструмент в Донецке по низкой цене, то вам нужно попасть к нам."
        },
        children: [
            {
                path: 'catalog/',
                name: 'cordlessInstrumentAll',
                components: {
                    cordlessToolsAll: ShopCordlessAll,
                },
                meta: {
                    title: "Каталог аккумуляторного инструмента"
                }
            },
            {
                path: 'drills/',
                name: 'Аккумуляторная дрель-шуруповерт',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },
                meta: {
                    title: "Купить аккамуляторную дрель-шуруповерт в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить аккумуляторную дрель-шуруповерт в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'drills/id/:id/',
                name: 'Аккумуляторная дрель-шуруповерт ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },
                meta: {
                    title: "Загрузка...",
                }
            },
            // done!
            {
                path: 'grinders/',
                name: 'Аккумуляторная болгарка',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },
                meta: {
                    title: "Купить аккамуляторную болгарку в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить аккумуляторную болгарку в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'grinders/id/:id/',
                name: 'Аккумуляторная болгарка ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            // done!
            {
                path: 'screwdrivers/',
                name: 'Аккумуляторный перфоратор',
                components: {
                    cordlessInstrument: ShopCordlessInstruments
                },
                meta: {
                    title: "Купить аккамуляторный перфоратор в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить аккумуляторный перфоратор в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'screwdrivers/id/:id/',
                name: 'Аккумуляторный перфоратор ID',
                components: {
                    cordlessInstrumentId: ShopCordlessInstrumentsId
                },
                meta: {
                    title: "Загрузка..."
                }
            },
        ],
    },
    {
        path: '/gasoline-instrument/', // /gasoline-instrument/
        name: 'gasolineInstrument',
        components: {
            default: ShopGasoline,
        },
        meta: {
            title: "Купить бензиноинструмент в Донецке по низкой цене",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить бензоинструмент в Донецке по низкой цене, то вам нужно попасть к нам."
        },
        children: [
            {
                path: 'catalog/',
                name: 'gasolineInstrumentAll',
                components: {
                    gasolineToolsAll: ShopGasolineAll,
                },
                meta: {
                    title: "Каталог бензиноинструмента",
                }
            },
            {
                path: 'generator/',
                name: 'Бензогенератор',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
                meta: {
                    title: "Купить бензиновый генератор на 1, 3, 5 или 7 кВт в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить бензиновый генератор на 1, 3, 5 или 7 кВт в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'generator/id/:id/',
                name: 'Бензогенератор ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },

                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'motoblock/',
                name: 'Бензиновый мотоблок',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
                meta: {
                    title: "Купить бензиновый мотоблок 7, 9, 13 л.с. в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить бензиновый мотоблок 7, 9, 13 л.с. в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'motoblock/id/:id/',
                name: 'Бензиновый мотоблок ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'chainsaw/',
                name: 'Бензопила',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
                meta: {
                    title: "Купить бензопилу в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить бензопилу в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'chainsaw/id/:id/',
                name: 'Бензопила ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'petrol-trimmer/',
                name: 'Бензотриммер',
                components: {
                    shopGasolineInstruments: ShopGasolineInstruments,
                },
                meta: {
                    title: "Купить бензотример двухтактный или четырехтактный в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить бензотример двухтактный или четырехтактный в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'petrol-trimmer/id/:id/',
                name: 'Бензотриммер ID',
                components: {
                    shopGasolineInstrumentsId: ShopGasolineInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
        ]
    },
    {
        path: '/network-instrument/', // /network-instrument/
        name: 'networkInstrument',
        components: {
            networkTools: ShopNetwork,
        },
        meta: {
            title: "Купить электроинструмент в Донецке по низкой цене",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить электроинструмент в Донецке по низкой цене, то вам нужно попасть к нам."
        },
        children: [
            {
                path: 'catalog/',
                name: 'networkInstrumentAll',
                components: {
                    networkToolsAll: ShopNetworkInstrumentAll,
                },
                meta: {
                    title: "Каталог электроинструмента",
                }
            },
            {
                path: 'drill/',
                name: 'Дрель',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить дрель в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить дрель в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'drill/id/:id/',
                name: 'Дрель ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'drill-driver/',
                name: 'Дрель-шуруповерт',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить дрель-шуруповерт в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить дрель-шуруповерт в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'drill-driver/id/:id/',
                name: 'Дрель-шуруповерт ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'fretsaw/',
                name: 'Лобзик электрический',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить лобзик в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить лобзик в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'fretsaw/id/:id/',
                name: 'Лобзик электрический ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'perforator/',
                name: 'Перфоратор',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить перфоратор в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить перфоратор в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'perforator/id/:id/',
                name: 'Перфоратор ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'grinders/',
                name: 'Электрическая болгарка',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить болгарку 115, 125 или 230 мм Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить болгарку 115, 125 или 230 мм в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'grinders/id/:id/',
                name: 'Электрическая болгарка ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'garden-vacuum-cleaner/',
                name: 'Садовый пылесос',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить садовый пылесос в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить садовый пылесос или воздуходувку в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'garden-vacuum-cleaner/id/:id/',
                name: 'Садовый пылесос ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'shredder/',
                name: 'Измельчитель',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить измельчитель веток в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить измельчитель веток в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'shredder/id/:id/',
                name: 'Измельчитель ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
            {
                path: 'electric-grinder/',
                name: 'Шлифмашина электрическая',
                components: {
                    shopNetworkInstruments: ShopNetworkInstruments,
                },
                meta: {
                    title: "Купить шлифмашинку в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить шлифмашинку в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'electric-grinder/id/:id/',
                name: 'Шлифмашина электрическая ID',
                components: {
                    shopNetworkInstrumentsId: ShopNetworkInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
        ]
    },
    {
        path: '/pneumotool-instrument/', // /pneuomotool-instrument/
        name: 'pneumotoolInstrument',
        components: {
            pneuomoTools: ShopPneumotoolInstrument,
        },
        meta: {
            title: "Купить пневмоинструмент в Донецке по низкой цене",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить пневмоинструмент в Донецке по низкой цене, то вам нужно попасть к нам."
        },
        children: [
            {
                path: 'catalog/',
                name: 'pneumotoolInstrumentAll',
                components: {
                    pneumotoolToolsAll: ShopPneumotoolInstrumentAll,
                },
                meta: {
                    title: "Каталог пневмоинструмента"
                }
            },
            {
                path: 'compressor/', // /gasoline-instrument/gasoline-generator/
                name: 'Компрессор',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
                meta: {
                    title: "Купить компрессор с ресивером на 50 или 100 литров в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить компрессор с ресивером на 50 или 100 литров в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'compressor/id/:id', // /gasoline-instrument/gasoline-generator/
                name: 'Компрессор ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },

            {
                path: 'jackhammer/',
                name: 'Пневматическая отбойная молотковая машина',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
                meta: {
                    title: "Купить пневматический отбойный молоток в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить пневматический отбойный молоток в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'jackhammer/id/:id',
                name: 'Пневматическая отбойная молотковая машина ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },

            {
                path: 'nail-gun/',
                name: 'Гвоздезабивной пистолет пневматический',
                components: {
                    shopPneumotoolInstruments: ShopPneumotoolInstruments,
                },
                meta: {
                    title: "Купить гвоздезабивной пистолет пневматический в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить гвоздезабивной пистолет пневматический в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'nail-gun/id/:id',
                name: 'Гвоздезабивной пистолет пневматический ID',
                components: {
                    shopPneumotoolInstrumentsId: ShopPneumotoolInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
        ]
    },
    {
        path: '/diesel-instrument/',
        name: 'dieselInstrument',
        components: {
            dieselTools: ShopDieselInstrument,
        },
        meta: {
            title: "Купить дизельный инструмент в Донецке по низкой цене",
            description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить дизельный инструмент в Донецке по низкой цене, то вам нужно попасть к нам."
        },
        children: [
            {
                path: 'catalog/',
                name: 'dieselInstrumentAll',
                components: {
                    dieselToolsAll: ShopDieselInstrumentAll,
                },
                meta: {
                    title: "Каталог дизельного инстурмента"
                }
            },
            {
                path: 'generator/',
                name: 'Дизельный генератор',
                components: {
                    shopDieselInstruments: ShopDieselInstruments,
                },
                meta: {
                    title: "Купить дизельный генератор на 5, 7, 10 или 12 кВт в Донецке по низкой цене",
                    description: "Добро пожаловать в интернет-магазин Все Инструменты Дон! У нас вы найдете широкий ассортимент бытового и профессионального инструмента от ведущих брендов, таких как Makita, Bosch, Stihl и многих других. Хотите купить дизельный генератор на 5, 7, 10 или 12 кВт в Донецке по низкой цене, то вам нужно попасть к нам."
                },
            },
            {
                path: 'generator/id/:id',
                name: 'Дизельный генератор ID',
                components: {
                    shopDieselInstrumentsId: ShopDieselInstrumentsId,
                },
                meta: {
                    title: "Загрузка..."
                }
            },
        ]
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeResolve((to, from, next) => {
    if (to.meta.description) {
        const metaDescriptionElement = document.querySelector('meta[name="description"]');
        if (metaDescriptionElement) {
            metaDescriptionElement.setAttribute('content', to.meta.description);
        }
        document.title = to.meta.title;
    }
    next();
});

export default router
