import React, { Component } from 'react';
import InputTask from "./InputTask";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      editEnabled: false,
      inputTask: "",
      priority: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.prioritizeTask = this.prioritizeTask.bind(this);

  }

  handleChange(event) {
    //store value for input description and priority
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(){
    console.log("hello");
    this.setState({
      inputTask: this.state.inputTask,
      priority: this.state.priority
    });
    
    //print description in view todo card with correct priority
    //this.prioritizeTask();
  }

  prioritizeTask(){
    
    
    // const element = document.getElementById('select-priority');
    // var priority = (this.props.priority);
    // var description = (this.props.inputTask);


  }







  render() {
    
    return (
        <InputTask
          inputTask = {this.state.inputTask}
          handleChange = {this.handleChange}
          handleClick = {this.handleClick}
          priority={this.state.priority}
        />
      
      
      

    ); 
  }
}

export default App;