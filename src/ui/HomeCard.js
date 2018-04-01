import React from 'react'

const HomeCard = (props) => {
    return(
        <div classNameName="col-12 col-sm-4" style={{paddingTop:'15px', margin:'0 auto'}}>
        <div className="card" style={{width: '16rem'}}>
            <img className="card-img-top rounded mx-auto d-block" style={{paddingTop:'5px', width: '100px', height:'100px'}} src="http://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action} >{props.title}</button>
            </div>
        </div> 
        </div>
    )
}

export default HomeCard