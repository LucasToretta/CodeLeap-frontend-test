import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.colors.overlay};
    display: grid;
    place-items: center;
    padding: 16px;
    `

export const Container = styled.div`
    width: 100%;
    max-width: 660px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    padding: 24px;
    animation: fadeInUp 0.2s ease;

    @keyframes fadeInUp {
        from {
        opacity: 0;
        transform: translateY(6px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        padding: 20px 16px;
    }
    `

export const Title = styled.h2`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
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
    margin-bottom: 16px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(118, 149, 236, 0.15);
    }
    `

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 74px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 10px 12px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(118, 149, 236, 0.15);
    }
    `

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 16px;
    flex-wrap: wrap;
    `

export const CancelButton = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    padding: 7px 24px;
    font-size: 16px;
    font-weight: 700;
    transition:
        transform 0.2s ease,
        background-color 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        background: #f7f7f7;
    }

    &:active {
        transform: translateY(0);
    }
    `

export const SaveButton = styled.button`
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    padding: 7px 24px;
    font-size: 16px;
    font-weight: 700;
    transition:
        transform 0.2s ease,
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
    `