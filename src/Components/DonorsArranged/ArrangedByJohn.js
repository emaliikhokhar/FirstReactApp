import React, { Component } from 'react'
import arrangedByMember from './arrangedBy'

class ArrangedByJohn extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1 onMouseOver={this.props.incHandle}> Donors Arranged: {this.props.donorsArr}</h1>
            </div>
        )
    }
}

export default arrangedByMember(ArrangedByJohn)
