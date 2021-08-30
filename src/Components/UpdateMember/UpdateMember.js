import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import App from "../../App"
import Header from "../Header/Header"
import "./UpdateMember.css"
import Member from "../Members/Members"

class UpdateMember extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: this.props.name,
            phone: this.props.phone
        }
        alert(`TO BE UPDATED: id is ${this.state.id}, name is ${this.props.name} and phone is ${this.state.phone}`);
        
    }

    formSubmitted = (e) => {
        e.preventDefault();
        this.props.updateHandler(this.state);
        this.setState({id:0, name:'', phone:''});
        console.log(`UPDATED: id is ${this.state.id}, name is ${this.state.name} and phone is ${this.state.phone}`);
        this.props.history.push("/");
    }

    updateMemberHandler = (event) => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(event);
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Header heading="Update Member"/>
                <div className="container">
                    <form onSubmit={this.formSubmitted.bind(this)}>
                        <input type="text" id="name" name="name" value={this.state.name} placeholder="Full Name" onChange={this.updateMemberHandler}/>
                        <br/>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" onChange={this.updateMemberHandler}/>
                        <br/>
                        <input type="submit" value="Update"/>
                        <br/>
                        <Link to="/">
                            <button className="btn">Back</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateMember;