import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import "./AddNewMembers.css"

class AddNewMembers extends Component{

    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    formSubmitted = (e) => {
        e.preventDefault();
        this.props.addNewMemberHandler(this.state);
        this.setState({id:0, name:'', phone:''});
        this.props.history.push("/homepage");
    }

    inputChangeHandler = (event) => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(event);
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Header heading="Add Member"/>
                <div className="container">
                    <form onSubmit={this.formSubmitted.bind(this)}>
                        <input type="text" id="name" name="name" placeholder="Full Name" onChange={this.inputChangeHandler}/>
                        <br/>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" onChange={this.inputChangeHandler}/>
                        <br/>
                        <input type="submit" value="Add"/>
                        <br/>
                        <Link to="/homepage">
                            <button className="btn">Back</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddNewMembers;