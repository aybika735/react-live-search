import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const elements =[
  {
name:'hhhhhhh'
  }
]
root.render(
  <React.StrictMode>
    <App elements={elements}/>
  </React.StrictMode>
);

