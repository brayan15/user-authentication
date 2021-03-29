// @flow
import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Card, Button, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import DrawerUser from '../drawer-user'
import useUpdateUser from '../../hooks/useUpdateUser'
import { makeGetUserById } from '../../store/app/users/selectors'
import { successUpdateUser } from '../../store/app/users/actions'
import type { UpdateUserT, UserT } from '../../store/app/users/types'

type PropsT = {
  userId: number
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

const UserListItem = ({ userId }: PropsT) => {
  const dispatch = useDispatch()
  const userData = makeGetUserById()
  const [updateUser] = useUpdateUser()
  const [showDrawer, setShowDrawer] = React.useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = React.useState(false)
  const { id, first_name, avatar, last_name, email, posts }: UserT = useSelector(state =>
    userData(state, userId)
  )

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

  const onUpdateUser = (formData: UpdateUserT) => {
    setIsLoadingUpdate(true)

    updateUser({ ...formData, id }).then(response => {
      setIsLoadingUpdate(false)

      if (response.hasError) {
        setShowDrawer(false)

        return openNotification(messageTypes['ERROR'])
      }

      dispatch(successUpdateUser({ ...formData, id, avatar, posts }))

      return openNotification(messageTypes['SUCCESS'])
    })
  }

  return (
    <>
      <Card
        className='user-list__item'
        title={`${first_name}, ${last_name}`}
        cover={<img alt='example' src={avatar} className='user-list__photo' />}
        extra={<Button type='link' onClick={() => setShowDrawer(true)} icon={<PlusOutlined />} />}
      >
        <p>
          <b>Email:</b> {email}
        </p>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi architecto
          asperiores blanditiis cumque, cupiditate dolorem, dolorum ducimus ex excepturi facere
          incidunt nisi odit quis quisquam, reiciendis rem temporibus.
        </p>
      </Card>
      <DrawerUser
        id={id}
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
