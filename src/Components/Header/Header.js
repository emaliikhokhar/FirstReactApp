import React, { Component } from "react";
import './Header.css'

//FUNCTIONAL COMPONENT
// const Header = (props) => {
// return <h1>{props.heading}</h1>
// }

//CLASS COMPONENT
class Header extends Component{

    render(){
        return (<h1 className="headerr">
            {this.props.heading}</h1>
        )
    }
}


export default Header;

// componentWillUnmount(){
//     console.log("Unmounted");
// }