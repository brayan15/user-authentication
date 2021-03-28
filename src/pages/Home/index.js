// @flow
import React from 'react'
import { List } from 'antd'
import UserListItem from '../../components/user-list-item'

const users = []

const Home = () => (
  <div className='home'>
    <List
      className='user-list'
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4
      }}
      dataSource={users}
      renderItem={user => (
        <List.Item>
          <UserListItem {...user} />
        </List.Item>
      )}
    />
  </div>
)

export default Home
