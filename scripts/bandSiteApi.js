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
      // const show = response.data.map(show => show.)
      console.log(response.data)
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}


async function fetchComments() {
  const api = "c94e5d12-3048-42b5-8ccb-c0f67f3faeb0";
  const bandSiteApi = new BandSiteApi(api);
  const showdates = await bandSiteApi.getShows();
  
}


export default BandSiteApi;