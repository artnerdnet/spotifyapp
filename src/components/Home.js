import React, { Component } from 'react';
import { classes, routes } from '../utils/variables';

import Categories from './Categories';
import PlaylistDetail from './PlaylistDetail';
import { Route } from 'react-router-dom'
import { es } from '../assets/config.json';

const countryResource = `country=${es.locale}`;
const URI = process.env.REACT_APP_SPOTIFY_URI;
const categoriesEndpoint = `${URI}/${process.env.REACT_APP_ENDPOINT_CATEGORIES}?${countryResource}`;


class Home extends Component {
  state = {
    categories: [],
    clickedCategory: {},
  }

  // Updates the state based on the clicked category
  handleClickedCategory = (category) => {
    this.setState({
      clickedCategory: category
    });
  }

  getCategories = () => {
    debugger
    const categories = fetch(`${categoriesEndpoint}&access_token=${this.props.token}`, {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((categories) => {
        this.setState({ categories: categories.categories.items })
      }).catch(function (error) {
        console.log(error, 'error');
      });

    return categories;
  }


  componentDidMount() {
    this.getCategories()
  }

  render() {
    return (
      <div className={classes.homePage}>
        <Route exact path={routes.root} render={() =>
          <Categories
            categories={this.state.categories}
            getPlaylists={this.getPlaylists}
            handleClickedCategory={this.handleClickedCategory}
          />
        } />
        <Route path={`${routes.playlists}/${this.state.clickedCategory.id}`} render={() =>
          <PlaylistDetail
            clickedCategory={this.state.clickedCategory}
            token={this.props.token}
          />
        } />
      </div>
    )
  }
}

export default Home;
