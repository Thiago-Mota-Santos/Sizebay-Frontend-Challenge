import { useEffect, useState } from "react";

export default function useLocalStorage(key: string){
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key)!);
    })

    const doneKey = key + "_done";
    const [doneValue, setDoneValue] = useState<string[]>(() => {
        const storedData = localStorage.getItem(doneKey);
        return storedData ? JSON.parse(storedData) : [];
    });
    const updateLocalStorage = (key: string, data: string[]) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    useEffect(() => {
        updateLocalStorage(key, value);
        updateLocalStorage(doneKey, doneValue);
    },[value, doneValue, key, doneKey])

    const remove = (index: number, selectedButton = "pending") => {
        if(selectedButton === "pending") {
            setValue((current: string[]) => {
                const newState = [...current]
                newState.splice(index, 1)
                return newState
            })
            return 
        }
        setDoneValue((current: string[]) => {
            const newState = [...current];
            newState.splice(index, 1);
            return newState;
        });
    }

    const edit = (index: number, newValue: string) => {
        setValue((current: string[]) => {
            const newState = [...current]
            newState[index] = newValue
            return newState
        })
    }

    const complete = (index: number) => {
        const task = value[index];
        setDoneValue((current: string[]) => [...current, task]);
        remove(index);
    };

    return [value, doneValue,  setValue, { remove, edit, complete }]
}