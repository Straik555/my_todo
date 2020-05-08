import React, {Component} from 'react';
import TodoListItem from '../todo-list-item';
import './style.css';

export default class TodoList extends Component{
    render(){
        const {
                todo, 
                onToggleDone, 
                onToggleImportant,
                onDeleteitem
            } = this.props;
        const element = todo.map((item) => {
            const { id, ...itemsProps } = item;
            return(
                <li key={id}>
                    <TodoListItem 
                    {...itemsProps}
                    onToggleDone={()=> onToggleDone(id)}
                    onToggleImportant={()=> onToggleImportant(id)}
                    onDeleteitem={() => onDeleteitem(id)}
                    />
                </li>
            )       
        })
        return(
            <ul className='todo-list'>{element}</ul>
        )
    }
}