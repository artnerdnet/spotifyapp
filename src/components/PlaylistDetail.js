import React, { Component } from 'react';
import { classes, routes, utils } from '../utils/variables';

import { Link } from 'react-router-dom'
import { es } from '../assets/config.json';

const playlistResource = process.env.REACT_APP_ENDPOINT_PLAYLISTS
const countryResource = `country=${es.locale}`;
const accessToken = `access_token=`;
const uri = `${process.env.REACT_APP_SPOTIFY_URI}`;
const resultLimit = `limit=10`;

class PlaylistDetail extends Component {
  state = {
    playlistsReturned: {}
  }

  // get playlists under the category id
  getPlaylists = () => {
    const playlistsEndpoint = `${uri}/${process.env.REACT_APP_ENDPOINT_CATEGORIES}/${this.props.clickedCategory.id}/${playlistResource}?${countryResource}&${accessToken}${this.props.token}&${resultLimit}`
    const playlistsReturned = fetch(`${playlistsEndpoint}`, { // to playlistsReturned
      method: 'get'
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          this.setState({ playlistsReturned: res.data })
        })).catch(function (error) {
          console.log(error, 'error');
        });

    return playlistsReturned;
  }

  componentDidMount() {
    this.getPlaylists()
  }

  render() {


    return (
      <div className={classes.playlistsPage}>
        <div className={classes.playlistsContainer}>
          <h1>{es.playlistsHeader}</h1>
          <h2>{this.props.clickedCategory.name}</h2>
          <Link to={routes.root}>{es.goBack}</Link>
          <div className={classes.playlistsWrapper}>
            {this.state && this.state.playlistsReturned.playlists &&
              <table>
                <tbody>
                  {this.state.playlistsReturned.playlists.items.map((playlist, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img alt={playlist.name} className={classes.playlistCoverImg} src={playlist.images[0].url} />
                        </td>
                        <td>
                          <h2>{playlist.name}</h2>
                        </td>
                        <td>
                          <a href={playlist.external_urls.spotify} className={classes.playlistsLink} rel={`${utils.noOpener} ${utils.noReferrer}`} target={utils.blank}>{es.goToPlaylist}</a>
                        </td>
                      </tr>

                    )
                  })}

                </tbody>
              </table>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistDetail;
