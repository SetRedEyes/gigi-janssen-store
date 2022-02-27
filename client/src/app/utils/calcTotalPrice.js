export function calcTotalPrice(items) {
    return items.reduce((acc, product) => acc + product.price * product.count, 0)
}
