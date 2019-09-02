import React, { Component } from 'react';

import Search from './search/Search';
import { classes } from '../utils/variables';

class Home extends Component {

  render() {
    return (
      <div className={classes.homePage}>
        <Search
          handleSearch={(e) => { this.props.handleSearch(e, this.props.query) }}
        />
      </div>
    )
  }
}

export default Home;
