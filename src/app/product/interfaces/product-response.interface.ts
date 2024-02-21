
import { Product } from "./product.interface";

export interface ProductResponse {
    ok: boolean,
    products: Product[],
}