import { CheckCircle2, MinusCircle } from "lucide-react";
import { ButtonContainer, Container, IconButton, TodoItem, TodoText, Tooltip, Text } from "./styles";
import { ReactNode, useEffect, useRef, useState } from "react";

type ListProps = {
   list: string[];
   remove: (index: number, selectedButton: "pending" | "done") => void;
   edit: (index: number, newValue: string) => void;
   complete: (index: number) => void;
   selectedButton: "pending" | "done";
};

type TodoItemWithTooltipProps = {
   children: ReactNode;
   tooltipContent: string;
   onEdit: (index: number, newValue: string) => void;
   onDelete: (index: number) => void;
   onComplete: (index: number) => void;
   index: number; 
   selectedButton: "pending" | "done";
};

const TodoItemWithTooltip = ({ children, tooltipContent, onEdit, onDelete, index, selectedButton, onComplete }: TodoItemWithTooltipProps) => {
   const [showTooltip, setShowTooltip] = useState(false);
   const [editable, setEditable] = useState(false);
   const textRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (textRef.current && !textRef.current.contains(event.target as Node)) {
            setEditable(false);
            const content = textRef.current.textContent || "";
            if (content.trim() === "") {
               onDelete(index); 
            } else {
               onEdit(index, content);
            }
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [index, onEdit, onDelete]);

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
      setShowTooltip(false); 
   };

   const handleBlur = () => {
      setEditable(false);
      const content = textRef.current?.textContent || "";
      if (content.trim() === "") {
         onDelete(index); 
      } else {
         onEdit(index, content); 
      }
   };

   const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
         setEditable(false);
         const content = textRef.current?.textContent || "";
         if (content.trim() === "") {
            onDelete(index); 
         } else {
            onEdit(index, content); 
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
            {selectedButton !== 'done' ? (
               <button>
                  <IconButton onClick={() => onComplete(index)}>
                     <CheckCircle2 />
                  </IconButton>
               </button>
            ) : null}
         </ButtonContainer>
      </TodoItem>
   );
};

export default function List({ list, remove, edit, complete, selectedButton }: ListProps) {
  
   const handleComplete = (index: number) => {
      complete(index);
   };

   if (!list) return null;

   const handleDelete = (index: number) => {
      remove(index, selectedButton);
   };

   const handleEdit = (index: number, newValue: string) => {
      edit(index, newValue);
   };

   return (
      <Container>
        {!list.length ? <Text>There are no items marked as done. <span>Clear the filter here</span> to see all items </Text> : null}
         {list.map((item, index) => (
            <TodoItemWithTooltip key={index} tooltipContent="Edit item" onEdit={handleEdit} onDelete={handleDelete} index={index} onComplete={handleComplete} selectedButton={selectedButton}>
               {item}
            </TodoItemWithTooltip>
         ))}
      </Container>
   );
}
