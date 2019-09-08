# About this app
This app works with the Spotify API fetching all the categories and the top ten lists of the chosen category.

## How to set it up
To make this App work you need to:
1. create an account at the [Developers Spotify website](https://developer.spotify.com/dashboard/login)
2. In the dashboard, create a new app in Javascript language
3. Add the redirect URIs (in case of running locally: localhost:3000)
4. In the dashboard you will find your Client ID to replace in the .env file (see next section for specs)

### Parameters
To set the parameters, create or go to the .env file on the root of the project:

```
REACT_APP_SPOTIFY_URI=https://api.spotify.com/v1
REACT_APP_ENDPOINT_CATEGORIES=browse/categories
REACT_APP_ENDPOINT_PLAYLISTS=playlists
REACT_APP_SPOTIFY_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXX
REACT_APP_SPOTIFY_AUTHORIZE_URI=https://accounts.spotify.com/authorize
REACT_APP_REDIRECT_URI=http://localhost:3000/
```

### Language config file
If you want to change strings or add translations please do so in the `/src/asses/config.json`


# Create React App instructions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

