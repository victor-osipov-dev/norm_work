import type { IUser } from "../user/types";

export interface IOrder {
    id: number,
    title: string,
    description: string,
    min_price: number,
    max_price: number,
    files?: string[],
    user: IUser,
    number_feedbacks: number,
    is_viewed: boolean,
    is_favorite: boolean
}