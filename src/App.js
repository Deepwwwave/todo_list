import React from 'react';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items : [
        {text: "learn react", key: Date.now }
      ],
      input: '',
      placeholder:'Enter task'
    }
  }

  // Methode qui enregistre la valeur du formulaire dans la variable input du state
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ input : e.target.value})
  }

  // Méthode qui enregistre la saisie du formulaire dans la variable items du state
  add = () =>{
    if (this.state.input === '') {
      this.setState({
        placeholder:'You need to write an task'}
        
      )
      return
    }
    let newItem = {text: this.state.input, key: Date.now()
    }
    this.setState(state => ({
      items: [newItem].concat(state.items),
      input: '',
      placeholder: 'Enter task'
    }))
  }
 
  Delete = (key) => {
    let filtered = this.state.items.filter(item => {
      if (key !== item.key) { 
        return item 
      }
    })
    this.setState({
      items : filtered,
      placeholder : 'Enter task'
    })
  }


  render() {
    return (
      <div id="container">
        <div className="todoListMain">
          <div className="header">
            <form onSubmit = {(e) => {e.preventDefault() ; this.add() }}>
              <input 
              placeholder={this.state.placeholder} 
              className="rounded text-left"
              value = {this.state.input}
              onChange = { (e) => this.handleChange(e)}
              />
              <button className="rounded">add</button>
              <ul className ="theList">
                {this.state.items.map(item => {
                  return(<li key={item.key} onClick={ () => this.Delete(item.key)} >{item.text}</li>)
                })}
              </ul>
            </form>
          </div>
        </div>
  
      </div>
    );
  }
}
  


