import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinningLogo = styled('img')`
  animation: ${spin} 2s linear infinite;
  width: 80px;
  height: 80px;
`;