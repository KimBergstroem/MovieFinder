import styled from "styled-components";

// Movie List Component Styling -------------------------------->
export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.md};
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

// Movie Card Component Styling -------------------------------->

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const MovieTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ReleaseDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;
