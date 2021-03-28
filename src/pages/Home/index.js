// @flow
import React from 'react'
import { List, Spin, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import useGetUsers from '../../hooks/useGetUsers'
import UserListItem from '../../components/user-list-item'
import { getUsersAsArray, isUsersLoading } from '../../store/app/users/selectors'
import { setFailedUsers, setLoadingUsers, setSuccessUsers } from '../../store/app/users/actions'

const Home = () => {
  const [getUsers] = useGetUsers()
  const dispatch = useDispatch()
  const users = useSelector(getUsersAsArray)
  const isLoading = useSelector(isUsersLoading)

  const openNotification = () => {
    notification.error({
      message: 'Error',
      description: 'Failed getting users, please try it again.'
    })
  }

  React.useEffect(() => {
    dispatch(setLoadingUsers())

    getUsers().then(response => {
      if (response.hasError) {
        openNotification()

        return dispatch(setFailedUsers())
      }

      dispatch(setSuccessUsers(response.data))
    })
  }, []) //eslint-disable-line

  return (
    <div className='home'>
      {isLoading ? (
        <Spin />
      ) : (
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
              <UserListItem email={user} />
            </List.Item>
          )}
        />
      )}
    </div>
  )
}

export default Home
