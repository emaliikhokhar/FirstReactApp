import React, { Component } from 'react'
import arrangedByMember from './arrangedBy'

class ArrangedByDavid extends Component {
    render() {
        return (
            <div>
                <h1>Name: John</h1>
                <h1>Blood Group: {this.props.donorsArr}</h1>
            </div>
        )
    }
}

export default arrangedByMember(ArrangedByDavid)