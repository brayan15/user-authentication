// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserToken } from '../../utils/helpers'
import { logOut } from '../../store/local/authentication/actions'
import { isUserLogged } from '../../store/local/authentication/selectors'

const Header = () => {
  const isLogged = useSelector(isUserLogged)
  const dispatch = useDispatch()

  const onLogOutClick = () => {
    dispatch(logOut())
    removeUserToken()
  }

  return (
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
              {isLogged ? (
                <li className='header__menu-item'>
                  <Button
                    type='link'
                    onClick={onLogOutClick}
                    icon={<LogoutOutlined className='header__menu-icon' />}
                  />
                </li>
              ) : null}
            </ul>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
