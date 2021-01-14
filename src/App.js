import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <br/>
        <div className="row">
          <div className="col-md-6 offset-3">
            <h1>Shopping List</h1>
            <ul>
              <li>Buy Link</li>
              <li>Go to the dentist</li>
            </ul>
          </div>
        </div> 
      </div>
    )
  }
}

export default App ;