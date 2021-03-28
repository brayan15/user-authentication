// @flow
import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import type { UserT } from '../../store/app/users/types'
import { makeGetUserByEmail } from '../../store/app/users/selectors'

type PropsT = {
  email: string
}

const UserListItem = ({ email }: PropsT) => {
  const userData = makeGetUserByEmail()
  const { first_name, avatar, last_name }: UserT = useSelector(state => userData(state, email))

  return (
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi architecto
        asperiores blanditiis cumque, cupiditate dolorem, dolorum ducimus ex excepturi facere
        incidunt nisi odit quis quisquam, reiciendis rem temporibus.
      </p>
    </Card>
  )
}

export default UserListItem
