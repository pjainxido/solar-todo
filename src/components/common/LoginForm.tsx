import React, { useCallback } from "react";
import styled from "styled-components";
import { useInput } from "utils/hooks";
import {  Form, Input, Button } from "antd";

interface LoginFormProps {
  configUser: (id: string, password: string) => void;
}
const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const LoginForm = ({ configUser }: LoginFormProps) => {
  const [id, onChangeId] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  const onSubmitForm = useCallback(() => {
    configUser(id, password);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <div>
          <Input name='user-id' value={id} onChange={onChangeId} required />
        </div>
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};


export default LoginForm;
