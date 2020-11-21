import React from 'react'
import SWContext from '../SWContext/SWContext'

export default class ResultList extends React.Component{
    
    static contextType = SWContext
    makeMap(){
        return this.context.results.map(current => {
            return <li>{current.name}</li>
        })
    }
    static contextType = SWContext
    render(){
        return <ul>
            {this.makeMap()}
        </ul>
    }
}