export class BandSiteApi {
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

  // post new comment to api - requires a comment object as its second argument, the header as the third argument
  async postComments(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/comments/?api_key=${this.apiKey}`,
        comment,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/showdates/?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async addLike(id) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments/${id}/like/?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default BandSiteApi;