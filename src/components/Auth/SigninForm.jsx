import styles from "./Auth.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import Error from "components/Auth/ErrorMessage";

const emailRegexp = "/^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$";
const phoneRegexp = "^[+]380?[-s]?([5|6|9][0|3|5|6|8|9])?[-.s]?[0-9]{7}$/";

const signinSchema = yup.object().shape({
  login: yup
    .string()
    .matches(
      `${emailRegexp}` | `${phoneRegexp}`,
      "Email or phone has incorrect form. Please, try again."
    )
    .required("Email or phone is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,12}$/,
      "Password must consist of 6-12 characters including at least 1 uppercase, 1 lowercase, 1 number and 1 symbol (!@#$%^&*_=+-)"
    )
    .required("Password is required"),
});

const initialValues = {
  login: "",
  password: "",
};

const SigninForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  const isError = (errors, name) => {
    return errors[name] ? `${styles["form-el-error"]}` : null;
  };

  return (
    <div>
      <h1 className={styles.title}>Вхід</h1>
      <Formik
        initialValues={values}
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form autoComplete="off" className={styles.form}>
              <label>
                <Field
                  type="text"
                  name="login"
                  placeholder="Телефон або e-mail"
                  className={`${styles["form-el"]} ${isError(errors, "login")}`}
                />
                <ErrorMessage
                  name="login"
                  component={Error}
                  message={errors.login}
                />
              </label>
              <label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className={`${styles["form-el"]} ${isError(
                    errors,
                    "password"
                  )}`}
                />
                <ErrorMessage
                  name="login"
                  component={Error}
                  message={errors.password}
                />
              </label>
              <Link to="/signin" className={styles["link-reset-pass"]}>
                Забули пароль?
              </Link>
              <button
                type="submit"
                className={`${styles["form-el"]} ${styles["form-btn"]}`}
              >
                Увійти
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SigninForm;
