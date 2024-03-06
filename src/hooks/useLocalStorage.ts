import { useEffect, useState } from "react";

export default function useLocalStorage(key: string){
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key)!);
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value, key])

    const remove = (index: number) => {
        setValue((current: string[]) => {
            const newState = [...current]
            newState.splice(index, 1)
            return newState
        })
    }

    const edit = (index: number, newValue: string) => {
        setValue((current: string[]) => {
            const newState = [...current]
            newState[index] = newValue
            return newState
        })
    }

    const complete = (index: number) => {
        setValue((current: string[]) => {
            const newState = current.map((item, i) => {
                if (i === index) {
                    return { text: item, status: "done" };
                }
                return item;
            });
            return newState;
        })
    }

    return [value, setValue, { remove, edit, complete }]
}