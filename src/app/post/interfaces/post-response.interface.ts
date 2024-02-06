import { Post } from "./post.interface";

export interface PostResponse {
    ok: boolean,
    posts: Post[],
}