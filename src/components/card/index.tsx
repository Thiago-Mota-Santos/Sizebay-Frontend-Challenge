import { Check, PlusCircle, Search } from "lucide-react";
import Progress from "../progress";
import {
    AddContainer,
    Container,
    DateHeader,
    Header,
    Input,
    SearchContainer,
    StatusButton
} from "./styles";
import { Icon } from "../icon";
import List from "../list";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FormEvent, useState } from "react";

export default function Card() {
    const [inputValue, setInputValue] = useState<string>("")
    const [ value, doneValue, setValue, { remove, edit, complete }] = useLocalStorage("items")
    const [selectedButton, setSelectedButton] = useState<string | null>("pending");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setValue([...value, inputValue]);
            setInputValue(""); 
        }
    };

    const handleButtonClick = (status: string) => {
        setSelectedButton(status);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

    const filteredList = (list: string[]) => {
        return list.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
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
                <StatusButton 
                    onClick={() => handleButtonClick('done')} 
                    active={selectedButton === 'done'}
                >
                    {selectedButton === 'done' ? <Check size={12} color="#4DA6B3"/>: null}
                    Done
                </StatusButton>

                <StatusButton 
                    variant="pending" 
                    onClick={() => handleButtonClick('pending')} 
                    active={selectedButton === 'pending'}
                >   
                    {selectedButton === 'pending' ? <Check size={12} color="#4DA6B3"/>: null}
                    Pending
                </StatusButton>
                <Input 
                   width="450px" 
                   type="text" 
                   placeholder="Search itens" 
                   value={searchTerm}
                   onChange={(e) => handleSearch(e.target.value)} 
                />
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
            {selectedButton === 'done' ? (
                <List list={filteredList(doneValue)} remove={remove} edit={edit} complete={complete} selectedButton="done" />
            ) : (
                <List list={filteredList(value)} remove={remove} edit={edit} complete={complete} selectedButton="pending" />
            )}
        </Container>
    )
}
