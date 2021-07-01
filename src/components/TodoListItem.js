import { Component } from "react";

class TodoListItem extends Component{

    constructor(props) {
        super(props);
        // initialization purposes
        this.state = {
            count: 2121
        }
        console.log('constructor called')
        // this.checkCount = this.checkCount.bind(this)
    }

    checkCount = () => {
        // arrow functions inherit the context of their parent
        console.log(this.state.count)
    }

    render() {
        console.log('render called')

        const { item, CompleteTodo, DeleteTodo } = this.props;

        return(
            <div style={{ display: 'flex'}}>
          
            {item.completed ? <strike><p>{item.todo}</p></strike> : <p>{item.todo}</p>}

            <button onClick={() => CompleteTodo(item.id)}>Complete</button>
            <button onClick={() => DeleteTodo(item.id)}>Delete</button>
            <button onClick={() => this.checkCount()}>Check Count</button>
          </div>
        )
    }

    componentDidMount() {
        console.log("component did mount")
    }

}

export default TodoListItem;