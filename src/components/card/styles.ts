import { Search } from "lucide-react";
import { css, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 800px;
  height: 650px;
  box-shadow: 0px 3px 6px #00000029
  border-radius: 4px;
  background-color: var(--white);
`

export const Header = styled.header`
   display: flex;
   padding: 64px;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 10vh;

  > span {
    font: normal normal normal 24px/32px Roboto;
    letter-spacing: 0px;
    color: #848484;
    opacity: 1;
}
`

export const DateHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  > span:first-child {
    font-size: 68px;
    color: #848484;
    font: normal normal medium 60px/79px Roboto;
    opacity: 1;
    letter-spacing: 0px;
} 


 >div {
  display: flex;
  flex-direction: column;
  margin-left: 4px;

   span:first-child {
    color: #848484;
    font: normal normal normal 24px/32px Roboto;
    letter-spacing: 0px;
  }
  span:last-child {
    color: #848484;
    font: normal normal 300 24px/32px Roboto;
    letter-spacing: 0px;
  }

  
 }

 
`
const StatusSpanBase = css`
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  height: 32px;
  opacity: 1;
  background: #ffffff;
`;

export const StatusSpanPending = css`
  ${StatusSpanBase}
  width: 84px;
`;

export const StatusSpan = styled.span<{ variant?: 'pending'}>`
  ${StatusSpanBase}

  ${({ variant }) => variant === "pending" && StatusSpanPending}
`;

export const DoneSpan = styled(StatusSpan)``;
export const PendingSpan = styled(StatusSpan)``;

export const SearchContainer = styled.div`
    position: relative;
    margin-left: 108px;
    display: flex;
    margin-top: 16px;
    width: 100%;
    gap: 4px;

`

export const Input = styled.input`
  padding-right: 30px;
  border: 1px solid #DBDBDB;
  padding: 8px;
  border-radius: 4px;
  width: 450px;
  height: 40px;
  margin-left: 60px;
  color: #848484;

  &::placeholder {
    color: black;
  }
`

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  right: 146px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const Button = styled.button`
  
`




