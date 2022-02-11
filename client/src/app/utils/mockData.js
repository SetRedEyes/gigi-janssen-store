import httpService from "../services/http.service"
import categories from "../mockData/categories.json"
import products from "../mockData/products.json"
import companies from "../mockData/companies.json"

const useMockData = () => {
    async function initialize() {
        try {
            for (const cat of categories) {
                await httpService.put("category/" + cat._id, cat)
            }

            for (const product of products) {
                await httpService.put("product/" + product._id, product)
            }

            for (const company of companies) {
                await httpService.put("company/" + company._id, company)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return { initialize }
}
export default useMockData
