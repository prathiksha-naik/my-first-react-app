import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/UserDetails.css';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        const url = "https://fakestoreapi.com/users";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ users: json }))
    }
    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <div class="jumbotron">
                    <h1 class="display-4">User Details</h1>
                </div>
                <div className="row all-cards">
                    {users.map((user) => (
                        <div className="col-sm-4">
                            <div className="card car" key={user.id}>
                                <div className="card-header">
                                    User ID: {user.id}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Username: <span className='username'>{user.username}</span></p>
                                </div>
                                <div>
                                    <Link className='btn btn-success btn-custom' to={'/getsingleuser/' + user.username}>Show user privileges</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default UserDetails;