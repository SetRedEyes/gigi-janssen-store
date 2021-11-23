const companiesObject = [
  {
    _id: "gigi",
    name: "GIGI Сosmetic Laboratories",
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  },
  {
    _id: "janssen",
    name: "JANSSEN Cosmetics",
    photo:
      "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(companiesObject)
    }, 2000)
  })

export default {
  fetchAll
}
