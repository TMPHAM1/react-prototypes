import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () =>  { 
    return Math.round((Math.random()*1000 ) + 1);
}

const userObj = {
    name: "Tien",
    luckyNumber: luckyNumber(),
};
const greeting = (userObj) => {
    return <div className="container"> <h1>Hello {userObj.name} </h1> ><h2 className="text-muted">Your Lucky Number is: {userObj.luckyNumber}</h2></div>
}


ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);






