export const categoriesObject = {
  acnon: { _id: "1", name: "Acnon - Линия для лечения акне" },
  newAge: { _id: "2", name: "Ester C - Серия для осветления кожи" },
  esterC: {
    _id: "3",
    name: "New Age - Линия с фитоэстрогенами для возрастной кожи"
  },
  oxygenPrime: {
    _id: "4",
    name: "Oxygen Prime - Кислородная линия для ревитализации и ремоделирования кожи"
  },
  seaWeed: {
    _id: "5",
    name: "Recovery - Парамедицинская линия на основе растительных стволовых клеток"
  },
  recovery: {
    _id: "6",
    name: "Sea Weed - Морские водоросли для комбинированной и жирной кожи"
  }
}

export const categories = [
  { _id: "1", name: "Acnon - Линия для лечения акне" },
  { _id: "2", name: "Ester C - Серия для осветления кожи" },
  {
    _id: "3",
    name: "New Age - Линия с фитоэстрогенами для возрастной кожи"
  },
  {
    _id: "4",
    name: "Oxygen Prime - Кислородная линия для ревитализации и ремоделирования кожи"
  },
  {
    _id: "5",
    name: "Recovery - Парамедицинская линия на основе растительных стволовых клеток"
  },
  {
    _id: "6",
    name: "Sea Weed - Морские водоросли для комбинированной и жирной кожи"
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories)
    }, 2000)
  })

export default {
  fetchAll
}
