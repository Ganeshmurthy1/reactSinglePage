import React, { Component } from "react";

class ComponentLifeCycle extends Component{
    constructor(props){
        super(props);
        this.state={
            data:0
        }
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber(){
        this.setState({data:this.state.data + 1})
    }
    render(){
        return(
            <div>
                <h3>ComponentLifeCycle</h3>
                <button onClick={this.setNewNumber}>Increment</button>
                <LifeCycleContent myNumber={this.state.data}></LifeCycleContent>
            </div>
        )
    }

}

class LifeCycleContent extends Component{
    componentWillMount(){
        console.log("component Will Mount !!");
    }
    componentDidMount(){
        console.log("component Did Mount !!");
    }
    componentWillReceiveProps(newProps){
        console.log("component Will Recieve props !!");
    }
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentWillUpdate(nextprops,nextState){
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
    render(){
        return(
            
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}
export default ComponentLifeCycle;