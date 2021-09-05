import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {

  // We are in a class, so no declaration with 'const'
  // 'state' is a compulsory name for the property (hence linked to setState)
    state = {
    persons :[
      {name: 'Max', age:23},
      {name: 'Egar', age:47},
      {name: 'Marie', age:64}  
    ],
    otherState: 'another value'
  }

  switchHandler = () => {
    // it overwrites the original state ...only persons...otherState is still in the same state
    this.setState({
      persons:[
      {name: 'Max', age:25},
      {name: 'Egar', age:49},
      {name: 'Marie', age:66}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/*!!! onClick is JSX...not HTML onclick event*/}
        <button onClick={this.switchHandler}>Toggle</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          {/* children inside the component*/}
          My hobby is reptile keeping</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          <p>{this.state.otherState}</p>
      </div>
    );
  }
}

export default App;
