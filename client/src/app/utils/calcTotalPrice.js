export function calcTotalPrice(items) {
    return items.reduce((acc, product) => acc + product.totalPrice, 0)
}
