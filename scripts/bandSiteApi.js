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
    } catch (err) {
      console.log(err);
    }
  }

  //get all shows from api
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

  //function to add likes to the comments, take comment id as the argument
  async addLike(id) {
    try {
      const response = await axios.put(
        `${this.baseUrl}/comments/${id}/like/?api_key=${this.apiKey}`
      );
      return response.data.likes;
    } catch (err) {
      console.log(err);
    }
  }

     //function to delete the comment, take comment id as the argument
  async deleteComment(id) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/comments/${id}/?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default BandSiteApi;