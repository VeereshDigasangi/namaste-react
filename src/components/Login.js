import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Constants from "../common/constants";
import { useState } from "react";

export default LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState("false");
  console.log("isLogin inti ", isLogin);
  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setTimeout(() => {
            if (
              values.email == Constants.USER_NAME &&
              values.password === Constants.PASSWORD
            ) {
              setIsLogin("true");
              console.log("isLogin ", isLogin);
              navigate("/");
            } else {
              setStatus("Invalid email address or password");
              setSubmitting(false);
              return;
            }
          }, 2000);
        }}
      >
        {({ errors, touched, isSubmitting, status }) => (
          <Form className="form-fields">
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            {status && <div className="error-text">{status}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
