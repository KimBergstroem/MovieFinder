import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const LoaderCircle = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.border};
  border-top: 16px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

function FullScreenLoader() {
  return (
    <LoaderContainer>
      <LoaderCircle />
    </LoaderContainer>
  );
}

export default FullScreenLoader;
