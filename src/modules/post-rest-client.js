import axios from 'axios'

class PostsRestClient {
  constructor() {
    this._authApi = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  /**
   * Get posts from api
   * @return {Promise}
   */

  getPosts = params => {
    return this._authApi.get('posts', params).then(({ data }) => data)
  }
}

const postRestClient = new PostsRestClient()

export default postRestClient
