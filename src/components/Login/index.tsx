import React, { useState } from 'react';
import { Button, Form, Input, Alert } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useSignIn } from '../../lib/hooks/useSignIn';

type Props = {
  onSingInSuccess: () => Promise<void>;
};

const requiredRule = { required: true, message: '入力してね！' };

const Login: React.FC<Props> = ({ onSingInSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isPending, error } = useSignIn(onSingInSuccess);

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
        <Button
          type="primary"
          style={{ width: '100%' }}
          onClick={() => signIn(email, password)}
          disabled={!email || !password || isPending}
        >
          ログイン
        </Button>
      </Form.Item>

      {error && (
        <Alert message="ログイン失敗" description="メアドとパスワードが正しいか確認してみて。" type="error" showIcon />
      )}
    </Form>
  );
};

export default Login;
