export interface IPost {
    id: number,
    title: string,
    description: string,
    images: string[],
    type: string,
    min_price: number,
    max_price: number,
    rating: number,
    number_reviews: number
}