import { Search } from "lucide-react";
import Progress from "../progress";
import { Button, Container, DateHeader, DoneSpan, Header, Input, PendingSpan, SearchContainer, SearchIcon, StatusSpan } from "./styles";

export default function Card() {
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
                <Input type="text" placeholder="Search itens"  />
                <SearchIcon color="#848484"/>
            </SearchContainer>
            <Button>Add new item</Button> {/* TODO: add plus icon */}
        </Container>
    )
}