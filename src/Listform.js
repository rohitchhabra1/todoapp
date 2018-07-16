import React, { Component } from 'react';

export default class Listform extends Component {
    constructor(props) {
        super(props);
        this.value = '';
        this.state = { btn: 'text' };
    }
    handleChange = (e) => {
        this.value = e.target.value;
        this.setState({ btn: 'text' });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.value !== '') {
            this.props.onChange(this.value);
            this.value = '';
        } else {
            this.setState({ btn: 'error' });
        }
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <form >
                    <h4>TODO</h4>
                    <input className={this.state.btn} type='text' placeholder='Your TODO...' value={this.value} onChange={this.handleChange} />
                    <input type='submit' value='Submit' className='submitbtn' />
                </form>
            </div>
        );
    }
}