import httpService from "./http.service"

const productEndpoint = "product/"

const productService = {
  fetchAll: async () => {
    const data = await httpService.get(productEndpoint)
    console.log(data)
    return data
  }
}

export default productService
