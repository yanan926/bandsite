class BandSiteApi {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  // get all commentss from api
  async getComments() {
    const response = await axios.get(`${this.baseUrl}/comments`);

    return response.data;
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

const bandSiteApi = new BandSiteApi()
bandSiteApi.getComments();