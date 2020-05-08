import React, {Component} from 'react';
import './style.css';

export default class TodoListItem extends Component{
    render(){
        const {
                label,
                done, 
                important, 
                onToggleDone, 
                onToggleImportant, 
                onDeleteitem
            } = this.props;
        let clazz = 'span'
        if(done){
            clazz += ' done'
        }
        if(important){
            clazz += ' important'
        }
        return(
            <span className={clazz}>
                <span
                onClick={onToggleDone}>
                {label}
                </span>
                <button type='button'
                className='btn-succes'
                onClick={onToggleImportant}
                >
                <i className="fa fa-exclamation" />
                </button>
                <button type='button'
                className='btn-danger'
                onClick={onDeleteitem}
                >
                <i className="fa fa-trash" />
                </button>
            </span>
        )
    }
}