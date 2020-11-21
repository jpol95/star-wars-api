import React from 'react'
import SWContext from '../SWContext/SWContext'

export default class InputForm extends React.Component{
    static contextType = SWContext
    BASE_URL = `https://swapi-thinkful.herokuapp.com/api/`
    state= {
        searchQuery:'', category: 'people'
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${this.BASE_URL}${this.state.category}/?search=${this.state.searchQuery}`).then(res => res.json()).then(data =>{
            this.context.handleSubmit(data)
        })
    }

    handleQueryChange = (e) => {
        e.stopPropagation()
        this.setState({
            ...this.state, searchQuery: e.target.value
        })
    }

    handleChangeCategory = (e) => {
        this.setState({
            ...this.state, category: e.target.value
        })
    }

    render(){
       return <form className="search-form" onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChangeCategory(e)}>
            <label htmlFor="search-query">Search</label>
            <input name="category" id="search-query" type="text" onChange={(e) => this.handleQueryChange(e)}/>
            <label htmlFor="starships">Star Ships</label>
            <input name="category" id="starships" value="starships" type="radio" />
            <label htmlFor="vehicles">Vehicles</label>
            <input name="category" id="vehicles" value="vehicles" type="radio" />
            <label htmlFor="people">People</label>
            <input name="category" id="people" value="people" type="radio" />
            <label htmlFor="films">Films</label>
            <input name="category" id="films" value="films" type="radio" />
            <label htmlFor="species">Species</label>
            <input name="category" id="species" value="species" type="radio" />
            <button type="submit">Submit</button>
        </form>
    }
}