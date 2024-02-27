import { styled } from "styled-components";

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

export const Progress = styled.div`
  
`

export const SearchContainer = styled.div`
  > span {
    color: red;
  }
`

export const Input = styled.input`
  
`

export const Button = styled.button`
  
`




