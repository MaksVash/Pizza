import { render } from "@testing-library/react";
import React from "react";
import './Cart.css'



class Form extends React.Component {
    constructor(props){
        super(props);
    
this.initialState={
    name:'',
    size:'',
    img:'',
}
this.state= this.initialState
    }
handleChenge=(event)=>{
    const{name,value}=event.target
    this.setState({[name]:value})
}
submitForm=()=>{
    this.props.hendleSubmit(this.state)
    this.setState(this.initialState)
}

onFormSumbit=(event)=>{
event.preventDefault()
this.props.handleSubmit(this.state)
this.setState(this.initialState)
}

    render(){
        const{name,size,img}=this.state
    return(
        <div className="form">
<form onSubmit={this.onFormSumbit}>

<label htmlFor="name">Img</label>
<input
type="text"
name="img"
id="img"
value={img}
onChange={this.handleChenge}
/>

<label htmlFor="name">Pizza</label>
<input
type="text"
name="name"
id="name"
value={name}
onChange={this.handleChenge}
/>


<label htmlFor="size">Sizz</label>
<input
type="text"
name="size"
id="size"
value={size}
onChange={this.handleChenge}
 />

<input type='button' value='Submit' onClick={this.submitForm}/>
</form>

        </div>
    )
}}

export default Form;