import styled from "styled-components";

export const StyledProgressBar = styled.div`
  position: relative;
  height: 24px; 
  width: 85%;
  overflow: hidden;
  border-radius: 4px;
  background-color: #ccc;
`;

export const StyledProgressIndicator = styled.div<{ $value?: number }>`
  position: absolute;
  height: 100%;
  width: ${({ $value }) => $value ? `${$value}%` : '0%'};
  background-color: #5DE290;
  transition: width 0.3s ease-in-out;
`;


