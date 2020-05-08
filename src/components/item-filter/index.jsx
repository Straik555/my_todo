import React, {Component} from 'react';
import './style.css'
export default class ItemFilter extends Component{
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
];
    render(){
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const itemsClass = filter === name;
            const clazz = itemsClass ? 'active' : 'noActive';
            return(
                <button type='button'
                className={clazz}
                key={name}
                onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className='button'>
                {buttons}
            </div>
        )
    }
}