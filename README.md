### About the GAVAGAI API
For an authenticated user, this method returns information about a term in the Gavagai Real Time lexicon (semantically similar words, left and right side neighbours, associations, string similar words, words starting with input word, words ending with input word and n grams with input word, as well as frequency and rank information):

- BaseUrl: https://api.gavagai.se/v3
- Endpoint: GET /lexicon/{language}/{word}
- Parameters (see API definition image attached for more info):
- apiKey (required)
- language (required)
- word (required)
- additionalFields: SEMANTICALLY_SIMILAR_WORDS
- Output (only the ones of relevance):
- semanticallySimilarWords : contains the words that in the given language have similar meaning to the word in input.
- wordInformation : informations about the word, such as its frequency of occurrence.


### Parameters
To change parameters, go to the .env file on the root of the project:

```
REACT_APP_GAVAGAI_API_KEY=YOURGAVAGAIAPIKEY
REACT_APP_GAVAGAI_URI=https://api.gavagai.se/v3/lexicon
REACT_APP_GAVAGAI_SIMILAR_WORDS=additionalFields=SEMANTICALLY_SIMILAR_WORDS
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

