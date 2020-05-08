import React, {Component} from 'react';
import './style.css'

export default class SearchPanel extends Component{
    render(){
        const {onSearchPanel} = this.props;
        return(
                    <input type="text"
                    placeholder='search'
                    className='searchInp'
                    onChange={onSearchPanel}
                    />
        )
    }
}