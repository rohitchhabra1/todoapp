import React, { Component } from 'react';
import Listitem from './Listitem';

export default class Listitems extends Component {
    render() {
        const list = this.props.list;
        const listitem = list.map((value, i) =>
            <Listitem value={value} key={i} index={i} onChange={(id) => this.props.onChange(id)} onValueChange={(value, id) => this.props.onValueChange(value, id)} />
        );
        return (
            <div className='listdiv'>
                <ul className='listul'>
                    {listitem}
                </ul>
            </div>
        );
    }
}