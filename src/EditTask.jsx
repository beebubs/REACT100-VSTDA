import React, { Component } from "react";

class EditTask extends Component {
  render() {
    return (
      /*view todos and edit task*/
      
      <div className="col-sm-8" style={{backgroundColor: 'lavender'}}>
      <div className="panel panel-default">
        <div className="panel-heading ">View Todo</div>
          <form className="form-horizontal card card-body">
            <div className="form-group">
              <div className="col-sm-12">
              <div className="list-group">

            {/*input task description*/}
            <h6>Description</h6>
            <textArea
                className = "create-todo-text" 
                onChange={this.props.handleChange} 
                value={this.props.inputTask} 
                type="text" 
                name="inputTask" 
                id ="newTask" 
                placeholder="Write a description of your task here...">

            </textArea>

            {/*select menu for priority*/}
            <h6>Priority</h6>
            <select 
                value= {this.props.priority}
                onChange = {this.props.handleChange}
                id = "select-priority" 
                className="create-todo-priority form-select" 
                aria-label="Default select example">
                    <option value="" >Select Priority</option>
                    <option value="1">Low Priority</option>
                    <option value="2">Mid Priority</option>
                    <option value="3">High Priority</option>
            </select>

            {/*add button and click event */}
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary" type="button" name="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.handleClick(e);
                }}>Save</button>
                </div>
            </div>
                
                <a href="#" className="list-group-item list-group-item-action list-group-item-success" id="type-priority">
                {/*checkbox*/ }
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                {/*inputed task appears here*/ }
                <span className="text-left"> {this.props.inputTask} </span>
                {/*edit and delete buttons*/ }
                <i className='fas fa-edit' />
                <i className='fas fa-trash-alt'/>
                {this.prioritizeTask}</a>
                

                <a href="#" className="list-group-item list-group-item-action list-group-item-danger" id="high-priority">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <i className='fas fa-edit' />
                <i className='fas fa-trash-alt'/>
                {this.props.prioritizeTask}</a>

                <a href="#" className="list-group-item list-group-item-action list-group-item-warning" id="mid-priority">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <i className='fas fa-edit' />
                <i className='fas fa-trash-alt'/>
                {this.props.prioritizeTask}</a>
              </div>


              </div>
            </div>
              </form>

      </div>
    </div>
      
  
    
    );
  }
}
export default EditTask;