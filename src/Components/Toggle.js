import React from "react";
import './../App.css'

/* class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() { */
function  Toggle(props) {

      return (
        <button onClick={props.handleClick}>
          <div className= {` ${"container"}  ${props.isToggleOn ?"change" : ''}`}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
        </button>
      );
    }
  
  export default Toggle;