import React, { Component } from 'react';
import InputTask from "./InputTask";
import Welcome from "./Welcome";
import Header from "./Header";
import PrioritizeTask from './PrioritizeTask';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        inputTask: "",
        priority: 0,
        editEnabled: false,
        taskCompleted: false
      },
      todoList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.checkbox = this.checkbox.bind(this);
    this.handleSave = this.handleSave.bind(this);

  }
  
  handleChange(event) {
    //store value for input description and priority
    //creates a deep copy of the object
    let copy = JSON.parse(JSON.stringify(this.state.todo));
    const {name, value} = event.target;
    copy[name] = value; 
    this.setState({
      todo: copy
    });

  }
  
  handleClick(){
    let arrCopy = this.state.todoList.concat(this.state.todo);
    this.setState({
      todoList: arrCopy
    });

  }

  setColor(priority){
    console.log(priority)

    if(priority == 1){
      return "list-group-item-success";
    }
    if(priority == 2){
      return "list-group-item-warning";
    }
    if(priority == 3){
      return "list-group-item-danger";
    }
    
  }

  editTask(i){
    console.log("edit button is clicked");
    //let arrCopy = this.state.todoList.concat(this.state.todo);
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
      
    this.setState({
      editEnabled: true,
      todoList: arrCopy
    });
    
  }
  
  deleteTask(i){
    console.log("delete button is clicked");
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
    console.log("i", i)
    arrCopy.splice(i,1);

    this.setState({
      todoList: arrCopy
    });
  
  }


  checkbox(){
    if(this.state.taskCompleted === true){
      console.log(completed);
    }else{
      console.log("this box was unchecked")
    }
  
  }
  
  handleSave(i){
    let arrCopy = this.state.todoList.concat(this.state.todo);
    this.setState({
      todoList: arrCopy
    });
  
  }
    


  render() {
    
    return (
      
      
      <div className="container my-4">

        <Header/>

        <div className="row">
        
        
        
        <div className="col-lg-4 col-md-4 mb-4">
          
        
          <InputTask
            inputTask = {this.state.todo.inputTask}
            handleChange = {this.handleChange}
            handleClick = {this.handleClick}
            priority={this.state.todo.priority}
            todoList = {this.state.todoList}
          />
        </div>

        <div className="col-lg-8 col-md-8 mb-8">
        
        {this.state.todoList.length == 0 ? <Welcome/> : 
          <PrioritizeTask 
          handleChange={this.handleChange}
          todo={this.state.todo}
          todoList={this.state.todoList}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          checkbox={this.checkbox}
          setColor={this.setColor}
          
          />
        }
        </div>

        </div>

      </div>

      
      

        
      
      
      

    ); 
  }
}

export default App;