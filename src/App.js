import './scss/main.scss';
import './utils/variables';

import React, { Component } from 'react';
import { classes, ids, routes, utils } from './utils/variables';

import Details from './components/Details';
import Home from './components/Home';
import Results from './components/Results';
import { Route } from 'react-router-dom'

const apiKey = `${process.env.REACT_APP_GAVAGAI_API_KEY}`;
const apiKeyEndPoint = `apiKey=${apiKey}`;
const uri = `${process.env.REACT_APP_GAVAGAI_URI}`;
const similarWordsEndpoint = `${process.env.REACT_APP_GAVAGAI_SIMILAR_WORDS}`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '', // searched word
      results: [], // array of resulting words
      clickedResult: '', // clicked results in the results view
      resultInfo: {}, // information fetched based on clicked word
      locale: 'en' // language used for the fetch
    }
  }

  // Updates the state based on the clicked word
  handleClickedResult = (clickedResult) => {
    this.setState({clickedResult:clickedResult})
  }

  // Handles the search based on the query
  handleSearch = (e) => {
    e.preventDefault();
    const searchedTerm = document.getElementById(ids.searchWord).value;
    this.setState({
      query: searchedTerm
    }, () => { this.getResults() });
  }
  
  // Gets information from the clicked word
  getDetails = (clickedResult) =>   {
    const infoEndpoint = `${uri}/${this.state.locale}/${clickedResult}/${utils.info}?${apiKeyEndPoint}`;
    const resultInfo = fetch(`${infoEndpoint}`, {
      method: 'get'
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          this.setState({ resultInfo: res.data })
        })).catch(function(error) {
          console.log(error, 'error');
        });
        
    return resultInfo;
  }

  // Fetches the results from the similarWordsEndpoint 
  getResults = () => {
    const wordInfo = `${uri}/${this.state.locale}/${this.state.query}?${similarWordsEndpoint}&${apiKeyEndPoint}`;
    const results = fetch(`${wordInfo}`, {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        const similarWordsResults = results.semanticallySimilarWords;
        const similarWords = [];

        similarWordsResults.forEach(result => {
          similarWords.push(result.word)
        });

        this.setState({ results: similarWords })
      }).catch(function(error) {
        console.log(error, 'error');
      });

    return results;
  }

  render() {
    return (
      <div className={classes.app}>
        <Route exact path={routes.root} render={() =>
          <Home
            handleSearch={(e) => { this.handleSearch(e, this.state.query) }}
            languages={this.state.languages}
          />
        } />

        <Route path={routes.details} render={() =>
          <Details
            clickedResult={this.state.clickedResult}
            resultInfo={this.state.resultInfo}
            getDetails={this.getDetails}
          />
        }/>

        <Route path={routes.results} render={() =>
          <Results
            results={this.state.results}
            handleClickedResult={this.handleClickedResult}
            resultInfo={this.state.resultInfo}
          />
        }/>
      </div>
    )
  }
}

export default App;
