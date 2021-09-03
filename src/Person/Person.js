import render from 'dom-serializer';
import React from 'react';

const person = () =>{
    return <p>I'm a person and I am {Math.floor(Math.random()*50)}</p>
}

export default person;