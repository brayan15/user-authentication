// @flow
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import { Card, Button, notification } from 'antd'
import DrawerUser from '../drawer-user'
import useUpdateUser from '../../hooks/useUpdateUser'
import type { UserT } from '../../store/app/users/types'
import { makeGetUserByEmail } from '../../store/app/users/selectors'
import { successUpdateUser } from '../../store/app/users/actions'

type PropsT = {
  email: string
}

const messageTypes = {
  ERROR: {
    type: 'error',
    message: 'Error',
    description: 'User can not be updated.'
  },
  SUCCESS: {
    type: 'success',
    message: 'Successful',
    description: 'User was updated successful.'
  }
}

const UserListItem = ({ email }: PropsT) => {
  const dispatch = useDispatch()
  const userData = makeGetUserByEmail()
  const [updateUser] = useUpdateUser()
  const [showDrawer, setShowDrawer] = React.useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = React.useState(false)
  const { id, first_name, avatar, last_name }: UserT = useSelector(state => userData(state, email))

  const openNotification = ({
    type,
    message,
    description
  }: {
    type: string,
    message: string,
    description: string
  }) => {
    notification[type]({
      message,
      description
    })
  }

  const onUpdateUser = ({ email, first_name, last_name }: UserT) => {
    setIsLoadingUpdate(true)

    updateUser({ id, email, first_name, last_name }).then(response => {
      setIsLoadingUpdate(false)

      if (response.hasError) {
        setShowDrawer(false)

        return openNotification(messageTypes['ERROR'])
      }

      dispatch(successUpdateUser({ email, first_name, last_name, avatar }))

      return openNotification(messageTypes['SUCCESS'])
    })
  }

  return (
    <>
      <Card
        className='user-list__item'
        extra={<Button type='link' onClick={() => setShowDrawer(true)} icon={<PlusOutlined />} />}
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
      <DrawerUser
        email={email}
        avatar={avatar}
        visible={showDrawer}
        onSave={onUpdateUser}
        last_name={last_name}
        first_name={first_name}
        isLoadingUpdate={isLoadingUpdate}
        onClose={() => setShowDrawer(false)}
      />
    </>
  )
}

export default UserListItem
