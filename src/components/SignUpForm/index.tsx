import * as S from './styles'

type SignUpFormProps = {
    username: string
    onUsernameChange: (value: string) => void
    onEnter: () => void
}

export function SignUpForm({
    username,
    onUsernameChange,
    onEnter,
}: SignUpFormProps) {
    const isDisabled = !username.trim()

    return (
        <S.Wrapper>
            <S.Card>
                <S.Title>Welcome to CodeLeap network!</S.Title>

                <S.Label htmlFor="username">Please enter your username</S.Label>

                <S.Input
                    id="username"
                    type="text"
                    placeholder="John doe"
                    value={username}
                    onChange={(event) => onUsernameChange(event.target.value)}
                />

                <S.ButtonWrapper>
                    <S.Button type="button" onClick={onEnter} disabled={isDisabled}>
                        ENTER
                    </S.Button>
                </S.ButtonWrapper>
            </S.Card>
        </S.Wrapper>
    )
}