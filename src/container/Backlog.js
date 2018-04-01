import React, {Component} from 'react'
import {hashHistory} from 'react-router'

export default class Backlog extends Component{
    render(){
        const back = () => hashHistory.push('/')
        return(
            <div>
                <h1>Backlog</h1>
                <button onClick = {back} > Back </button>
            </div>
        )
    }
}