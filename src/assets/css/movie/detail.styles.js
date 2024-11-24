import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const MovieTitle = styled.h1`
  margin: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2rem;
  text-align: center;
`;

export const MovieGenres = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MovieRating = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  &::after {
    content: " ★";
    color: gold;
    margin-left: 0.5rem;
  }
`;

export const MovieDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  text-align: left;
  line-height: 1.5;
`;

export const GenreBubble = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-right: ${({ theme }) => theme.spacing.xs};
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MovieDetailParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
  line-height: 1.5;
`;

export const MovieDetailSpan = styled.span`
  color: white;
  font-weight: bold;
`;
