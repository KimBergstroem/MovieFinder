import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const GenreButton = styled.button`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.border};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing.sm});
  max-width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (min-width: 701px) {
    flex: 0 0 auto;
  }
`;

export const YearDropdown = styled.select`
  background-color: ${({ theme }) => theme.colors.border};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing.sm});
  max-width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (min-width: 701px) {
    flex: 0 0 auto;
  }
`;
