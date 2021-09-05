import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';




//functional component
const app = () => {

  //declaring properties with const
  //useState hook: const [state, setState] = useState(initialState)
  // setState is the state mutator
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Egar', age: 47 },
      { name: 'Marie', age: 64 }
    ]
  })

  const [otherState, setOtherState] = useState('another value');

  const switchHandler = () => {
    setPersonState({
      persons: [
        { name: 'Max', age: 25 },
        { name: 'Egar', age: 49 },
        { name: 'Marie', age: 66 }
      ]
    });
  }

  // no more render() {} ...just return(JSX)
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      {/*!!! onClick is JSX...not HTML onclick event*/}
      <button onClick={switchHandler}>Toggle</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>
        {/* children inside the component*/}
        My hobby is reptile keeping</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      <p>{otherState}</p>
    </div>
  );
}

export default app;
