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
  title: css`
    color: white;
    font-size: 20px;
  `,
  contentWrap: css`
    padding: 16px 32px;
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
  `,
};

export default Layout;
