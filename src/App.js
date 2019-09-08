import './scss/main.scss';
import './utils/variables';

import React, { Component } from 'react';

import Home from './components/Home';
import { classes } from './utils/variables';

const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTHORIZE_URI;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

class App extends Component {

  state = {
    token: ''
  }

  // Taken from https://stackoverflow.com/questions/48104039/spotify-application-requests-authorization/48118278
  authorizeApp = () => {
    // Get the hash of the url
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = '';

    // Set token
    let _token = hash.access_token;

    // If there is no token, redirect to Spotify authorization
    if (!_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
    }

    return _token;
  }

  componentDidMount = () => {
    const token = this.authorizeApp()
    this.setState({ token: token })
  }

  render() {
    let home;

    if (this.state.token.length > 1) {
      home = <Home token={this.state.token} />
    }

    return (
      <div className={classes.app}>
        {home}
      </div>
    )
  }
}

export default App;
