import React, { Component } from 'react';
import './style.css'

export default class AppHeader extends Component {
    render(){
        const {todoImp, todoDo} = this.props;
        return (
            <div>
                <h1>My ToDo List</h1>
                <h2>{todoImp} more to do, {todoDo} done</h2>
            </div>
        )
    }
}