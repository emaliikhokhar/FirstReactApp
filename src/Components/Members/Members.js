import React, { Component } from "react"
import App from "../../App"
import './Members.css'
import Header from "../Header/Header"
import { Link } from 'react-router-dom'

class Members extends Component {

    deleteHandler = (memberID) => {
        this.props.deleteHandler(memberID);
    }

    updateHandler = (memberID, memberName, memberPhone) => {
        this.props.updateHandler(memberID, memberName, memberPhone);
    }

    render() {
        return (
            <div>
                <div>
                    <Header heading="Society" />
                </div>
                <Link to="/add">
                    <div className="btn-container">
                        <button className="button">Add New Donor</button>
                    </div>
                </Link>
                <div className="header-container">
                    <div className="td-header name">Name</div>
                    <div className="td-header phone">Phone</div>
                    <div className="td-header">Actions</div>
                </div>
                {
                    this.props.members.map((mem) => (
                        <div key={mem.id} className="container">
                            <div className="td-data">{mem.name}</div>
                            <div className="td-data">{mem.phone}</div>
                            <Link to="/update">
                            <button className="update-btn" onClick={this.updateHandler.bind(this, mem.id, mem.name, mem.phone)} namePhone={this.namePhone}>Update</button>
                            </Link>
                            <button className="del-btn" onClick={this.deleteHandler.bind(this, mem.id)}>Delete</button>
                        </div>
                    ))
                }

            </div>
        )
    }
}

export default Members;