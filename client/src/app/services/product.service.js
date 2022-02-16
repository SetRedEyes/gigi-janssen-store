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
    },
    removeProduct: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId)
        return data
    },
    updateProduct: async (payload) => {
        const { data } = await httpService.patch(
            productEndpoint + payload._id,
            payload
        )
        return data
    }
}

export default productService
