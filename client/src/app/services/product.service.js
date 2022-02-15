import httpService from "./http.service"

const productEndpoint = "product/"

const productService = {
    createProduct: async (payload) => {
        console.log("from service", payload)
        const { data } = await httpService.post(productEndpoint, payload)
        return data
    },
    fetchAll: async () => {
        const { data } = await httpService.get(productEndpoint)
        return data
    }
}

export default productService
