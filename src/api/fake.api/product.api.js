import { categoriesObject as categories } from "./categories.api"

const volume = {
  50: { _id: "50", name: 50 },
  100: { _id: "100", name: 100 },
  120: { _id: "120", name: 120 },
  200: { _id: "200", name: 200 },
  250: { _id: "250", name: 250 }
}

const products = [
  {
    _id: "1",
    name: "GIGI Acnon Smoothing Facial Cleanser ",
    rusName: "Успокаивающий гель для умывания",
    category: categories.acnon,
    price: [800, 1500],
    volume: [volume[50], volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "2",
    name: "GIGI New Age Comfort Day Cream SPF-15",
    rusName: "Дневной крем SPF-15",
    category: categories.newAge,
    price: [900],
    volume: [volume[100]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "3",
    name: "GIGI Ester C Mild Cleanser",
    rusName: "Нежный гель для умывания",
    category: categories.esterC,
    price: [1300, 2000],
    volume: [volume[120], volume[200]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "4",
    name: "GIGI Oxygen Prime Refreshing Cleansing Gel",
    rusName: "Освежающий очищающий гель",
    category: categories.oxygenPrime,
    price: [1150],
    volume: [volume[200]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "5",
    name: "GIGI Recovery Skin Clear Cleanser",
    rusName: "Очищающий гель",
    category: categories.recovery,
    price: [850, 1600],
    volume: [volume[120], volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "6",
    name: "GIGI Acnon Spotless Skin Refresher",
    rusName: "Очищающий тоник",
    category: categories.acnon,
    price: [1400],
    volume: [volume[120]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "7",
    name: "GIGI Oxygen Prime Advanced Moisturizer SPF-15",
    rusName: "Увлажняющий крем SPF-15",
    category: categories.oxygenPrime,
    price: [2000],
    volume: [volume[50]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "8",
    name: "GIGI Ester C Moisturizer Cream SPF-20",
    rusName: "Дневной увлажняющий крем SPF-20",
    category: categories.esterC,
    price: [1000, 2000],
    volume: [volume[50], volume[200]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "9",
    name: "GIGI New Age Active Serum",
    rusName: "Активная сыворотка",
    category: categories.newAge,
    price: [2900],
    volume: [volume[120]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "10",
    name: "GIGI Sea Weed Toner",
    rusName: "Тонер",
    category: categories.recovery,
    price: [850],
    volume: [volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "11",
    name: "GIGI Sea Weed Soapless Soap",
    rusName: "Непенящееся мыло",
    category: categories.seaWeed,
    price: [850, 1600],
    volume: [volume[120], volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "12",
    name: "GIGI Recovery Skin Clear Cleanser",
    rusName: "Очищающий гель",
    category: categories.recovery,
    price: [850, 1600],
    volume: [volume[120], volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "13",
    name: "GIGI Recovery Skin Clear Cleanser",
    rusName: "Очищающий гель",
    category: categories.recovery,
    price: [850, 1600],
    volume: [volume[120], volume[250]],
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
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
      resolve(products.find((user) => products.id === id))
    }, 1000)
  })

export default {
  fetchAll,
  getById
}
