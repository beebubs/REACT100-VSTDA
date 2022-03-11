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
    this.strikethrough = this.strikethrough.bind(this);

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

  handleSave(i, updatedObj){
    // console.log("save button clicked");
    // console.log("i", i)
    // console.log("updatedObj", updatedObj)
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
    arrCopy[i].editEnabled = !arrCopy[i].editEnabled;
    arrCopy[i] = updatedObj;
    this.setState({
      todoList: arrCopy
    });
  
  }

  setColor(priority){

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
    // console.log("edit button is clicked");
    // console.log("i edit", i)
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
    arrCopy[i].editEnabled = !arrCopy[i].editEnabled
    this.setState({
      todoList: arrCopy
    });
    
  }
  
  deleteTask(i){
    // console.log("delete button is clicked");
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
    console.log("i", i)
    arrCopy.splice(i,1);

    this.setState({
      todoList: arrCopy
    });
  
  }


  checkbox(i){
    // console.log("checkbox");
    // console.log("i checkbox", i);
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoList));
    console.log("arrCopy[i]", arrCopy[i])

    arrCopy[i].taskCompleted = !arrCopy[i].taskCompleted
    this.setState({
      todoList: arrCopy
    });
    console.log("task completed?", arrCopy[i].taskCompleted)
    
  }
  
  strikethrough(i){

    if(this.state.todoList[i].taskCompleted == true){
      console.log("line-through")
      return "line-through";
    }else{
      return "none";
    }
    
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
          handleSave={this.handleSave}
          handleClick={this.handleClick}
          strikethrough={this.strikethrough}
          
          />
        }
        </div>

        </div>

      </div>


    ); 
  }
}

export default App;