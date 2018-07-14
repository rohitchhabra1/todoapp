import React, { Component } from 'react';
import './App.css';

let list= [{item:'abc',completed:false},{item:'xyz', completed:true}];
function Listitems(){
    const listitem = list.map((value)=> 
        <li  className='listli' key={value.item}>
        <input type='checkbox' checked={value.completed} readOnly/>
            <span className='listitemtitle'>{value.item}</span>
            {value.completed &&
                <span className='badge comp'>Completed</span>
            }
        </li>
    );
    return(
        <div className='listdiv'> 
            <ul className='listul'>
                {listitem}
            </ul>
        </div>
    );
}
class App extends Component {
  render() {
    return (
      	<div className='container'>
            <div className='row'>
                <h2>Todo App</h2>
                <Listitems/>
            </div>
        </div>
    );
  }
}

export default App;
