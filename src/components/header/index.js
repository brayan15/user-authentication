// @flow
import React from 'react'
import { Layout, Row, Col } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = () => (
  <Layout.Header className='header'>
    <Row className='w-100'>
      <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }} className='header__container'>
        <div className='header__branding'>
          <a href='/' className='header__branding-link'>
            User Authentication
          </a>
        </div>
        <div className='header__menu-wrapper'>
          <ul className='header__menu-nav'>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Home
              </Link>
            </li>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Album
              </Link>
            </li>
            <li className='header__menu-item'>
              <LogoutOutlined className='header__menu-icon' />
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Layout.Header>
)

export default Header
