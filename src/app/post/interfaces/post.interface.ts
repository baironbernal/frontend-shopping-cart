import { User } from "src/app/auth/interfaces/user.interface";

export interface Post {
    _id: string,
    date_at: string,
    message: string,
    title: string,
    user?: User
}