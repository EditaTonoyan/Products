import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "../../assets/icons";
import FormGroup from "../../components/FormGroup";
import styles from "./registration.module.scss";

const Registration = () => {
  const userNames = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    userNames.push(values);
    localStorage.setItem("users", JSON.stringify(userNames));
    navigate("/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.wrapper__registration}`}>
        <SignUp className="signUp" />
        <div className={styles.wrapper__registration_items}>
          <div className={styles.wrapper__registration_content}>
            <h1 className={styles.wrapper__registration_content__title}>
              Sign Up
            </h1>
            <div>
              <p className={styles.wrapper__registration_content__text}>
                Have an accaunt?
              </p>
              <Link
                to="/"
                className={styles.wrapper__registration_content__text}
              >
                Sign In
              </Link>
            </div>
          </div>
          <div>
            <FormGroup onFinish={onFinish} signUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
