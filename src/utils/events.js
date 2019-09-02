
const apiKey = `3acdef1f01cbceb88b132158abd466da`;
const local = 'en';
const apiKeyEndPoint = `apiKey=${apiKey}`;
const uri = 'https://api.gavagai.se/v3/lexicon/';

export const getResults = (query) => {
    const wordInfo = `${uri}${local}${query}/info?${apiKeyEndPoint}`; 
    const results = fetch(`${wordInfo}`, {
        method: "get"
    })
        .then((response) => {
            return response.json()
        }).catch(function(error) {
            console.log(error);
          });

    return results;
}

export const getResultInfo = (result) => {
    const infoEndpoint = `${uri}${local}/${result}/info?${apiKeyEndPoint}`;
    const results = fetch(`${infoEndpoint}`, {
        method: "get"
    })
        .then((response) => {
            return response.json()
        }).catch(function(error) {
            console.log(error);
          });

    return results;
}