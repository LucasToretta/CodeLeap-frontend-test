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
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 24px;
    }
    `

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
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

export const DeleteButton = styled.button`
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    padding: 7px 24px;
    font-size: 16px;
    font-weight: 700;
    transition:
        transform 0.2s ease,
        filter 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        filter: brightness(1.03);
    }

    &:active {
        transform: translateY(0);
    }
    `