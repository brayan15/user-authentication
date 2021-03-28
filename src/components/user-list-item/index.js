// @flow
import React from 'react'
import { Card } from 'antd'

type PropsT = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

const UserListItem = ({ email, first_name, last_name, avatar }: PropsT) => (
  <Card
    className='user-list__item'
    extra={<a href='/'>More</a>}
    title={`${first_name}, ${last_name}`}
    cover={<img alt='example' src={avatar} className='user-list__photo' />}
  >
    <p>
      <b>Email:</b> {email}
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi architecto asperiores
      blanditiis cumque, cupiditate dolorem, dolorum ducimus ex excepturi facere incidunt nisi odit
      quis quisquam, reiciendis rem temporibus.
    </p>
  </Card>
)

export default UserListItem
