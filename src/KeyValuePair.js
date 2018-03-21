import React, { Component } from "react";

class KeyValuePair extends Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                    Component:"First",
                    id: 1
                },
                {
                    Component:"Second",
                    id: 2
                },
                {
                    Component:"Third",
                    id: 3
                }
            ]
        }
    }
    render(){
        return(
            <div>
              <h3>  key pair</h3>
              {this.state.data.map((dynamicComponent,i) => <ContentClass key={i} componentData={dynamicComponent}/>)}
            </div>
        )
    }
}

class ContentClass extends Component{
    render(){
        return(
            <div>
                <p>{this.props.componentData.Component}</p>
                <p>{this.props.componentData.id}</p>
            </div>
        )
    }
}
export default KeyValuePair;