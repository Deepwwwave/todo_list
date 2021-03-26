import React from 'react';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items : [
        {text: "learn react", key: Date.now }
      ],
      input: ''
    }
  }

  // Methode qui enregistre la valeur du formulaire dans la variable input du state
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ input : e.target.value})
  }

  // Méthode qui enregistre la saisie du formulaire dans la variable items du state
  add =()=>{

    let newItem = {text: this.state.input, key: Date.now()
    }
    this.setState(state => ({
      items: [newItem].concat(state.items)
    }))
  }
 
  render() {
    return (
      <div id="container">
        <div className="todoListMain">
          <div className="header">
            <form onSubmit = {(e) => {e.preventDefault() ; this.add() }}>
              <input placeholder="enter task" className="rounded" onChange = { (e) => this.handleChange(e)}/>
              <button className="rounded">add</button>
              <ul>
                {this.state.items.map(item => {
                  return(<li key={item.key}>{item.text}</li>)
                })}
              </ul>
            </form>
          </div>
        </div>
  
      </div>
    );
  }
}
  


