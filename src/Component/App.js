import React from "react";
import DisplayValue from "./DisplayValue";
import "./App.css";

import Button from "./Button";
import "./ButtonSet.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  addDecimal = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: this.state.previousNumber + "." });
    this.state.operator = "decimal";

      if (this.state.input.indexOf(".") === -1) {
        this.setState({ input: this.state.input + "." })
        
      }
      else if (this.state.previousNumber.includes(".")) {

        this.setState({ input: this.state.previousNumber });
      
      }

   ;
  }
  
  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  addition = () => {
    this.state.previousNumber = this.state.input; 
    this.setState({ input: "" });
    this.state.operator = "plus";

    
  };

  subtraction = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "sub";


  };

  multiplication = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "multiply";


  };

  division = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: ""  });
    this.state.operator = "divide";
  };


  percentage = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" })
    this.state.operator = "percentage";

    if (this.state.operator === "percentage") {
      this.setState({
        input: parseInt(this.state.previousNumber) / 100
      })

    }

  }




  evaluate = () => {
    this.state.currentNumber = this.state.input;

   
    if (this.state.operator === "plus") {  
      this.setState({
        input: 
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "sub") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });


    }
  }

  render() {
    return (
      <div className="component-app">
        <DisplayValue value={this.state.input || "0"}>{this.props.children}</DisplayValue>

        <div className="component-button-set">

          <div>
            <Button name="(" handleClick={this.addToInput} > (</Button>
            <Button name="AC" handleClick={this.clearInput}>AC</Button>
            <Button name=")" handleClick={this.addToInput}>)</Button>
            <Button name="÷" handleClick={this.division} blue>÷</Button>
          </div>
          <div>
            <Button name="7" handleClick={this.addToInput}>7</Button>
            <Button name="8" handleClick={this.addToInput}>8</Button>
            <Button name="9" handleClick={this.addToInput}>9</Button>
            <Button name="x" handleClick={this.multiplication} blue >x</Button>
          </div>
          <div>
            <Button name="4" handleClick={this.addToInput}>4</Button>
            <Button name="5" handleClick={this.addToInput}>5</Button>
            <Button name="6" handleClick={this.addToInput} >6</Button>
            <Button name="-" handleClick={this.subtraction} blue >-</Button>
          </div>
          <div>
            <Button name="1" handleClick={this.addToInput} >1</Button>
            <Button name="2" handleClick={this.addToInput} >2</Button>
            <Button name="3" handleClick={this.addToInput} >3</Button>
            <Button name="+" handleClick={this.addition} blue >+</Button>
          </div>
          <div>
            <Button name="%" handleClick={this.percentage} >%</Button>
            <Button name="0" handleClick={this.addZeroToInput} >0</Button>
            <Button name="." handleClick={this.addDecimal} >.</Button>
            <Button name="=" handleClick={this.evaluate} blue >=</Button>
          </div>

        </div>
      </div>
    );

  }
}



