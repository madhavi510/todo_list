import './index.css'
import {FiDelete} from 'react-icons/fi'

const TodoListItem = props => {
  const {todoDetails, deleteItem} = props
  const {todoItem, id} = todoDetails

  const onDeleteTodo = () => {
    deleteItem(id)
  }

  return (
    <div className="Todo-Item-Container">
      <p className="todoItem">{todoItem}</p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        <FiDelete />
      </button>
    </div>
  )
}
export default TodoListItem
