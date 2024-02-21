import { User } from "src/app/auth/interfaces/user.interface";

export interface Product {
    _id: string,
    date_at: string,
    image: string,
    price: number,
    message: string,
    title: string,
    user?: User
}