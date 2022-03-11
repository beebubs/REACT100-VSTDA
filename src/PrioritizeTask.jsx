import React, { Component } from "react";
import ToDoItem from "./ToDoItem";


class PrioritizeTask extends Component {
  render() {
    
    
    return (
      
      /*view todos, checkbox, edit and delete */
      <div>
      
      <div style={{backgroundColor: 'lavender'}}>
      <div className="panel panel-default">
        <div className="panel-heading ">View Todos</div>
          <form className="form-horizontal card card-body">
            <div className="form-group">
              <div className="col-sm-12">
              {/* ToDo Item */}
              <ul className="list-group">
                  {
                    this.props.todoList.map((todoObj, i) => <ToDoItem todoObj={todoObj} key={i}
                    index={i}
                    editTask={this.props.editTask} deleteTask={this.props.deleteTask} 
                    checkbox={this.props.checkbox} setColor={this.props.setColor} 
                    handleSave={this.props.handleSave} handleChange={this.props.handleChange} 
                    handleClick={this.props.handleClick} strikethrough={this.props.strikethrough} />)
                  
                  }
                  
              </ul>      
              </div>
            </div>
          </form>

      </div>
    </div>
    
    <div>
    </div>

    </div>

    
    );
  }
}
export default PrioritizeTask;