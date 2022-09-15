import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { moment3 } from '../../assets/images';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './styles.module.css';
type Inputs = {
  example: string;
  exampleRequired: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const socials = [
    { name: 'Google', icon: '' },
    { name: 'Facebook', icon: '' },
  ];

  return (
    <section id="login" className={styles.modal}>
      <div className={classNames(styles.login)}>
        <div className="col2">
          <div className={styles.slide}>
            <img src={moment3} alt="" />
          </div>
        </div>
        <div className="col2">
          <div className={styles.loginContainer}>
            <div className="loginContent">
              <h2 className={styles.headingText}>Welcome back Anam Lab</h2>
              <form
                className={styles.formContent}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <a className={styles.forgotPassword} href="#">
                  Forgot password
                </a>
                <Button type="submit" className="login">
                  Login
                </Button>
              </form>
              <p className={styles.signInSocialsText}>
                <span>Or Sign In with</span>
              </p>
              <div className={styles.signSocials}>
                {socials.map((social, key) => (
                  <Button>{social.name}</Button>
                ))}
              </div>
              <p>
                Don't have an account? <span>Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
