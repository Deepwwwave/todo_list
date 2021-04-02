import React, { Component } from 'react'

const Header = ({add, handleChange, input, placeholder}) => {
   return (
      <form onSubmit={(e) => { e.preventDefault(); add() }}>
         <input
            placeholder={placeholder}
            className="rounded text-left"
            value={input}
            onChange={(e) =>handleChange(e)}
         />
         <button className="rounded">add</button>
      </form>
   )
}

const List = ({items, delet}) => {
   return (
      <ul className="theList">
         {items.map(item => {
            return (<li key={item.key} onClick={() => delet(item.key)} >{item.text}</li>)
         })}
      </ul>
   )

}

export default class TodoList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         items: [
            { text: "learn react", key: Date.now }
         ],
         input: '',
         placeholder: 'Enter task'
      }
   }

   componentDidMount() {
      let items = JSON.parse(localStorage.getItem("items"))
      this.setState({ items: items })
   }
   // Methode qui enregistre la valeur du formulaire dans la variable input du state
   handleChange = (e) => {
      console.log(e.target.value)
      this.setState({ input: e.target.value })
   }

   // Méthode qui enregistre la saisie du formulaire dans la variable items du state
   add = () => {
      if (this.state.input === '') {
         this.setState({
            placeholder: 'You need to write an task'
         }

         )
         return
      }
      let newItem = {
         text: this.state.input, key: Date.now()
      }
      this.setState(state => ({
         items: [newItem].concat(state.items),
         input: '',
         placeholder: 'Enter task'
      }))
      localStorage.setItem('items', JSON.stringify([newItem].concat(this.state.items)))
   }

   delete = (key) => {
      let filtered = this.state.items.filter(item => {
         if (key !== item.key) {
            return item
         }
      })
      this.setState({
         items: filtered,
         placeholder: 'Enter task'
      })
      localStorage.setItem('items', JSON.stringify(filtered))
   }

   render() {
      return (
         <div id="container">
            <div className="todoListMain">
               <div className="header">
                  <Header 
                     handleChange={this.handleChange} 
                     add={this.add} 
                     input={this.state.input} 
                     placeholder={this.state.placeholder} 
                  />

                  <List
                     items = {this.state.items}
                     delet = {this.delete}
                  />

               </div>
            </div>
         </div>
      )
   }
}
