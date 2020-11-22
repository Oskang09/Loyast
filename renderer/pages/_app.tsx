import '../../resources/antd.less';

import React, { Fragment } from 'react';
import { Layout, Col, Row } from 'antd';
import { QrcodeOutlined, TransactionOutlined, TrophyOutlined } from '@ant-design/icons';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { processRoute } from '../utils/general';

const { Header } = Layout;

const Content = styled(Layout.Content)`
  margin-bottom: 60px;
`;

const Footer = styled(Layout.Footer)`
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 12px;
`;

const setId = (selected) => selected ? { id: 'antd-primary' } : {};
const bottomBar = [
  {
    route: processRoute('/loyalty'),
    icon: (selected) => <TransactionOutlined {...setId(selected)} style={{ fontSize: 20 }} />,
    title: (selected) => <p {...setId(selected)}>Loyalty</p>
  },
  {
    route: processRoute('/qrcode'),
    icon: (selected) => <QrcodeOutlined {...setId(selected)} style={{ fontSize: 20 }} />,
    title: (selected) => <p {...setId(selected)}>User QR</p>
  },
  {
    route: processRoute('/reward'),
    icon: (selected) => <TrophyOutlined {...setId(selected)} style={{ fontSize: 20 }} />,
    title: (selected) => <p {...setId(selected)}>Rewards</p>
  },
];


function LoyastApp({ Component, pageProps, router }) {
  const { title } = pageProps;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf8" />
        <title>{title}</title>
      </Helmet>
      <Fragment>
        <Header>
          <p style={{ color: 'white' }}>
            {pageProps.title}
          </p>
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>
          <Row gutter={[0, 0]}>
            {
              bottomBar.map((item, index) => {
                const selected = item.route === router.route;
                return (
                  <Col onClick={() => router.replace(item.route)} key={`bottom-bar-${index}`} span={24 / bottomBar.length}>
                    <div>
                      {item.icon(selected)}
                      {item.title(selected)}
                    </div>
                  </Col>
                );
              })
            }
          </Row>
        </Footer>
      </Fragment>
    </Layout>
  );
}

export default LoyastApp;
