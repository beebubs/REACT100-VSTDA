import React, { Component } from "react";

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todo: {
            inputTask: "",
            priority: 0,
            editEnabled: false,
            taskCompleted: false
          }
        };
    
    this.handleUpdatedChange = this.handleUpdatedChange.bind(this);
}
    handleUpdatedChange(event) {
        //store value for input description and priority
        //creates a deep copy of the object
        console.log("e.target.value", event.target.value)
        console.log("e.target.name", event.target.name)
        let objCopy = JSON.parse(JSON.stringify(this.state.todo));
        const {name, value} = event.target;
        objCopy[name] = value; 
        this.setState({
          todo: objCopy
        });
    
      }
  render() {
   
    return (
        <div>
        {this.props.todoObj.editEnabled == false ?
        <li className= {`list-group-item ${this.props.setColor(this.props.todoObj.priority)}`}>

                  {/* checkbox */}
                    <input 
                      type="checkbox"
                      name="taskCompleted"
                      //onChange= {this.handleUpdatedChange}
                      onClick = {() => this.props.checkbox(this.props.index)}/>
                    
                  {/* task description */}
                  
                  <span style={{textDecoration: `${this.props.strikethrough(this.props.index)}`}}>
                  {this.props.todoObj.inputTask}</span>

                  {/* Edit Button */}

                  <button className="btn edit-todo float-right" type="button" name="submit"
                    onClick={() => 
                      this.props.editTask(this.props.index)
                    }>
                      <i className='fas fa-edit' />
                    </button>

                    {/* Delete Button */}
                  <button className="btn delete-todo float-right" type="button" name="submit"
                    onClick={
                      () => this.props.deleteTask(this.props.index)
                    }>
                      <i className='fas fa-trash-alt'/>
                    </button>
                
                
            </li>
            :
            <div className="list-group">

            {/*input task description*/}
            <h6>Description</h6>
            <textArea
                className = "update-todo-text" 
                onChange={this.handleUpdatedChange} 
                defaultValue={this.props.todoObj.inputTask} 
                type="text" 
                name="inputTask" 
                id ="newTask" >
                
            </textArea>

            {/*select menu for priority*/}
            <h6>Priority</h6>
            <select 
                defaultValue= {this.props.todoObj.priority}
                onChange = {this.handleUpdatedChange}
                id = "select-priority" 
                className="create-todo-priority form-select" 
                name="priority"
                aria-label="Default select example">
                    <option value="" >Select Priority</option>
                    <option value="1">Low Priority</option>
                    <option value="2">Mid Priority</option>
                    <option value="3">High Priority</option>
            </select>

            {/*add button and click event */}
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary update-todo" type="button" name="submit"
                    onClick={() => 
                      this.props.handleSave(this.props.index, this.state.todo)
                }>Save</button>
                </div>
            </div>
            </div>
            
            }
            </div>
        
    );
  }
}
export default ToDoItem;