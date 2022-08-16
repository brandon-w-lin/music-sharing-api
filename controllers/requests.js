const axios = require("axios");
const spotify = require("./spotify");
const jwt =
  "BQCvDlQaWuu--JHYvXbbJiYmJwJ9oxzqsEkqjPiiyeMBDHgkq4xBTI945U1K7urZjj3QdJx80gqSApbPFTpQV69bji5bV7v__5XQc9XKVn-hPjjGrHIVULNXRv6VseibkiVTU7p8kF1lVMmz_hQYUn8x23DWQoAcQX_w2syXvZQ";
const config = {
  headers: {
    Authorization:
      "Bearer BQCvDlQaWuu--JHYvXbbJiYmJwJ9oxzqsEkqjPiiyeMBDHgkq4xBTI945U1K7urZjj3QdJx80gqSApbPFTpQV69bji5bV7v__5XQc9XKVn-hPjjGrHIVULNXRv6VseibkiVTU7p8kF1lVMmz_hQYUn8x23DWQoAcQX_w2syXvZQ",
  },
};

const determineSource = (req, res) => {};

const handleRequest = async (req, res) => {
  console.log("/requests call");
  console.log(await spotify.getLinkByISRC(req.body.isrc));
  // axios
  //   .get(
  //     "https://api.spotify.com/v1/search?q=isrc:USUG12204897&type=track",
  //     config
  //   )
  //   .then((response) => {
  //     console.log("success");
  //     res.status(200).send(response.data);
  //   })
  //   .catch((error) => {
  //     console.log("error");
  //     res.status(400).send(error);
  //   });
};

module.exports = { handleRequest };
