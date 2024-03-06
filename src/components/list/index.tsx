import { CheckCircle2, MinusCircle } from "lucide-react";
import { ButtonContainer, Container, IconButton, TodoItem, TodoText, Tooltip } from "./styles";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type List = {
   list: string[];
   remove: (index: number) => void;
   edit: (index: number, newValue: string) => void;
};

type TodoItemWithTooltipProps = {
   children: ReactNode;
   tooltipContent: string;
   onEdit: (index: number, newValue: string) => void;
   onDelete: (index: number) => void;
   index: number; 
};

const TodoItemWithTooltip = ({ children, tooltipContent, onEdit, onDelete, index }: TodoItemWithTooltipProps) => {
   const [showTooltip, setShowTooltip] = useState(false);
   const [editable, setEditable] = useState(false);
   const [content, setContent] = useState(children as string); // Estado para armazenar o conteúdo atual do TodoItem

   const textRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (textRef.current && !textRef.current.contains(event.target as Node)) {
            setEditable(false);
            if (content.trim() === "") {
               onDelete(index); // Chama onDelete se o conteúdo estiver vazio
            } else {
               onEdit(index, content); // Chama onEdit com o novo valor do conteúdo
            }
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [index, onEdit, content, onDelete]);

   const handleMouseEnter = () => {
      if (!editable) {
         setShowTooltip(true);
      }
   };

   const handleMouseLeave = () => {
      setShowTooltip(false);
   };

   const handleEditable = () => {
      setEditable(true);
      setShowTooltip(false); // Oculta o tooltip quando começar a edição
   };

   const handleBlur = () => {
      setEditable(false);
      if (content.trim() === "") {
         onDelete(index); // Chama onDelete se o conteúdo estiver vazio
      } else {
         onEdit(index, content); // Chama onEdit com o novo valor do conteúdo
      }
   };

   const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
         setEditable(false);
         if (content.trim() === "") {
            onDelete(index); // Chama onDelete se o conteúdo estiver vazio
         } else {
            onEdit(index, content); // Chama onEdit com o novo valor do conteúdo
         }
      }
   };

   return (
      <TodoItem
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <TodoText
         ref={textRef}
         onClick={handleEditable}
         onBlur={handleBlur}
         onKeyDown={handleKeyPress}
         contentEditable={editable}
         suppressContentEditableWarning 
         onInput={(e) => setContent(e.currentTarget.textContent || "")} 
>
            {children}
         </TodoText>
         {showTooltip && (
            <Tooltip>
               {tooltipContent}
            </Tooltip>
         )}
         <ButtonContainer>
            <button onClick={() => onDelete(index)}>
               <IconButton>
                  <MinusCircle />
               </IconButton>
            </button>
            <button>
               <IconButton>
                  <CheckCircle2 />
               </IconButton>
            </button>
         </ButtonContainer>
      </TodoItem>
   );
};

export default function List({ list, remove, edit }: List) {
   if (!list) return null;

   const handleDelete = (index: number) => {
      remove(index);
   };

   const handleEdit = (index: number, newValue: string) => {
      edit(index, newValue);
   };

   return (
      <Container>
         {list.map((item, index) => (
            <TodoItemWithTooltip key={index} tooltipContent="Edit item" onEdit={handleEdit} onDelete={handleDelete} index={index}>
               {item}
            </TodoItemWithTooltip>
         ))}
      </Container>
   );
}
