import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Drawer, Form, Button, Input, Spin, Avatar } from 'antd'
import type { UserT } from '../../store/app/users/types'

type PropsT = UserT & {
  visible: boolean,
  onSave: Function,
  onClose: Function,
  isLoadingUpdate: boolean
}

const DrawerUser = ({
  email,
  avatar,
  onSave,
  visible,
  onClose,
  last_name,
  first_name,
  isLoadingUpdate
}: PropsT) => {
  return (
    <Drawer
      width={400}
      onClose={onClose}
      visible={visible}
      className='drawer-user'
      title={
        <div className='drawer-user__title'>
          <Avatar src={avatar}  className='drawer-user__title-avatar'/>
          <p className='drawer-user__title-name'>Edit {first_name} {last_name}</p>
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
        onFinish={(formData: BasicUserT) => onSave(formData)}
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
    </Drawer>
  )
}

export default DrawerUser
