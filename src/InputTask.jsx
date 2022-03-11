import React, { Component } from "react";

class InputTask extends Component {
  render() {
    return (
        
          <div style={{backgroundColor: 'lavender'}}>
            <div className="panel panel-default">
              <div className="panel-heading ">Add New Todo</div>
                <form className="form-horizontal card card-body">
                  <div className="form-group">
                    <div className="col-sm-10">
                      

                        {/*input task description*/}
                        <h6>I want to...</h6>
                        <textArea
                        className = "create-todo-text" 
                        onChange= {this.props.handleChange} 
                        value={this.props.inputTask} 
                        type="text" 
                        name="inputTask"  
                        placeholder="Write a description of your task here..."></textArea>

                        {/*select menu for priority*/}
                        <h6>How much of a priority is this?</h6>
                        <select 
                        name="priority" 
                        value= {this.props.priority}
                        onChange = {this.props.handleChange}
                        className="create-todo-priority form-select" required>
                          <option>Select Priority</option>
                          <option value="1">Low Priority</option>
                          <option value="2">Mid Priority</option>
                          <option value="3">High Priority</option>
                        </select>

                    </div>
                  </div>
                  

                  {/*add button and click event */}
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button className="btn btn-primary" type="button" name="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.handleClick(e);
                    }}>Add</button>
                    </div>
                  </div>
        		    </form>

            </div>
          </div>
   
    );
  }
}
export default InputTask;