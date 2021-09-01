import React, { Component } from 'react'
import Header from "../Header/Header"
import { Link } from 'react-router-dom'
import './DonorsArranged.css'
import ArrangedByJohn from './ArrangedByJohn'
import arrangedByMember from './arrangedBy'

class DonorsArranged extends Component {
    render() {
        return (
            <div className="body">
                <div>
                    <Header heading="Donors by HOC" />
                </div>
                <div>
                    <ArrangedByJohn name="John" />
                </div>
                <div>
                    <Link to="/homepage">
                        <button className="btn">Back</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default arrangedByMember(ArrangedByJohn)