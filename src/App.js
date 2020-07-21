import React from 'react';
import { Accordion, AccordionPanel, LinkButton } from 'rc-easyui';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelIndex: 4,
      selectedIndex: 0,
      panels: [
        { title: "Title1", content: "Content1" },
        { title: "Title2", content: "Content2" },
        { title: "Title3", content: "Content3" }
      ]
    }
  }
  handleAdd() {
    const { panels, panelIndex } = this.state;
    if (panels.length >= 6) {
      return;
    }
    this.setState({
      panels: [...panels, {
        title: 'Title' + panelIndex,
        content: 'Content' + panelIndex
      }],
      panelIndex: panelIndex + 1
    }, () => {
      this.setState({ selectedIndex: this.state.panels.length - 1 })
    })
  }
  handleRemove() {
    let panels = this.state.panels;
    panels.splice(this.state.selectedIndex, 1);
    this.setState({ panels: panels, selectedIndex: 0 })
  }
  handlePanelSelect(panel) {
    let index = 0;
    this.state.panels.forEach((p, idx) => {
      if (p.title === panel.props.title) {
        index = idx;
      }
    })
    this.setState({ selectedIndex: index })
  }
  render() {
    return (
      <div>
        <h2>Dynamic Accordion</h2>
        <div style={{ marginBottom: '10px' }}>
          <LinkButton iconCls="icon-add" onClick={this.handleAdd.bind(this)} style={{marginRight:5}}>Add</LinkButton>
          <LinkButton iconCls="icon-remove" onClick={this.handleRemove.bind(this)}>Remove</LinkButton>
        </div>
        <Accordion
          style={{ height: 250 }}
          selectedIndex={this.state.selectedIndex}
          onPanelSelect={this.handlePanelSelect.bind(this)}
        >
          {
            this.state.panels.map((panel, index) => (
              <AccordionPanel key={index} title={panel.title}>
                <p>{panel.content}</p>
              </AccordionPanel>
            ))
          }
        </Accordion>
      </div>
    );
  }
}
 
export default App;