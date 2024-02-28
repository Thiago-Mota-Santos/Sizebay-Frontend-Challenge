import { PlusCircle, Search } from "lucide-react";
import Progress from "../progress";
import {  AddContainer, Container, DateHeader, Header, Input, SearchContainer, StatusSpan } from "./styles";
import { Icon } from "../icon";
import List from "../list";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FormEvent, useState } from "react";

export default function Card() {
    const [inputValue, setInputValue] = useState<string>("")
    const [value, setValue] = useLocalStorage("items")
    
   

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setValue([...value, inputValue]);
            setInputValue(""); 
        }
    };
    
    return (
        <Container>
            <Header> 
                 <DateHeader>
                    <span>07</span>
                      <div>
                        <span>JUL</span>
                        <span>2021</span>
                    </div>
                 </DateHeader>
                 <span>Wednesday</span>    
            </Header>
            <Progress value={30} />
            <SearchContainer>
                <StatusSpan>Done</StatusSpan>
                <StatusSpan variant="pending" >Pending</StatusSpan>
                <Input width="450px" type="text" placeholder="Search itens"  />
                <Icon right="148px" icon={Search}  color="#848484"/>
            </SearchContainer>
            <AddContainer>
                <form onSubmit={handleSubmit}>
                  <Input 
                  width="82.5%" 
                  type="text" 
                  placeholder="Add new item..."
                  onChange={(e) => setInputValue(e.target.value)}
                />
                 <button type="submit">
                  <Icon right="94px" icon={PlusCircle}  color="#848484"/>
                </button>
                </form>
            </AddContainer>
            <List list={value} />
        </Container>
    )
}