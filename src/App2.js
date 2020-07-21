import React from 'react';
import { TextBox } from 'rc-easyui';
 
class App extends React.Component {
  addon(){
    return (
      <span>
        <span className="textbox-icon icon-add"></span>
        <span className="textbox-icon icon-remove"></span>
        <span className="textbox-icon icon-search"></span>
      </span>
    )
  }
  render() {
    return (
      <div>
        <h2>TextBox Addons</h2>
        <div style={{marginBottom:'10px'}}>
          <TextBox addonRight={this.addon} placeholder="With icons" style={{width:'300px'}}></TextBox>
        </div>
        <div style={{marginBottom:'10px'}}>
          <TextBox addonLeft={this.addon} placeholder="Icons on left" style={{width:'300px'}}></TextBox>
        </div>
      </div>
    );
  }
}
 
export default App;