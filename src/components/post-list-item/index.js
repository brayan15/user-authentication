// @flow
import React from 'react'
import { List, Avatar } from 'antd'
import { useSelector } from 'react-redux'
import { makeGetPostById } from '../../store/app/users/selectors'

type PropsT = {
  postId: number,
  userId: number,
  avatar: string
}

const PostListItem = ({ postId, avatar, userId }: PropsT) => {
  const getPost = makeGetPostById()
  const post = useSelector(state => getPost(state, userId, postId))

  return (
    <List.Item.Meta avatar={<Avatar src={avatar} />} title={post.title} description={post.body} />
  )
}

export default PostListItem
