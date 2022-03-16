import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './context/MyProvider';
import App from './App';


//Make sure to import your provider and wrap it around the App component.
ReactDOM.render(
    <MyProvider><App /></MyProvider>
    , document.querySelector('#root')
);


