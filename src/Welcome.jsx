import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'lavender'}}>
      <div className="panel panel-default">
        <div className="panel-heading ">View Todos</div>
              <li className= "list-group-item list-group-item-primary">
              <h6 className="text-left">Welcome to Very Simple Todo App!</h6>
                <p className="text-left">Get started by now adding a todo on the left.</p>
              </li>
      </div>
      </div>
        
       
        
    );
  }
}
export default Welcome;