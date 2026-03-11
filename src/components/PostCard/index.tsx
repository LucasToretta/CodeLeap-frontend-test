import type { Post } from '../../types/post'
import { formatPostDate } from '../../utils/formatDate'
import * as S from './styles'

type PostCardProps = {
    post: Post
    isOwner: boolean
    onDelete: (post: Post) => void
    onEdit: (post: Post) => void
}

export function PostCard({
    post,
    isOwner,
    onDelete,
    onEdit,
}: PostCardProps) {
    return (
        <S.Container>
            <S.Header>
                <S.Title>{post.title}</S.Title>

                {isOwner && (
                    <S.Actions>
                        <S.IconButton type="button" onClick={() => onDelete(post)}>
                            🗑
                        </S.IconButton>
                        <S.IconButton type="button" onClick={() => onEdit(post)}>
                            ✏️
                        </S.IconButton>
                    </S.Actions>
                )}
            </S.Header>

            <S.Content>
                <S.InfoRow>
                    <S.Username>@{post.username}</S.Username>
                    <S.Date>{formatPostDate(post.created_datetime)}</S.Date>
                </S.InfoRow>

                <S.Text>{post.content}</S.Text>
            </S.Content>
        </S.Container>
    )
}