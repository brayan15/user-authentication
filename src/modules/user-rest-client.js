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

  /**
   * Get users from api
   * @return {Promise}
   */

  // URL with param, this is because I know total of users, for that reason I'm getting user in this way
  getUsers = () => {
    return this._authApi.get('users?per_page=12').then(({ data }) => data)
  }

  /**
   * Update user from api
   * @return {Promise}
   */

  updateUser = (userId, email, first_name, last_name) => {
    return this._authApi
      .put(`users/${userId}`, { email, first_name, last_name })
      .then(({ data }) => data)
  }
}

const userRestClient = new UserRestClient()

export default userRestClient
