import React from "react";
import './Cart.css'
import Form from "./Form";
import Table from "./Table";



class Cart extends React.Component {
state={
    characters:[]
}
removeCharacter =index=>{
    const{characters}=this.state

    this.setState({
        characters:characters.filter((character,i)=>{
            return i!==index
        })
    })
}
hendleSubmit =(character)=>{
    this.setState({characters:[...this.state.characters,character]})
}

    render(){
        const{characters}=this.state
    return(
        <div containerCard>
           

<h3>Add New</h3>
<Form hendleSubmit={this.hendleSubmit}/>
<Table
characterData={characters}
removeCharacter={this.removeCharacter}
/>
        </div>
    )
}}

export default Cart;