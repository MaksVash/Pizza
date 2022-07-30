import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";



const ToDo = () => {
    const [taxt, setText] = useState({ characters: [] })


    const { characters } = taxt
    const removeCharacters = (index) => {
        setText({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    const handleSubmit = (character) => {
        setText({ characters: [...characters, character] })
    }

    return (
        <div>
            <ToDoItem charactersData={characters} removeCharacters={removeCharacters} />
            <ToDoForm handleSubmit={handleSubmit} />

        </div>
    )
}
export default ToDo;