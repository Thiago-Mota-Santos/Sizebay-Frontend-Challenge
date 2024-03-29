import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    gap: 8px;
    width: 100%;
    overflow: auto;
    color: #848484;
}
`;

export const TodoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8px;
    background-color: #F4F4F4;
    border: 1px solid #DBDBDB;
    width: 82.5%;
    font: normal normal normal 14px/19px Roboto;
    color: #848484;
    margin-left: 60px;
    position: relative;
    min-height: 40px;
    outline: none;

    &:hover {
        background: #FFFFFF;
        > div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const TodoText = styled.span`
    max-width: calc(100% - 120px); 
    overflow: hidden;
    text-overflow: ellipsis;
    color: #848484;
    border: none; 
    outline: none; 
    
    &:focus {
      outline: none; 
    }
`;

export const Tooltip = styled.div`
   z-index: 2;
   position: fixed;
   background-color: #848484;
   color: #ffffff;
   padding: 4px 8px;
   border-radius: 4px;
   font-size: 14px;
   opacity: 1;
   transition: opacity 0.3s ease;
   pointer-events: none;
   margin-top: 76px;

   &::before {
      content: '';
      position: absolute;
      top: -6px;
      left: calc(50% - 6px);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #848484;
   }
`;

export const ButtonContainer = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;

    > button:first-child {
        width: 40px;
        height: 40px;
        background: #E34F4F;
    }

    > button:last-child {
       border-radius: 0px 4px 4px 0px;
       width: 40px;
       height: 40px;
       background: #5DE290;
    }

`;

export const Text = styled.span`
    margin-left: 62px;
    color: #848484;
    font: normal normal normal 14px/19px Roboto;

    >span {
        text-decoration: underline;
        color: #848484;

        &:hover {
         cursor: pointer;
        }

    }
`

export const IconButton = styled.div`
    margin-top: 4px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease; 

     > button:first-child {
        width: 40px;
        height: 40px;
        background: #E34F4F;
    }

    > button:last-child {
       border-radius: 0px 4px 4px 0px;
       width: 40px;
       height: 40px;
       background: #5DE290;
    }

    &:hover {
        transform: scale(1.1); 
    }

    &:active {
        transform: scale(0.9); 
    }
`;

