export interface Cart {
    id: number,
    date: string,
    products: {
        productId: number,
        quantity: number
    }[]
}
