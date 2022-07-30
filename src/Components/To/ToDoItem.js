import React from "react";
import Item from "./Item";



const ToDoItem = (props) => {
    return (
        <ul>
            <Item charactersData={props.charactersData} removeCharacters={props.removeCharacters}/>
        </ul>
    )
}
export default ToDoItem;