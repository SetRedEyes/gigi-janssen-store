export function calculateItemsQuantity(items) {
    return items.reduce((acc, product) => acc + +product.count, 0)
}
