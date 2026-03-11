import * as S from './styles'

type EditModalProps = {
    title: string
    content: string
    onTitleChange: (value: string) => void
    onContentChange: (value: string) => void
    onCancel: () => void
    onSave: () => void
}

export function EditModal({
    title,
    content,
    onTitleChange,
    onContentChange,
    onCancel,
    onSave,
}: EditModalProps) {
    const isDisabled = !title.trim() || !content.trim()

    return (
        <S.Overlay>
            <S.Container>
                <S.Title>Edit item</S.Title>

                <S.Label htmlFor="edit-title">Title</S.Label>
                <S.Input
                    id="edit-title"
                    type="text"
                    value={title}
                    onChange={(event) => onTitleChange(event.target.value)}
                />

                <S.Label htmlFor="edit-content">Content</S.Label>
                <S.TextArea
                    id="edit-content"
                    value={content}
                    onChange={(event) => onContentChange(event.target.value)}
                />

                <S.Actions>
                    <S.CancelButton type="button" onClick={onCancel}>
                        Cancel
                    </S.CancelButton>

                    <S.SaveButton type="button" onClick={onSave} disabled={isDisabled}>
                        Save
                    </S.SaveButton>
                </S.Actions>
            </S.Container>
        </S.Overlay>
    )
}