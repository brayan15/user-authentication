// @flow
import * as React from 'react'
import { Layout, Row, Col } from 'antd'
import Footer from '../footer'
import Header from '../header'
import useSetUser from '../../hooks/useSetUser'

type PropsT = {
  children: React.Node
}

const AppContainer = ({ children }: PropsT) => {
  const [setUser] = useSetUser()

  React.useEffect(() => {
    setUser()
  }, [])

  return (
    <Layout className='app__layout'>
      <Header />
      <Layout.Content className='container'>
        <Row className='w-100'>
          <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }}>
            {children}
          </Col>
        </Row>
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default AppContainer
