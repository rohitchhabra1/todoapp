import React, { Component } from 'react';
import './App.css';
import Listform from './Listform';
import Listitems from './Listitems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }
    handleChange = (value) => {
        const addeditem = { item: value, completed: false };
        this.state.list.push(addeditem);
        this.setState(this.state);
    }
    checkboxChange = (id) => {
        const x = this.state;
        this.state.list.forEach((li, i) => {
            if (id === i.toString()) {
                x.list[id].completed = !x.list[id].completed;
                this.setState(x);
            }
        });
    }
    handleValueChange = (value, id) => {
        const x = this.state;
        if (value === '') {
            x.list.splice(id, 1);
        } else {
            x.list[id].item = value;
        }
        this.setState(x);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h2>Todo App</h2>
                    <Listitems list={this.state.list} onChange={this.checkboxChange} onValueChange={this.handleValueChange} />
                    <Listform onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default App;
