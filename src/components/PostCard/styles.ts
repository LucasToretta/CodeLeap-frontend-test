import styled from 'styled-components'

export const Container = styled.article`
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 24px;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
    `

export const Header = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    @media (max-width: 768px) {
        padding: 16px;
    }
    `

export const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    word-break: break-word;

    @media (max-width: 768px) {
        font-size: 20px;
    }
    `

export const Actions = styled.div`
    display: flex;
    gap: 16px;
    flex-shrink: 0;
    `

export const IconButton = styled.button`
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    transition:
        transform 0.2s ease,
        opacity 0.2s ease;

    &:hover {
        transform: scale(1.08);
        opacity: 0.9;
    }

    &:active {
        transform: scale(1);
    }
    `

export const Content = styled.div`
    padding: 24px;

    @media (max-width: 768px) {
        padding: 16px;
    }
    `

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    flex-wrap: wrap;
    `

export const Username = styled.span``

export const Date = styled.span``

export const Text = styled.p`
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.5;
    `