import React, { Component } from 'react';

export default class Listitem extends Component {
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }
    valueChange = (event) => {
        this.props.onValueChange(event.target.value, event.target.id);
    }
    render() {
        const props = this.props;
        return (
            <li className='listli'>
                <input type='checkbox' checked={props.value.completed} onChange={this.handleChange} value={props.index} />
                <input className='listitemtitle' type='text' id={props.index} value={props.value.item} onChange={this.valueChange} readOnly={props.value.completed} />
                {props.value.completed &&
                    <span className='badge comp'>Completed</span>
                }
            </li>
        );
    }
}