import { Formik, Form } from "formik";
import FieldLabel from "../FieldLabel";
import FieldInput from "../FieldInput";
import Button from "../Button";
import styles from "./LoginForm.module.css";
import FieldError from "../FieldError";
import * as Yup from "yup";

const LoginForm = ({ handleSubmit }) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(3,'Too short').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className={styles.form}>
          <FieldLabel htmlFor="email">Username</FieldLabel>
          <FieldInput name="email" error={errors.email} />
          <FieldError error={errors.email} />
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput type="password" name="password" error={errors.password} />
          <FieldError error={errors.password} />
          <Button buttonBg="#f34e9b" fullWidth type="submit" disabled={isSubmitting}>Login</Button>
        </Form>
      )}
    </Formik>
  )
};

export default LoginForm;