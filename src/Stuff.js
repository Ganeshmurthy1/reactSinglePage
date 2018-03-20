import React, { Component } from "react";
import ReactDOM from "react-dom";
class Stuff extends Component {
 
  render() {
    return (
      <div>
        <SetStateMethod/>
        <ForceUpdateMethod/>
        <DomNodeMethod/>
      </div>
    );
  }
}
class SetStateMethod extends Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  }
  setStateHandler(){
    var item = "Add State";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({
      data:myArray
    })
  }
  render(){
    return(
      <div>
      <h2>SetState</h2>
         <button onClick={this.setStateHandler}>SetState</button>
         <p>{this.state.data}</p>
      </div>
    )
  }
}

class ForceUpdateMethod extends Component{
  constructor(){
    super();
     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler(){
    this.forceUpdate();
  }
  render(){
    return(
      <div>
          <h2>ForceUpdate</h2>
         <button onClick={this.forceUpdateHandler}>ForceUpdate</button>
         <p>{Math.random()}</p>
        </div>
    )
  }
}
class DomNodeMethod extends Component{
  constructor(){
    super();
    this.findDomNodeHandlerFunction = this.findDomNodeHandlerFunction.bind(this);
  }
  findDomNodeHandlerFunction(){
    var dataId = document.getElementById('myDiv');
    ReactDOM.findDOMNode(dataId).style.color = "red";
  }
  render(){
    return(
      <div>
        <h2>Finding-Dom-Node</h2>
      <button onClick={this.findDomNodeHandlerFunction}>Finding-Dom-Node</button>
      <div id="myDiv">Node</div>
      </div>
    )
  }
}
export default Stuff;