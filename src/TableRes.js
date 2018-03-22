import React, { Component } from "react";

class TableRes extends Component{
    constructor(props){
        super(props);
        const comments =   localStorage.getItem('movieData');
       let newData = JSON.parse(comments);
        this.state = {
            title:newData.title,
            data:newData.movies,
            desc:newData.description
        }
       
    }
     
    render(){
        return(
            <div>
                <p>Table value</p>
                <h3>{this.state.title}</h3>
                <p>{this.state.desc}</p>
                <table>
                    <thead>
                        <tr>
                                <th>sl.no</th>
                                <th>Title</th>
                                <th>Release Year</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                     {this.state.data.map((dynamicCont,index) =>{
                         return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{dynamicCont.title}</td>
                                <td>{dynamicCont.releaseYear}</td>
                            </tr>    
                        )
                    })}   
                    </tbody>
                </table>
                
               
                
            </div>
        )
    }
}
 
export default TableRes;