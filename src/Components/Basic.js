import React from 'react';
import { Label, TextBox, Form } from 'rc-easyui';
 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      model: {
        fname: '',
        lname: '',
        addr: '',
        company: ''
      }
    }
  }
  handleChange(field,value){
    let model = Object.assign({}, this.state.model);
    model[field] = value;
    this.setState({model: model});
  }
  render() {
    const {fname,lname,addr,company} = this.state.model;
    return (
      <div>
        <h2>Basic TextBox</h2>
        <p>The TextBox allows users to enter a string through the inputing box.</p>
        <Form model={this.state.model} onChange={this.handleChange.bind(this)}>
          <div className="f-row" style={{width:'25em'}}>
            <div className="f-full">
              <Label htmlFor="t1" align="top">First Name:</Label>
              <TextBox inputId="t1" iconCls="icon-man" placeholder="First name" name="fname" value={fname} style={{width:'100%'}}></TextBox>
            </div>
            <div className="f-full">
              <Label htmlFor="t2" align="top">First Name:</Label>
              <TextBox inputId="t2" placeholder="Last name" name="lname" value={lname} style={{width:'100%'}}></TextBox>
            </div>
          </div>
          <div style={{width:'25em'}}>
            <div>
              <Label htmlFor="t3" align="top">First Name:</Label>
              <TextBox inputId="t3" placeholder="Address" name="addr" value={addr} style={{width:'100%'}}></TextBox>
            </div>
            <div>
              <Label htmlFor="t4" align="top">Company:</Label>
              <TextBox inputId="t4" placeholder="Address" name="company" value={company} style={{width:'100%'}}></TextBox>
            </div>
          </div>
        {fname !== '' && <p>First Name: {fname}</p>}
        {lname !== '' && <p>Last Name: {lname}</p>}
        {addr !== '' && <p>Address: {addr}</p>}
        {company !== '' && <p>Company: {company}</p>}
        </Form>
      </div>
    );
  }
}
 
export default App;