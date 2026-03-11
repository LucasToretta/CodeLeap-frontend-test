import * as S from './styles'

type DeleteModalProps = {
    onCancel: () => void
    onConfirm: () => void
}

export function DeleteModal({ onCancel, onConfirm }: DeleteModalProps) {
    return (
        <S.Overlay>
            <S.Container>
                <S.Title>Are you sure you want to delete this item?</S.Title>

                <S.Actions>
                    <S.CancelButton type="button" onClick={onCancel}>
                        Cancel
                    </S.CancelButton>

                    <S.DeleteButton type="button" onClick={onConfirm}>
                        Delete
                    </S.DeleteButton>
                </S.Actions>
            </S.Container>
        </S.Overlay>
    )
}