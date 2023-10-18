import {Component} from 'react'
import TodoListItem from './components/TodoListItem'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {todoList: [], todoItem: ''}

  deleteItem = todoId => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.filter(todo => todo.id !== todoId),
    })
  }

  onAddItem = e => {
    e.preventDefault()
    const {todoItem} = this.state

    const newItem = {
      id: v4(),
      todoItem,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newItem],
      todoItem: '',
    }))
  }
  onChangeTodo = e => {
    this.setState({
      todoItem: e.target.value,
    })
  }

  renderTodoList = () => {
    const {todoList} = this.state
    return todoList.map(eachTodo => (
      <TodoListItem
        key={eachTodo.id}
        todoDetails={eachTodo}
        deleteItem={this.deleteItem}
      />
    ))
  }

  render() {
    const {todoItem} = this.state
    return (
      <div className="todo-container">
        <h1 className="title">Todo List</h1>
        <form className="todo-form" onSubmit={this.onAddItem}>
          <input
            type="text"
            className="todo-item"
            placeholder="Add Item"
            value={todoItem}
            onChange={this.onChangeTodo}
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
        <hr />
        <ul className="itemsList">{this.renderTodoList()}</ul>
      </div>
    )
  }
}
export default App
