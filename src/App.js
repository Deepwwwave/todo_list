import React from 'react';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items : [
        {text: "learn react", key: Date.now }
      ]
    }
  }
 

  render() {
    return (
      <div id="container">
        <div className="todoListMain">
          <div className="header">
            <form>
              <input placeholder="enter task" className="rounded"/>
              <button className="rounded">add</button>
              <ul>
                {this.state.items.map(item => {
                  return(<li>{item.text}</li>)
                })}
              </ul>
            </form>
          </div>
        </div>
  
      </div>
    );
  }
}
  


