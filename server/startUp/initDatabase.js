const Company = require('../models/Company')
const Category = require('../models/Category')
const Product = require('../models/Product')

const companyMock = require('../mock/companies.json')
const categoryMock = require('../mock/categories.json')
const productMock = require('../mock/products.json')

module.exports = async () => {
  const companies = Company.find()
  if(companies.length !== companyMock.length){
    createInitialEntity(Company, companyMock)
  }
}

async function createInitialEntity(Model, data) {
return Promise.all(
  data.map(async item=>{
    try {
      
    } catch (error) {
      
    }
  })
)
}
