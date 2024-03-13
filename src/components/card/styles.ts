import { Search } from "lucide-react";
import { css, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 800px;
  height: 650px;
  max-width: 100%;
  box-shadow: 0px 3px 6px #00000029
  border-radius: 4px;
  background-color: var(--white);

  @media screen and (max-width: 600px) {
    width: 341px;
  }
  
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

export const StatusButton = styled.button<{ variant?: 'pending', active?: boolean}>`
    ${StatusSpanBase}

    ${({ variant }) => variant === "pending" && StatusSpanPending}

    ${({ active }) => active ? css`
    border: 1px solid #4DA6B3;
    color: #4DA6B3;
  ` : ''}


    padding: 0 8px; 
    margin-right: 8px; 

    @media screen and (max-width: 600px) {
     // enter here
  }
`;

export const DoneSpan = styled(StatusButton)``;
export const PendingSpan = styled(StatusButton)``;

export const SearchContainer = styled.div`
    position: relative;
    margin-left: 108px;
    display: flex;
    margin-top: 16px;
    width: 100%;
    gap: 4px;

    > div {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-end;
        margin-left: -30px;

        > div:first-child {
            order: 2;
            margin-top: 4px;
            margin-bottom: 2px; 
        }
    }
`;


export const Input = styled.input<{ width?: string}>`
  padding-right: 30px;
  border: 1px solid #DBDBDB;
  padding: 8px;
  border-radius: 4px;
  ${({ width }) => width && `width: ${width};`}
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

export const AddContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 16px;
  width: 100%;
  gap: 4px;

  > form {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 356px;
    margin-right: 62px;
  }
`;


export const Text = styled.span`
    margin-top: 16px;
    margin-right: 260px;
    color: #848484;
    font: normal normal normal 14px/19px Roboto;

    span {
        text-decoration: underline;
        color: #848484;

        &:hover {
         cursor: pointer;
        }

    }
`

export const Button = styled.button`
  
`




