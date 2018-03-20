import React, { Component } from "react";
 
class Contact extends Component {
    constructor() {
                  super();
                  this.state = {
                    fname: '',
                    lname: '',
                    email: '',
                  };
                }
        
             onChange = (e) => {
                const state  = this.state;
                state[e.target.name] = e.target.value;
                this.setState(state);
             }
        
             onSubmit = (e) => {
               e.preventDefault();
                 const{ fname, lname,email} = this.state;
                console.log("states",this.state);
            }
  render() {
    const { fname, lname, email } = this.state;
    return (
      <div>
        <h2>Contacts</h2>
        <div className="backgroundImage padding-LR-15px">
             <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-4 formBorder">
                <form onSubmit={this.onSubmit}>
                  <div className="col-md-12">
                    <label className="col-md-5 white-text">First Name</label>
                    <input type="text" className="col-md-7" name="fname" value={fname} onChange={this.onChange} />
                  </div>
                  <div className="col-md-12">
                   <label className="col-md-5 white-text">Last Name</label>                
                     <input type="text"  className="col-md-7"  name="lname" value={lname} onChange={this.onChange} />
                  </div>
                  <div className="col-md-12">
                    <label className="col-md-5 white-text">Email</label>                 
                    <input type="text" className="col-md-7"  name="email" value={email} onChange={this.onChange} />
                  </div>
                  <div className="col-md-12 ">
                    <button type="submit" className="btn btn-success btn-submit">Submit</button>
                  </div>
                </form>
              </div>
             </div>
         </div>
      </div>
    );
  }
}
 
export default Contact;