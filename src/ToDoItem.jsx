import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
      console.log(this.props.setColor(this.props.todoObj.priority))
    return (

        <li className= {`list-group-item ${this.props.setColor(this.props.todoObj.priority)}`}>
                  {/* checkbox */}
                    <input 
                      type="checkbox"
                      onClick = {() => this.props.checkbox()}/>
                    
                  {/* task description */}
                  <span>{this.props.todoObj.inputTask}</span>

                  {/* Edit Button */}

                  <button className="btn" type="button" name="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.editTask(e);
                    }}>
                      <i className='fas fa-edit' />
                    </button>

                    {/* Delete Button */}
                  <button className="btn" type="button" name="submit"
                    onClick={
                      () => this.props.deleteTask(this.props.index)
                    }>
                      <i className='fas fa-trash-alt'/>
                    </button>
                
            </li>
        
    );
  }
}
export default ToDoItem;