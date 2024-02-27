import { Button, Container, DateHeader, Header, Input, Progress, SearchContainer } from "./styles";

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
            <Progress className="progress-bar">...</Progress>
            <SearchContainer>
                <span>Done</span>
                <span>Pending</span>
                <Input type="text" placeholder="Search itens"  /> TODO: add search icon
            </SearchContainer>
            <Button>Add new item</Button> {/* TODO: add plus icon */}
        </Container>
    )
}