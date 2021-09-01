import React, { Component, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import App from "../../App"
import "./UseReference.css"

function UseReference() {
    const goodName = useRef(null);
    const [show, setShow] = useState(false);

    const formSubmitted = (e) => {
        e.preventDefault();
        const fullName = goodName.current.value;
        fullName === "" ? alert("Fill your name") : setShow(true);
    }

    return (
        <div>
            <div>
                <Header heading="useRef Page" />
            </div>
            <div className="content">
                <div>
                    <form onSubmit={formSubmitted}>
                        <label htmlFor="Goodname">Enter your name</label><br/>
                        <input type="text" id="goodName" ref={goodName}/>
                        <br/><br/>
                        <button className="btn">Submit</button>
                    </form>
                </div>
                <div>
                    <Link to="/homepage">
                        <button className="btn">Back</button>
                    </Link>
                </div>
                <div>
                    <p> {show ? `Your good name is ${goodName.current.value}` : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default UseReference