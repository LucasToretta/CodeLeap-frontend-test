import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 16px;
    `

export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 24px;

    @media (max-width: 768px) {
        padding: 20px 16px;
    }
    `

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 16px;
    }
    `

export const Label = styled.label`
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
    `

export const Input = styled.input`
    width: 100%;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 0 12px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(118, 149, 236, 0.15);
    }
    `

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    `

export const Button = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 7px 24px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    transition:
        transform 0.2s ease,
        opacity 0.2s ease,
        filter 0.2s ease;

    &:hover:not(:disabled) {
        transform: translateY(-1px);
        filter: brightness(1.03);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        background: ${({ theme }) => theme.colors.disabled};
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
    `