import * as S from './styles'

type HeaderProps = {
    onLogout: () => void
}

export function Header({ onLogout }: HeaderProps) {
    return (
        <S.Container>
            <S.Title>CodeLeap Network</S.Title>

            <S.LogoutButton type="button" onClick={onLogout}>
                Logout
            </S.LogoutButton>
        </S.Container>
    )
}