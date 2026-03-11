import * as S from './styles'

type CreatePostFormProps = {
    title: string
    content: string
    onTitleChange: (value: string) => void
    onContentChange: (value: string) => void
    onCreate: () => void
}

export function CreatePostForm({
    title,
    content,
    onTitleChange,
    onContentChange,
    onCreate,
}: CreatePostFormProps) {
    const isDisabled = !title.trim() || !content.trim()

    return (
        <S.Container>
            <S.Title>What’s on your mind?</S.Title>

            <S.Label htmlFor="post-title">Title</S.Label>
            <S.Input
                id="post-title"
                type="text"
                placeholder="Hello world"
                value={title}
                onChange={(event) => onTitleChange(event.target.value)}
            />

            <S.Label htmlFor="post-content">Content</S.Label>
            <S.TextArea
                id="post-content"
                placeholder="Content here"
                value={content}
                onChange={(event) => onContentChange(event.target.value)}
            />

            <S.ButtonWrapper>
                <S.Button type="button" onClick={onCreate} disabled={isDisabled}>
                    CREATE
                </S.Button>
            </S.ButtonWrapper>
        </S.Container>
    )
}