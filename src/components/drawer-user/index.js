// @flow
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Drawer, Form, Button, Input, Spin, Avatar, List } from 'antd'
import PostListItem from '../post-list-item'
import useGetPosts from '../../hooks/useGetPosts'
import type { UserBaseT, UpdateUserT } from '../../store/app/users/types'
import { setSuccessPosts } from '../../store/app/users/actions'
import { makeGetPostsByUserIdAsArray } from '../../store/app/users/selectors'

type PropsT = UserBaseT & {
  visible: boolean,
  onSave: Function,
  onClose: Function,
  isLoadingUpdate: boolean
}

const DrawerUser = ({
  id,
  email,
  avatar,
  onSave,
  visible,
  onClose,
  last_name,
  first_name,
  isLoadingUpdate
}: PropsT) => {
  const dispatch = useDispatch()
  const [getPosts] = useGetPosts()
  const postsAsArray = makeGetPostsByUserIdAsArray()
  const posts = useSelector(state => postsAsArray(state, id))
  const params = {
    params: {
      userId: id
    }
  }

  React.useEffect(() => {
    getPosts(params).then(response => {
      if (response.hasError) return

      dispatch(setSuccessPosts(response, id))
    })
  }, [])

  return (
    <Drawer
      width={400}
      onClose={onClose}
      visible={visible}
      className='drawer-user'
      title={
        <div className='drawer-user__title'>
          <Avatar src={avatar} className='drawer-user__title-avatar' />
          <p className='drawer-user__title-name'>
            Edit {first_name} {last_name}
          </p>
        </div>
      }
      footer={
        <div className='drawer-user__bottom-button'>
          <Button onClick={onClose}>Close</Button>
        </div>
      }
    >
      <Form
        layout='vertical'
        initialValues={{
          email,
          first_name,
          last_name
        }}
        onFinish={(formData: UpdateUserT) => onSave(formData)}
      >
        <Form.Item name='email' label='Email'>
          <Input disabled prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item
          label='First Name'
          name='first_name'
          rules={[
            {
              required: true,
              message: 'Please input First Name'
            }
          ]}
        >
          <Input
            autoComplete='off'
            placeholder='First Name'
            prefix={<UserOutlined className='site-form-item-icon' />}
          />
        </Form.Item>

        <Form.Item
          label='Last Name'
          name='last_name'
          rules={[
            {
              required: true,
              message: 'Please input Last Name'
            }
          ]}
        >
          <Input
            autoComplete='off'
            placeholder='Last Name'
            prefix={<UserOutlined className='site-form-item-icon' />}
          />
        </Form.Item>

        <Form.Item>
          {isLoadingUpdate ? (
            <Spin className='drawer-user__form-spin' />
          ) : (
            <Button type='primary' htmlType='submit' className='drawer-user__form-button'>
              Update user
            </Button>
          )}
        </Form.Item>
      </Form>
      <div>
        <h2>Blog Posts</h2>
        <List
          itemLayout='horizontal'
          dataSource={posts}
          pagination={{
            pageSize: 2
          }}
          renderItem={postId => (
            <List.Item>
              <PostListItem userId={id} postId={postId} avatar={avatar} />
            </List.Item>
          )}
        />
      </div>
    </Drawer>
  )
}

export default DrawerUser
