import React, { Component } from 'react';
import { classes, routes } from '../utils/variables';

import LinkButton from './LinkButton'
import { createBrowserHistory } from 'history';
import locale from '../assets/config.json';

const history = createBrowserHistory();

class Results extends Component {
  state = {
    clickedResult: ''
  }

  render() {
    const results = this.props.results;

    // Creates a listing of the words fetched as buttons
    const listResults = results.map((result) => {
      return (
        <LinkButton
          key={Math.random()}
          className={`${classes.button} ${classes.buttonPrimary}`}
          to={routes.details}
          onClick={(e) => { // on click handles the selected word
            e = e || window.event;
            var target = e.target || e.srcElement,
              text = target.textContent || target.innerText;
            this.props.handleClickedResult(text);
          }}
        >
          {result}
        </LinkButton>
      )
    })

    return (
      <div className={classes.resultsPage}>
        <div className={classes.resultsContainer}>
          <h1>{locale.en.resultsHeader}</h1>
          <div className={classes.resultsWrapper}>
            
            {listResults}
          </div>
          <div className={classes.resultsMenuWrapper}>
            <button className={`${classes.button} ${classes.buttonSecondary}`} onClick={(e) => { e.preventDefault(); history.goBack() }}>
              {locale.en.searchAgain}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;
