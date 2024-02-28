import { CheckCircle2, MinusCircle } from "lucide-react";
import {  ButtonContainer, Container, IconButton, TodoItem } from "./styles";

type List = {
   list: string[]
}

export default function List ({ list }: List){
   if(!list) return


   return (
    <Container>
        {list.map((item, index) => (
          <TodoItem key={index}>
            {item}       
             <ButtonContainer>
                  <button>
                     <IconButton>
                       <MinusCircle/>
                     </IconButton>
                  </button>
                  <button>
                     <IconButton>
                      <CheckCircle2/>
                     </IconButton>
                  </button>
             </ButtonContainer>     
          </TodoItem>
        ))}

    </Container>
   )
}