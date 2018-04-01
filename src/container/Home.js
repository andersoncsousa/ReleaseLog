import React, { Component } from 'react'
import HomeCard from '../ui/HomeCard'
import {hashHistory} from 'react-router'

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Maneger Realeses',
        action: () => hashHistory.push('/releases')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Maneger Backlog',
        action: () => hashHistory.push('/backlog')
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Maneger Sprints',
        action: () => hashHistory.push('/sprints')
    }

    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title}
                    text={this.homeCardReleases.text}
                    action={this.homeCardReleases.action}/>
                    <HomeCard {...this.homeCardBacklog}/>
                    <HomeCard {...this.homeCardSprints}/>
                </div>
            </div>
        );
    }
}