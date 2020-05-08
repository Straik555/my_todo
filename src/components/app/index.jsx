import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter';
import TodoList from '../todo-list';
import AddItem from '../addItem';
import './style.css';

export default class App extends Component {
  maxId = 1;
  state={
    todoDate:[
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch')
    ],
    term: '',
    filter: 'all'
  }
  createItem(label){
    return{
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
        ...oldItem, 
        [propName]: !oldItem[propName]
    }
    return[
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
    
}
  onToggleDone = (id) => {
    this.setState(({todoDate}) => {
      return{
        todoDate: this.toggleProperty(todoDate, id, 'done')
      }
    })
  }
  onToggleImportant = (id) => {
    this.setState(({todoDate}) => {
      return{
        todoDate: this.toggleProperty(todoDate, id, 'important')
      }
    })
  }
  onDeleteitem = (id) => {
    this.setState(({todoDate}) => {
      const idx = todoDate.findIndex((el) => el.id === id);
      const newArr = [
        ...todoDate.slice(0, idx),
        ...todoDate.slice(idx+1)
      ]
      return{
        todoDate: newArr
      }
    })
  }
  onAddItem = (el) => {
    if(el != ''){
          const newItem = this.createItem(el);
      return this.setState(({todoDate})=> {
        const newArr = [
          ...todoDate,
          newItem
        ]
        return{
          todoDate: newArr
        }
  })
    }
  }
  search = (items, term) => {
    if(term.length === 0){
      return items
    } else{
      return items.filter(item => {
        return item.label.toLowerCase().indexOf(term.toLowerCase())
      })
    }
  }
  search = (items, term) => {

    if(term.length === 0){
      return items
    } else {
      return items.filter(items => {
        return items.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
    }
    
  }
  onSearchPanel = (e) => {
    this.setState({
      term: e.target.value
    })
  }
  filter(items, filter){
    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }

  
  render(){
    const { todoDate, filter, term } = this.state;
    const todoDo = todoDate.filter(el => el.done).length;
    const todoImp = todoDate.length - todoDo;
    const visible = this.filter(this.search(todoDate, term), filter)
    return (
      <div className='appList'>
        <AppHeader
          todoDo={todoDo}
          todoImp={todoImp} />
        <div className='panel'>
          <SearchPanel onSearchPanel={this.onSearchPanel}/>
          <ItemFilter filter={filter}
          onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList 
          todo={visible}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDeleteitem={this.onDeleteitem} />
        <AddItem 
          onAddItem={this.onAddItem}/>
      </div>

    )
  }
}
