import React, {Component} from 'react'
import Header from "../Header/Header"
import { Link } from 'react-router-dom'
const arrangedByMember = Member => {
    class arrangedBy extends Component {

        state = {
            arranged: 0
        }

        incrementHandle = () => {
            this.setState( {arranged: this.state.arranged+1} )
        }

        render() {
            return (
                <div className="body">
                    
                    <div>
                        <Member incHandle={this.incrementHandle} donorsArr = {this.state.arranged} />
                    </div>
            
                </div>
            )
        }
    }
    return arrangedBy;
}

export default arrangedByMember;