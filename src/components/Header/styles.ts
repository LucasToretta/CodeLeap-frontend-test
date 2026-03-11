import styled from 'styled-components'

export const Container = styled.header`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 27px 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 768px) {
        padding: 20px 16px;
    }
    `

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 20px;
    }
    `

export const LogoutButton = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 700;
    transition:
        transform 0.2s ease,
        opacity 0.2s ease,
        background-color 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 13px;
    }
    `