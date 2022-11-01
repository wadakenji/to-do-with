import React, { PropsWithChildren } from 'react';
import { Layout as AntdLayout } from 'antd';

const { Header, Content } = AntdLayout;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdLayout>
      <Header>
        <div style={{ color: 'white', fontSize: 20 }}>
          いつかやりたい
        </div>
      </Header>
      <Content
        style={{
          padding: '20px 40px 0 40px',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Content>
    </AntdLayout>
  );
};

export default Layout;
