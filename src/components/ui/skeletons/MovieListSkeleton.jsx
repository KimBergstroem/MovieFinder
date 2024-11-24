import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkeletonItem = styled.div`
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  height: 300px;
  width: 100%;
`;

function MovieListSkeleton() {
  return (
    <SkeletonContainer>
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </SkeletonContainer>
  );
}

export default MovieListSkeleton;
