import { FC } from "react";

import { Button, Form, Input, Select } from "antd";

import { IFormData } from "./types";

import { signUpInputs, signInInputs } from "../../utils";

const { Option } = Select;

const FormGroup: FC<IFormData> = ({ signUp, onFinish }) => {
  const signIndatas = signUp
    ? signUpInputs.map(({ label, name, message }, index) => (
        <Form.Item
          key={index}
          label={label}
          name={name}
          rules={[{ required: true, message: message }]}
        >
          {name === "select" ? (
            <Select>
              <Option value="user">User</Option>
              <Option value="admin">Admin</Option>
            </Select>
          ) : (
            <Input />
          )}
        </Form.Item>
      ))
    : signInInputs.map(({ label, name, message }, index) => (
        <Form.Item
          key={index}
          label={label}
          name={name}
          rules={[{ required: true, message: message }]}
        >
          <Input />
        </Form.Item>
      ));

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {signIndatas}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormGroup;
