import React, { useState } from 'react';
import { Button, Form, Input, Alert } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(email + password);
  };

  const requiredRule = { required: true, message: '入力してね！' };

  return (
    <Form name="normal_login" style={{ maxWidth: 400, width: '100%' }}>
      <Form.Item rules={[requiredRule]}>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          prefix={<MailOutlined />}
          type="email"
          placeholder="メールアドレス"
        />
      </Form.Item>
      <Form.Item rules={[requiredRule]}>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="パスワード"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{ width: '100%' }} onClick={onSubmit} disabled={!email || !password}>
          ログイン
        </Button>
      </Form.Item>

      <Alert message="メッセージ" type="error" showIcon />
    </Form>
  );
};

export default Login;
