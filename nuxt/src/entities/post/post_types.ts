import type { IUser } from "../user/user_types";

export interface IPost {
    id: number,
    title: string,
    description: string,
    images: string[],
    type: string,
    min_price: number,
    max_price: number,
    user: IUser,
    rating: number,
    feedbacks_number: number,
}