import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import App from "../../App"
import './Count.css'

function Count() {
    const [counter, setCounter] = useState(0);
    let increased = counter;
    let setToZero = 0;
    const counterIncrementHandler = () => {
        setCounter(counter+1);
        increased++;
    }
    const resetHandler = () => {
        setCounter(0);
        setToZero = 0;
    }
    useEffect(() => {
        console.log("Increment...");
    }, [increased])
    useEffect(() => {
        console.log("Reset...");
    }, [setToZero])

    return(
        <div>
            <div>
                <Header heading={"Counter"}/>
            </div>
            <div className="content">
                <div>
                    Counter is: {counter}
                </div>
                <div>
                    <button className="button" onClick={counterIncrementHandler}>Increment</button>
                </div>
                <div>
                    <button className="button" onClick={resetHandler}>Reset</button>
                </div>
                <div>
                    <Link to="/">
                        <button className="button">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Count;