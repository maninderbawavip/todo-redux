import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo, completeTodo, deleteTodo } from './redux/store';
import TodoListItem from './components/TodoListItem';
import Users from './components/Users';


function App(props) {

  const [inputText, SetText] = useState("")
  // const [todoList, setNewList] = useState([])

  const ADDtodo = () => {
    // write some logic to add todo
    // get the value of input field and add it to todolist
    // const newTodoList = [...todoList, inputText]
    // setNewList(newTodoList)
    // SetText("")

    // dispatch an action that adds the todo in the store
    const action = addTodo(inputText) // returns me the action that is needed to dispatch
    props.dispatch(action) // { type: "ADD_TODO", data: inputText }
    SetText("")
  }

  const CompleteTodo = (id) => {
    props.dispatch(completeTodo(id))
  }

  const DeleteTodo = (id) => {
    props.dispatch(deleteTodo(id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <input type="text" value={inputText} onChange={(e) => SetText(e.target.value)} />
          <button onClick={ADDtodo}> Add Todo </button>
        </div>

        {props.todoList.map(item => <TodoListItem
                                        item={item}
                                        CompleteTodo={CompleteTodo}
                                        DeleteTodo={DeleteTodo} />)}


        <Users />

      </header>
    </div>
  );
}


// const mapStateToProps = (state) => {
//   return({
//     todoList: state
//   })
// }

const mapStateToProps = (state) => ({
  todoList: state
})


export default connect(mapStateToProps)(App);
