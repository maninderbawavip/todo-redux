import { useEffect, useState } from "react";

const UserDetails = (props) => {

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // component did mount

        fetch('https://jsonplaceholder.typicode.com/users/' + props.match.params.userId)
            .then(response => response.json())
            .then(data => {
                setUserData(data)
                setLoading(false)
            })

    }, [])

    if (loading) {
        return (<div>Please wait loading the details</div>)
    }

    return (<div>The User is {userData.name}, email is {userData.email}</div>)
}

export default UserDetails;