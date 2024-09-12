import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    constructor(props){
        super(props)
        this.state = { usersList: [] }
    };

    getData(){
        axios.get(`http://localhost:5000/api/restricted/users`)
        .then(res => this.setState( {usersList: res.data} ))
        .catch(err=>console.log(err));
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        console.log("usersList", this.state.usersList);
        return (
            <div>
                <p>Registered Users:</p>
                {this.state.usersList.length === 0 ? <p>Loadings users...</p> : this.state.usersList.map( userData => <div>Username: {userData.username}</div>)}
            </div>
        )
        

    }
}

export default UsersList;


// {this.props.UsersList.map( userData => <div>Username: {userData.username} Password: {userData.password}</div>)}