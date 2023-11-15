class BandSiteApi {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseUrl = "https://project-1-api.herokuapp.com";
  }

  // get all commentss from api
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments/?api_key=${this.apiKey}`
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  // post new comment to api - requires a comment object as its second argument
  async postComments(comment) {
    const response = await axios.post(
      `${this.baseUrl}/jokes?api_key=${this.apiKey}`,
      comment
    );
    console.log(response);
  }
}

async function getComments() {
  const api = "c94e5d12-3048-42b5-8ccb-c0f67f3faeb0";
  const bandSiteApi = new BandSiteApi(api);
  const comments = await bandSiteApi.getComments();
  console.log(comments);
}

getComments()
