const Company = require('../models/Company')
const Category = require('../models/Category')
const Product = require('../models/Product')

const companyMock = require('../mock/companies.json')
const categoryMock = require('../mock/categories.json')
const productMock = require('../mock/products.json')

module.exports = async () => {
  const companies = Company.find()
  if (companies.length !== companyMock.length) {
    createInitialEntity(Company, companyMock)
  }
}
module.exports = async () => {
  const categories = Category.find()
  if (categories.length !== categoryMock.length) {
    createInitialEntity(Category, categoryMock)
  }
}
module.exports = async () => {
  const products = Product.find()
  if (products.length !== productMock.length) {
    createInitialEntity(Product, productMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()

        return newItem
      } catch (e) {
        return e
      }
    })
  )
}
