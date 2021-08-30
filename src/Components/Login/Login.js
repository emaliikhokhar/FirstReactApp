import React, { Component, Link } from 'react'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    authentication = (e) => {
        e.preventDefault();
        this.props.authenticateUser(this.state);
        this.setState({id:0, name:'', phone:''});
    }

    inputChangeHandler = (event) => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(event);
        console.log(this.state);
    }

    render() {
        return (
            <div className="content">
                <div>
                    <h1>Welcome to login page</h1>
                    <form onSubmit={this.authentication.bind(this)}>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={this.inputChangeHandler}/>
                        <br />
                        <input type="password" id="password" name="password" placeholder="Password" onChange={this.inputChangeHandler}/>
                        <br />
                        <input type="submit" value="Login" />
                        <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login