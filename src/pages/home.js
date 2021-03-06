import React, { Component } from 'react'
import { Title } from '../components/title'
import { SearchForm } from '../components/searchForm'
import { MoviesList } from '../components/moviesList'

export class Home extends Component {
    state = {
        usedSearch: false,
        results: []
      }
    _handleResults = results => {
        if(results) this.setState({results, usedSearch: true})
     }
   
     _renderResults = () => {
       return this.state.results.length === 0
         ? <p>Ouch! :( results not found</p> 
         : <MoviesList movies={this.state.results}/>
       
     }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="searchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}
