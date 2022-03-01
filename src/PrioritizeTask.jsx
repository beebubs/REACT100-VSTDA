import React, { Component } from "react";


class PrioritizeTask extends Component {
  render() {
    return (
      /*view todos, checkbox, edit and delete */
      
      <div className="col-sm-8" style={{backgroundColor: 'lavender'}}>
      <div className="panel panel-default">
        <div className="panel-heading ">View Todo</div>
          <form className="form-horizontal card card-body">
            <div className="form-group">
              <div className="col-sm-12">
              <div className="list-group">

                
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
export default PrioritizeTask;