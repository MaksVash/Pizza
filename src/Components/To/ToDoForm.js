import React from "react";



class ToDoForm  extends React.Component {
  constructor(props){
    super(props);
this.  initialState = {
  name: '',
  age: '',
  im:'',
}
this.state =this.initialState
  }

   hendleChange = (event) => {
    const { name, value} = event.target
    this.setState({ [name]: value} )
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  onFormSumbit=(event)=>{
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    }
render(){
 const { name, age,im } = this.state
  return (
    <form onSubmit={this.onFormSumbit}>
       <label htmlFor="im">IM</label>
      <input
        type="text"
        name="im"
        id="im"
        value={im}
        onChange={this.hendleChange} />
      
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={this.hendleChange} />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        name="age"
        id="age"
        value={age}
        onChange={this.hendleChange} />
      <input type='button' value='Submit' onClick={this.submitForm} />
    </form>
  );
}
}
export default ToDoForm;