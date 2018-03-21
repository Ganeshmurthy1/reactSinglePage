import React, { Component } from "react";

class FormsMethod extends Component{
   render(){
       return(
           <div>
               <SimpleForm/>
               <ComplexForm/>
            </div>
       )
   }
}
class SimpleForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:"Initial Data"
        }
        this.updateForm = this.updateForm.bind(this);
    }
    updateForm(e){
        this.setState({data:e.target.value})
    }
    render(){
        return(
            <div className="border1px">
                <h3>Simple Forms</h3>
                <input type="text" value={this.state.data} onChange={this.updateForm}/>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}
class ComplexForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:"Initial complex data"
        }
        this.updateData = this.updateData.bind(this);
    }
    updateData(e){
        this.setState({data:e.target.value});
    }
    render(){
        return(
            <div className="border1px">
               <h3>Complex Forms</h3>
             <ContentData myPropData = {this.state.data} updateStateProp = {this.updateData}></ContentData>
                
            </div>
        )
    }
}

class ContentData extends Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.myPropData} onChange={this.props.updateStateProp}/>
                <h3>{this.props.myPropData}</h3>
            </div>
        )
    }
}
export default FormsMethod;