export function calcTotalPrice(items) {
    return items.reduce((acc, product) => acc + product.price, 0)
}
