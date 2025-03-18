import type { IUser } from "../user/user_types";

export interface IFeedback {
    id: number,
    user: IUser,
    data: {
        id: number,
        text: string,
        estimation: number,
        files: string[],
        created_at: string
    }[],
}