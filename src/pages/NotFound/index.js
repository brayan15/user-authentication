// @flow
import React from 'react'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className='not-found'>
    <Result
      title='404'
      status='404'
      extra={
        <Link to='/' className='not-found__link'>
          Back Home
        </Link>
      }
      subTitle='Sorry, the page you visited does not exist.'
    />
  </div>
)

export default NotFound
