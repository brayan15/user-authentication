// @flow
import React from 'react'
import { useDispatch } from 'react-redux'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Button, Row, Col, Spin, notification } from 'antd'
import useLogin from '../../hooks/useLogin'
import { setUserToken } from '../../utils/helpers'
import { succeedLogin } from '../../store/local/authentication/actions'

const LoginForm = () => {
  const [login] = useLogin()
  const dispatch = useDispatch()
  const [loginLoading, setIsLoginLoading] = React.useState(false)

  const openNotification = (description: string) => {
    notification.error({
      message: 'Error',
      description
    })
  }

  const onFinish = ({ email, password }: { email: string, password: string }) => {
    setIsLoginLoading(true)

    login(email, password).then(response => {
      setIsLoginLoading(false)
      if (response.hasError) {
        return openNotification(response.message)
      }

      setUserToken(response.token)
      dispatch(succeedLogin())
    })
  }

  const onFinishFailed = () => {
    setIsLoginLoading(false)
    openNotification('Please enter a valid Email or Password')
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
            name='email'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}
          >
            <Input
              autoComplete='off'
              placeholder='Email'
              prefix={<UserOutlined className='site-form-item-icon' />}
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
            {loginLoading ? (
              <Spin className='login-form__spin' />
            ) : (
              <Button type='primary' htmlType='submit' className='login-form__button'>
                Log in
              </Button>
            )}
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
