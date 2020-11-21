import React from 'react'
import InputForm from './InputForm/InputForm'
import ResultsList from './ResultsList/ResultsList'
import SWContext from './SWContext/SWContext'


export default class App extends React.Component{
  
  state = {
    results: []
  }
  handleSubmit = (data) => {
    if(data.count == 0){
      this.setState({
        ...this.state, results: [{name: 'No results found'}]
      })
      return
    }
      let firstKey = Object.keys(data.results[0])[0]
      let searchResults = data.results.map(current => {return {name: current[firstKey]}})
      this.setState({
        ...this.state, results: searchResults
      })
  }
  render(){
    console.log(this.state)
    return (
      <SWContext.Provider value={{results: this.state.results, handleSubmit: this.handleSubmit}}>
      <main>
      <InputForm />
      <ResultsList />
      </main>
      </SWContext.Provider>
    )
  }
}