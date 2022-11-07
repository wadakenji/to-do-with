import React, { PropsWithChildren } from 'react';
import { Layout as AntdLayout } from 'antd';
import { css } from '@emotion/react';

const { Header, Content } = AntdLayout;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdLayout>
      <Header>
        <h2 css={style.title}>いつかやりたい</h2>
      </Header>
      <Content css={style.contentWrap}>{children}</Content>
    </AntdLayout>
  );
};

const style = {
  title: css({ color: 'white', fontSize: 20 }),
  contentWrap: css({
    padding: '16px 32px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  }),
};

export default Layout;
