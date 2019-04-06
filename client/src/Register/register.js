import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = {
        username: "",
        password: "",
    }

    render() {
        return (
            <div>
            <h2>Register new user</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">username</label>
                    <input
                    placeholder="username"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text"
                     />
                <label htmlFor="password">password</label>
                     <input
                    placeholder="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="text"
                     />     
            </form>
            <div className="submit">
                <button type="submit">Register User</button>
            </div>
            <div>
                {this.state.message}
            </div>
           </div>
        )
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/register';

        axios.post(endpoint, this.state)
        .then( res => {
            // localStorage.setItem("jwt", res.data.token)
            // this.props.history.push('/jokes')
            console.log('response data: ', res.data)
        }).catch(e => {
            console.error('error...', e);
        })
    };
}

export default Register;