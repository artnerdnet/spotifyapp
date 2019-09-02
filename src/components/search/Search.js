import React, { Component } from 'react';
import { classes, ids, routes, utils } from '../../utils/variables';

import LinkButton from '../LinkButton'
import locale from '../../assets/config.json';

class Search extends Component {
  render() {
    return (
      <div className={classes.searchPage}>
        <h1>{locale.en.searchHeader}</h1>
        <div className={classes.searchContainer}>
          <form className={classes.searchInputForm}>
            <input
              type={utils.typeText}
              className={classes.searchInputText}
              placeholder={locale.en.searchPlaceholder}
              id={ids.searchWord}
              required />
            <LinkButton
              key={this.props.result}
              className={`${classes.button} ${classes.buttonSecondary}`}
              to={routes.results}
              onClick={(e) => {
                this.props.handleSearch(e, this.props.query)
              }}
            >
              {locale.en.search}
            </LinkButton>
          </form>
          <div id={ids.errorContainer}><p>{locale.en.formMessage}</p></div>
        </div>
      </div>
    )
  }
}

export default Search;