import axios from 'axios'

class UserRestClient {
  constructor() {
    this._authApi = axios.create({
      baseURL: 'https://reqres.in/api/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  /**
   * Login
   * @return {Promise}
   */

  login = (email, password) => {
    return this._authApi.post('login', { email, password }).then(({ data }) => data)
  }
}

const userRestClient = new UserRestClient()

export default userRestClient
