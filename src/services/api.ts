import type {
    CreatePostPayload,
    Post,
    PostsResponse,
    UpdatePostPayload,
} from '../types/post'

const BASE_URL = 'https://dev.codeleap.co.uk/careers/'

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(BASE_URL)

    if (!response.ok) {
        throw new Error('Erro ao buscar posts.')
    }

    const data: PostsResponse = await response.json()
    return data.results
}

export async function createPost(payload: CreatePostPayload): Promise<Post> {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        throw new Error('Erro ao criar post.')
    }

    return response.json()
}

export async function updatePost(
    id: number,
    payload: UpdatePostPayload,
): Promise<Post> {
    const response = await fetch(`${BASE_URL}${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        throw new Error('Erro ao editar post.')
    }

    return response.json()
}

export async function deletePost(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}${id}/`, {
        method: 'DELETE',
    })

    if (!response.ok) {
        throw new Error('Erro ao deletar post.')
    }
}