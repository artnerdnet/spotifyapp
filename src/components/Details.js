import React, { Component } from 'react';
import { URLregex, classes, routes, utils } from '../utils/variables';

import LinkButton from './LinkButton'
import { createBrowserHistory } from 'history';
import locale from '../assets/config.json';
import { toggleEllipsis } from '../utils/helpers';

export const history = createBrowserHistory();


class Details extends Component {
  state = {
    wordInfo: [] // contains the information about the word
  }

  // Creates an array of objects from the fetched results
  createResultsInfoArray = async () => {
    const wordInfoArray = [];

    Object.entries(this.props.resultInfo).forEach((entry) => {
      var entryObj = { [entry[0]]: entry[1] };
      wordInfoArray.push(entryObj);
    })

    await this.setState({ wordInfo: wordInfoArray })
  }

  componentDidMount() {
    // Calls the getDetails() function to fetch information about the selected clicked result in the Results screen
    this.props.getDetails(this.props.clickedResult).then(() => {
      this.createResultsInfoArray(this.props.resultInfo)
    })
  }

  render() {
    const items = () => {
      if (this.state.wordInfo.length > 1) { // if there are fetched results then show the information
        return (
          <div className={classes.detailsTextContainer}>
            <h2>{this.state.wordInfo[0].word}</h2>
            <div className={classes.detailsTextWrapper}>
              {
                this.state.wordInfo.map((element) => {
                  const key = Object.keys(element).toString().replace(utils.camelCaseSeparatorRegex); // replaces the camel case for spaces
                  let value;

                  if (Object.keys(element) == utils.additionalInformation) { // eslint-disable-line
                    value = Object.values(Object.values(element)[0]);
                  } else {
                    value = (Object.values(element));
                  }

                  return (
                    <li key={Math.floor(Math.random() * 10000)}>
                      <h3 key={Math.floor(Math.random() * 10000)}>
                        {
                          `${key}: `
                        }</h3>

                      {URLregex.test(value) // checks if the value is a website
                        ? <a href={value} rel={`${utils.noOpener} ${utils.noReferrer}`} target={utils.detailsTextContainer} >{value}</a>
                        : <p className={classes.ellipsis} onClick={(e) => { toggleEllipsis(e, this) }}>{value}</p>
                      }
                    </li>
                  )
                })
              }
            </div>
          </div>
        )
      } else {
        return (
          // Shows loading text while the info it's being fetched 
          <div className={classes.detailsTextContainer}>
            <h2>{locale.en.loading}</h2>
          </div>
        )
      }
    }

    return (
      <div className={classes.detailsPage}>
        <div className={classes.detailsPageMenuContainer}>
          <h1>{locale.en.details}</h1>
          <div className={classes.detailsPageMenuButtons}>
            <LinkButton
              key={this.props.result}
              className={`${classes.button} ${classes.buttonPrimary}`}
              to={routes.root}
            >
              {locale.en.searchAgain}
            </LinkButton>

            <LinkButton
              key={this.props.result}
              className={`${classes.button} ${classes.buttonSecondary}`}
              to={routes.results}
              onClick={(e) => { e.preventDefault(); history.goBack() }}
            >
              {locale.en.previousResults}
            </LinkButton>
          </div>
        </div>
        <ol>
          {items()}
        </ol>
      </div>
    )
  }
}

export default Details;
