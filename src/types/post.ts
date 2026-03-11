export type Post = {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}

export type CreatePostPayload = {
    username: string
    title: string
    content: string
}

export type UpdatePostPayload = {
    title: string
    content: string
}

export type PostsResponse = {
    count: number
    next: string | null
    previous: string | null
    results: Post[]
}