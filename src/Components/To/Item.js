
import React from "react";
let list=
    {name:'Maks',age:35}


const Item = (props) => {
    const rows = props.charactersData.map((row, index) => {
        return (
            <div key={index}>
                <img src={row.im}/>
                <div>{row.name}</div>
                <div>{row.age}</div>
                <div>
                    <button onClick={() => props.removeCharacters(index)}>DELETE</button>
                </div>
                
            </div>
        )
    })
    return (
        <div>{rows}</div>

    )
}

export default Item;