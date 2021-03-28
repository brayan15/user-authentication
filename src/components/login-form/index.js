// @flow
import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const onFinish = values => {
    //console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo)
  }

  return (
    <Row className='login-form'>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 18, offset: 3 }}
        md={{ span: 12, offset: 6 }}
        xxl={{ span: 8, offset: 8 }}
        className='login-form__col'
      >
        <h1 className='login-form__title'>Sign in</h1>
        <Form
          layout='vertical'
          name='login-form'
          onFinish={onFinish}
          className='login-form__form'
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form__button'>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className='login-form__forgot'>
          <a href='/' className='login-form__forgot_link'>
            Forgot your password?
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default LoginForm
