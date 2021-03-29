// @flow
import postRestClient from '../modules/post-rest-client'

const useGetPosts = () => {
  const getPosts = async (params: Object = {}) => {
    try {
      return await postRestClient.getPosts(params)
    } catch (error) {
      return { hasError: true }
    }
  }

  return [getPosts]
}

export default useGetPosts
