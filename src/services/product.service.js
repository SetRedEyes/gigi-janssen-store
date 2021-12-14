import httpService from "./http.service"

const productEndpoint = "products/"

const productService = {
  fetchAll: async () => {
    const data = await httpService.get(productEndpoint)
    return data
  }
}

export default productService
