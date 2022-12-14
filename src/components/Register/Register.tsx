import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./styles.module.css";

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function Register(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h2 className={styles.headingText}>Create an account</h2>
        <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Fist Name"
            placeholder="Enter your first name"
            {...register("firstName", { required: true })}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            {...register("lastName")}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <Button type="submit" className="login">
            Create account
          </Button>
        </form>
        <p className={styles.signUpText}>
          Already have an account?
          <span onClick={() => props.changePopupPage(true)}>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
