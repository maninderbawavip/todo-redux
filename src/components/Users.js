import { Component } from "react";
import { Route, Switch, Redirect, Link } from 'react-router-dom';

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            data: []
        }
    }

    render() {
        if (this.state.loading) {
            return (<div>Please wait Loading the data...</div>)
        }
        return (<div>
            {this.state.data.map(item =>
                <Link to={"/users/" + item.id}>
                    <p key={item.id}>{item.name}</p>
                </Link>
            )}
        </div>)
    }

    componentDidMount() {
        // simulating a network call

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data,
                    loading: false
                })
            })
    }
}

export default Users;
