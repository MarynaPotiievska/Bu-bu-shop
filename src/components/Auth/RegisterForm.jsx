import styles from "./Auth.module.css";

import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { register } from "redux/auth/operations";

import Error from "components/Auth/ErrorMessage";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must consist of at least 3 characters")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(
      /^[+]380?[-\s]?([5|6|9][0|3|5|6|8|9])?[-.\s]?[0-9]{7}$/,
      "Phone has incorrect form. Please, try again."
    )
    .required("Phone is required"),
  email: yup
    .string()
    .matches(
      /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})$/,
      "Email has incorrect form. Please, try again."
    )
    .required("Email is required"),
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  const isError = (errors, name) => {
    return errors[name] ? `${styles["form-el-error"]}` : null;
  };

  return (
    <div>
      <h1 className={styles.title}>Реєстрація</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form autoComplete="off" className={styles.form}>
              <label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Ім’я"
                  className={`${styles["form-el"]} ${isError(errors, "name")}`}
                />
                <ErrorMessage
                  name="name"
                  component={Error}
                  message={errors.name}
                />
              </label>
              <label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Телефон"
                  className={`${styles["form-el"]} ${isError(errors, "phone")}`}
                />
                <ErrorMessage
                  name="phone"
                  component={Error}
                  message={errors.phone}
                />
              </label>
              <label>
                <Field
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  className={`${styles["form-el"]} ${isError(errors, "email")}`}
                />
                <ErrorMessage
                  name="email"
                  component={Error}
                  message={errors.email}
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
              <button
                type="submit"
                className={`${styles["form-el"]} ${styles["form-btn"]}`}
              >
                Зареєструватись
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
