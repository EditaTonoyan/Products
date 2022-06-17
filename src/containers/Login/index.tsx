import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./login.module.scss";

import { SignUp } from "../../assets/icons";

import FormGroup from "../../components/FormGroup";

const Login = () => {
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const allUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

  const setToken = (values: any, select: string) => {
    const loginData = {
      authToken: "8978ijhhkuy7yujhjhj",
      userName: values.userName,
      select,
    };

    localStorage.setItem("authToken", JSON.stringify(loginData));
    navigate("/");
  };

  const onFinish = (values: { email: string; password: string }) => {
    allUsers.forEach(
      (user: { email: string; password: string; select: string }) => {
        if (values.email == user.email && values.password == user.password) {
          setToken(values, user.select);
        } else {
          setMessage("You havent account, please registrate");
        }
      }
    );
    allUsers.length == 0 && setMessage("You havent account, please registrate");
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
          {message && (
            <div className={styles.wrapper__login_content__message}>
              {message}
            </div>
          )}
          <div>
            <FormGroup onFinish={onFinish} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
