import { Check, PlusCircle, Search } from "lucide-react";
import Progress from "../progress";
import {
    AddContainer,
    Container,
    DateHeader,
    Header,
    Input,
    SearchContainer,
    StatusButton,
    Text
} from "./styles";
import { Icon } from "../icon";
import List from "../list";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FormEvent, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Confetti from 'react-confetti'
import { dayOfWeek, month, year } from "../../utils/date";

export default function Card() {
    const { width, height } = useWindowSize()
    const [inputValue, setInputValue] = useState<string>("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [value, doneValue, setValue, { remove, edit, complete }] = useLocalStorage("items");
    const [selectedButton, setSelectedButton] = useState<string | null>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    
    const completionPercentage: number = (doneValue.length / (value.length + doneValue.length)) * 100;
    
   
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
        setSearchTerm(term);
    };

    const filteredList = (list: string[]) => {
        return list.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };


    useEffect(() => {
        if (completionPercentage === 100) {
          setShowConfetti(true);
          
          const timer = setTimeout(() => {
            setShowConfetti(false);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [completionPercentage]);

    return (
        <Container>
            <Header> 
                <DateHeader>
                    <span>{dayOfWeek}</span>
                    <div>
                        <span>{month}</span>
                        <span>{year}</span>
                    </div>
                </DateHeader>
                <span>Wednesday</span>    
            </Header>
            {showConfetti ? <Confetti width={width} height={height}/> : null}
            <Progress value={completionPercentage} />
            <SearchContainer>
    <div>
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
    </div>
    <div>
        <Input 
            width={window.innerWidth <= 600 ? '300px' : '450px'}
            type="text" 
            placeholder="Search itens" 
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)} 
        />
        <Icon right={window.innerWidth <= 600 ? '12px' : '148px'} icon={Search}  color="#848484"/>
    </div>
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
                        <Icon right={window.innerWidth <= 600 ? '10px' : '94px'} top="50%" icon={PlusCircle}  color="#848484"/>
                    </button>
                </form>
            </AddContainer>
            {selectedButton === 'done' ? (
                <List list={filteredList(doneValue)} remove={remove} edit={edit} complete={complete} selectedButton="done" setSelectButton={setSelectedButton} />
            ) : (
                <List list={filteredList(value)} remove={remove} edit={edit} complete={complete} selectedButton="pending" setSelectButton={setSelectedButton}/>
            )}
            {
                filteredList(selectedButton === 'done' ? doneValue : value).length === 0 && searchTerm.trim() !== "" && (
                    <Text>
                        Your search found no results.
                        <button onClick={() => setSearchTerm('')}>
                            <span>Clear the search here </span>
                        </button>{" "}
                        to see all items
                    </Text>
                )
            }
        </Container>
    )
}
