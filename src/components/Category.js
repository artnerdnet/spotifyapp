import React, { Component } from 'react';

import { classes } from '../utils/variables';

class Category extends Component {

  render() {
    return (
      <div className={classes.categoryContainer}>
        <h3>{this.props.name}</h3>
        <img src={this.props.imgURL} alt={this.props.name} className={classes.categoryCoverImg} href={this.props.externalURL} />
      </div>
    )
  }
}

export default Category;
