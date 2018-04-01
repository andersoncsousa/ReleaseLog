import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import ReleaseForm from '../ui/releaseForm'

export default class Releases extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeRelese = this.removeRelese.bind(this)
        this.state = {
            releases: [
                {
                    id:1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2018'
                },
                {
                    id:2,
                    releaseName: 'Release 02',
                    releaseDate: '01/01/2019'
                },
                {
                    id:3,
                    releaseName: 'Release 03',
                    releaseDate: '01/01/2020'
                },
                {
                    id:4,
                    releaseName: 'Release 04',
                    releaseDate: '01/01/2021'
                }
            ]
        }
    }
    handleSubmit(e, {name, date}){
        e.preventDefault()
        var state = this.state
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)})
    }

    removeRelese (e){
        e.setState(
            {e : state.releases.id.splice(state.releases[0], state.releases.id)}
        )
    }

    render(){
        const back = () => hashHistory.push('/')

        return(
            <div className="container" style={{paddingTop:'25px'}}>
                <ReleaseForm submitHandler={this.handleSubmit}/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Release Name</th>
                            <th scope="col">Release Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return(
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" onClick={this.removeRelese({index})} key={index} class="btn btn-outline-danger btn-sm">X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick = {back} > Back </button>
            </div>
        )
    }
}