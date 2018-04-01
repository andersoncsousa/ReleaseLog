import React, {Component} from 'react'
import {hashHistory} from 'react-router'

export default class Sprints extends Component{
    render(){
        const back = () => hashHistory.push('/')
        return(
            <div>
                <h1>Sprints</h1>
                <button onClick = {back} > Back </button>
            </div>
        )
    }
}