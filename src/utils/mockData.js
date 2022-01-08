import categories from "../mockData/categories.json"
import products from "../mockData/products.json"
import httpService from "../services/http.service"
const useMockData = () => {
    async function initialize() {
        try {
            for (const cat of categories) {
                await httpService.put("category/" + cat._id, cat)
            }

            for (const product of products) {
                await httpService.put("product/" + product._id, product)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return { initialize }
}
export default useMockData
