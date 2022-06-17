import { Button, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";

import styles from "./login.module.scss";

import { SignUp } from "../../../assets/icons";

const AdminLogin = () => {
  const navigate = useNavigate();

  const allUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

  const setToken = () => {
    localStorage.setItem("authAdminToken", "8978kjhkhijhhkuy7yujhjhj");
    navigate("/adminPanel");
  };

  const onFinish = (values: { email: string; password: number }) => {
    allUsers.forEach(
      (user: { userName: string; password: number; select: string }) => {
        if (
          values.email == user.userName &&
          values.password == user.password &&
          user.select == "admin"
        ) {
          setToken();
        }
      }
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.wrapper__login}`}>
        <SignUp className="signUp" />
        <div className={styles.wrapper__login_items}>
          <div className={styles.wrapper__login_content}>
            <h1 className={styles.wrapper__login_content__title}>Sign In</h1>
            <div>
              <p className={styles.wrapper__login_content__text}>No accaunt?</p>
              <Link
                to="/registration"
                className={styles.wrapper__login_content__text}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
