import styled from "@emotion/styled";
import { THEME } from "../../../theme";
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SearchResultWrapper = styled.div`
  animation: ${slideIn} 0.5s forwards;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 400px;
    padding: 120px 20px;
    background-color: ${THEME.lightBackgroundColor};
`;