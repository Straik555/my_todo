import React, {Component} from 'react';
import './style.css';

export default class AddItem extends Component{
    state={
        label: ''
    }
    onChange = (el) => {
        this.setState({
            label: el.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    render(){
        return(
            <form className='addItem'
            onSubmit={this.onSubmit}
            >
                <input type="text" 
                placeholder='add item'
                onChange={this.onChange}
                value={this.state.label}
                />
                <button>Add</button>
            </form>
        )
    }
}