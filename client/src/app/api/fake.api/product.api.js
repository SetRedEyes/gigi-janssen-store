import { categoriesObject as categories } from "./categories.api"

const volume = {
    50: { _id: "50", name: 50 },
    100: { _id: "100", name: 100 },
    120: { _id: "120", name: 120 },
    200: { _id: "200", name: 200 },
    250: { _id: "250", name: 250 },
    500: { _id: "500", name: 500 }
}

const products = [
    {
        _id: "1",
        name: "Acnon Smoothing Facial Cleanser ",
        rusName: "Успокаивающий гель для умывания",
        category: categories.gigi.acnon,
        price: [800, 1500],
        volume: [volume[50], volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "2",
        name: "New Age Comfort Day Cream SPF-15",
        rusName: "Дневной крем SPF-15",
        category: categories.gigi.newAge,
        price: [900],
        volume: [volume[100]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "3",
        name: "Ester C Mild Cleanser",
        rusName: "Нежный гель для умывания",
        category: categories.gigi.esterC,
        price: [1300, 2000],
        volume: [volume[120], volume[200]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "4",
        name: "Oxygen Prime Refreshing Cleansing Gel",
        rusName: "Освежающий очищающий гель",
        category: categories.gigi.oxygenPrime,
        price: [1150],
        volume: [volume[200]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "5",
        name: "Recovery Skin Clear Cleanser",
        rusName: "Очищающий гель",
        category: categories.gigi.recovery,
        price: [850, 1600],
        volume: [volume[120], volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "6",
        name: " Acnon Spotless Skin Refresher",
        rusName: "Очищающий тоник",
        category: categories.gigi.acnon,
        price: [1400],
        volume: [volume[120]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "7",
        name: "Oxygen Prime Advanced Moisturizer SPF-15",
        rusName: "Увлажняющий крем SPF-15",
        category: categories.gigi.oxygenPrime,
        price: [2000],
        volume: [volume[50]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "8",
        name: "Ester C Moisturizer Cream SPF-20",
        rusName: "Дневной увлажняющий крем SPF-20",
        category: categories.gigi.esterC,
        price: [1000, 2000],
        volume: [volume[50], volume[200]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "9",
        name: "New Age Active Serum",
        rusName: "Активная сыворотка",
        category: categories.gigi.newAge,
        price: [2900],
        volume: [volume[120]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "10",
        name: "Sea Weed Toner",
        rusName: "Тонер",
        category: categories.gigi.seaWeed,
        price: [800],
        volume: [volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "11",
        name: "Sea Weed Soapless Soap",
        rusName: "Непенящееся мыло",
        category: categories.gigi.seaWeed,
        price: [950, 1600],
        volume: [volume[120], volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "12",
        name: "Recovery Skin Clear Cleanser",
        rusName: "Очищающий гель",
        category: categories.gigi.recovery,
        price: [900, 1600],
        volume: [volume[120], volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "13",
        name: "Recovery Skin Clear Cleanser",
        rusName: "Очищающий гель",
        category: categories.gigi.recovery,
        price: [920, 1600],
        volume: [volume[120], volume[250]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "14",
        name: "Mature Skin Luxury Oil Cleanser",
        rusName: "Очищающее масло для лица",
        category: categories.janssen.matureSkin,
        price: [750],
        volume: [volume[100]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "15",
        name: "Dry Skin Mild Creamy Cleanser",
        rusName: "Очищающее молочко",
        category: categories.janssen.drySkin,
        price: [650, 1050],
        volume: [volume[200], volume[500]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "16",
        name: "Platinum Care Day Cream",
        rusName: "Дневной крем реструктурирующий",
        category: categories.janssen.platinumCare,
        price: [1900, 2150],
        volume: [volume[50], volume[100]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "17",
        name: "Demanding Skin Brightening Face Cleanser",
        rusName: "Осветляющая очищающая эмульсия ",
        category: categories.janssen.demandingSkin,
        price: [650, 1100],
        volume: [volume[200], volume[500]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "18",
        name: "Combination Skin Gentle Cleansing Powder",
        rusName: "Очищающая пудраа",
        category: categories.janssen.combinationSkin,
        price: [650],
        volume: [volume[100]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    },
    {
        _id: "19",
        name: "Oily Skin Clarifying Cleansing Gel",
        rusName: "Очищающий гель",
        category: categories.janssen.oilySkin,
        price: [650, 1150],
        volume: [volume[200], volume[500]],
        photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
    }
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products)
        }, 2000)
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products.find((product) => product._id === id))
        }, 1000)
    })

export default {
    fetchAll,
    getById
}
