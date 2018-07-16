import React, { Component } from 'react';
import './App.css';

class Listitem extends Component{
    handleChange = (event) =>{
        this.props.onChange(event.target.value);
    }
    valueChange = (event) =>{
        this.props.onValueChange(event.target.value,event.target.id);
    }
    render(){
        const props=this.props;
        return(
            <li  className='listli'>
                <input type='checkbox' checked={props.value.completed} onChange={this.handleChange} value={props.index}/>
                <input className='listitemtitle' type='text' id={props.index} value={props.value.item} onChange={this.valueChange} readOnly={props.value.completed}/>
                {props.value.completed &&
                    <span className='badge comp'>Completed</span>
                }
            </li>
        );
    }
}
class Listitems extends Component{
    render(){
        const list = this.props.list;
        const listitem = list.map((value,i)=> 
            <Listitem value={value} key={i} index={i} onChange={(id)=>this.props.onChange(id)} onValueChange={(value,id)=>this.props.onValueChange(value,id)}/>
        );
        return(
            <div className='listdiv'> 
                <ul className='listul'>
                    {listitem}
                </ul>
            </div>
        );
    }
}
class Listform extends Component{
    constructor(props){
        super(props);
        this.value='';
        this.state={btn:'text'};
    }
    handleChange = (e) =>{
        this.value= e.target.value;
        this.setState({btn:'text'});
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.value !== ''){
            this.props.onChange(this.value);
            this.value='';
        } else{
            this.setState({btn:'error'});
        }
    }
    render(){
        return(
            <div onSubmit={this.handleSubmit}>
                <form >
                    <h4>TODO</h4>
                    <input className={this.state.btn} type='text' placeholder='Your TODO...' value={this.value} onChange={this.handleChange}/>
                        <input type='submit' value='Submit' className='submitbtn' />
                </form>
            </div>
        );
    }
}
class App extends Component {
    constructor(props){
        super(props);
        this.state={list: []};
    }
    handleChange = (value) =>{
        const addeditem = {item: value, completed:false};
        this.state.list.push(addeditem);
        this.setState(this.state);
    }
    checkboxChange = (id)=>{
        const x = this.state;
        this.state.list.forEach((li,i)=>{
            if(id === i.toString()){
                x.list[id].completed = !x.list[id].completed;
                this.setState(x);
            }
        });
    }
    handleValueChange = (value,id)=>{
        const x = this.state;
        if(value === ''){
            x.list.splice(id,1);
        } else{
        x.list[id].item = value;
        }
        this.setState(x);
    }
    render() {
        return (
      	    <div className='container'>
                <div className='row'>
                    <h2>Todo App</h2>
                    <Listitems list={this.state.list} onChange={this.checkboxChange} onValueChange={this.handleValueChange}/>
                    <Listform onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default App;
