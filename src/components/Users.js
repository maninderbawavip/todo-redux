import { Component } from "react";

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
            {this.state.data.map(item => <p key={item.id}>{item.name}</p>)}
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


        // setTimeout(() => {
        //     this.setState({
        //         data: [],
        //         loading: false
        //     })
        // }, 5000)
    }


}


export default Users;
