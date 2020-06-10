import React from 'react'

const Card =(props)=>{
    return (
        <div>
        <h2>{props.title}</h2>
        <p>{props.cases}</p>
        <p>{props.date}</p>
        <p>Number of {props.description} of COVID-19.</p>
        </div>
    )
}

export default Card ;