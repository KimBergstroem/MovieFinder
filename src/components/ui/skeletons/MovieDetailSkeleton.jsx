import styled from "styled-components";

const SkeletonContainer = styled.div`
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

const SkeletonImage = styled.div`
  width: 300px;
  height: 450px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 20px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const SkeletonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function MovieDetailSkeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonInfo>
        <SkeletonText style={{ width: "60%" }} />
        <SkeletonText style={{ width: "40%" }} />
        <SkeletonText style={{ width: "80%" }} />
        <SkeletonText style={{ width: "70%" }} />
        <SkeletonText style={{ width: "50%" }} />
      </SkeletonInfo>
    </SkeletonContainer>
  );
}

export default MovieDetailSkeleton;
