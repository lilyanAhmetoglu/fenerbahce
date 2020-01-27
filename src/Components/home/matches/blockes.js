import React, { Component } from 'react'
import { firebaseMatches } from "../../../firebase";
import {firebaseLooper , reverseArray} from '../../ui/misc'
export default class Blockes extends Component {
    state ={
        matches: []
    }
    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot)
            this.setState({
                matches:reverseArray(matches)
            })
        })
    }
    showMtaches = () =>(
        <div>
            Matches
        </div>
    )
    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMtaches(this.state.matches)}
            </div>
        )
    }
}
