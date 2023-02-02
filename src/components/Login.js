import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Constants from "../common/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          if (
            values.email == Constants.USER_NAME &&
            values.password === Constants.PASSWORD
          ) {
            setUser({
              name: values.email,
              email: values.email, //there is no email to set
            });
            navigate("/");
          } else {
            setStatus("Invalid user name address or password");
            setSubmitting(false);
            return;
          }
        }}
      >
        {({ errors, touched, isSubmitting, status }) => (
          <Form className="flex h-screen justify-center items-center">
            <Field
              className="w-64"
              name="email"
              type="email"
              placeholder="User email"
            />
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
