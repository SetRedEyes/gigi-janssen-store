export const categoriesObject = {
    gigi: {
        acnon: {
            _id: "acnon",
            name: "Acnon - Линия для лечения акне",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        esterC: {
            _id: "esterC",
            name: "Ester C - Серия для осветления кожи",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        newAge: {
            _id: "newAge",
            name: "New Age - Линия с фитоэстрогенами для возрастной кожи",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        oxygenPrime: {
            _id: "oxygenPrime",
            name: "Oxygen Prime - Кислородная линия для ревитализации и ремоделирования кожи",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        seaWeed: {
            _id: "seaWeed",
            name: "Sea Weed - Морские водоросли для комбинированной и жирной кожи",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        recovery: {
            _id: "recovery",
            name: "Recovery - Парамедицинская линия на основе растительных стволовых клеток",
            companyName: "gigi",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        }
    },
    janssen: {
        matureSkin: {
            _id: "matureSkin",
            name: "Mature Skin - Антивозрастная серия с мощными активными компонентами",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        platinumCare: {
            _id: "platinumCare",
            name: "Platinum Care - Линия на основе пептидов и коллоидной платины",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        drySkin: {
            _id: "drySkin",
            name: "Dry Skin - Для сухой кожи",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        demandingSkin: {
            _id: "demandingSkin",
            name: "Для требовательной кожи",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        combinationSkin: {
            _id: "combinationSkin",
            name: "Combination Skin - Для комбинированной кожи",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        },
        oilySkin: {
            _id: "oilySkin",
            name: "Oily Skin - Для жирной кожи",
            companyName: "janssen",
            photo: "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
        }
    }
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesObject)
        }, 2000)
    })

const getByCompany = (key) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesObject[key])
        }, 1000)
    })

export default {
    fetchAll,
    getByCompany
}
