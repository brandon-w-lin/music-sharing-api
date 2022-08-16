const axios = require("axios");
const jwt =
  "BQBcVBHCrdynvC8HLlx6nwvG2Lb56sMQMEI68_ApAfcgHmDlkiOhPMDsNA-0nPrlOrwbYu7Jxph8MnzFpgRS3hWaEnVM0KpuzEmq64Rj0fp5TewDSMeJ6zgjwLGVSWkk8Pxqb6jmst1WX6AOwYvpN7CsY-pkRUn9biBoSFuZKPI";
const config = {
  headers: {
    Authorization: "Bearer " + jwt,
  },
};

const getLinkByISRC = async (isrc) => {
  console.log("spotify search call");
  return new Promise((res, rej) => {
    axios
      .get(
        `https://api.spotify.com/v1/search?q=isrc:${isrc}&type=track`,
        config
      )
      .then((response) => {
        console.log("success");
        const link = response.data.tracks.items[0].external_urls.spotify;
        res(link);
      })
      .catch((error) => {
        console.log("error");
        rej(error);
      });
  });
};

module.exports = { getLinkByISRC };
