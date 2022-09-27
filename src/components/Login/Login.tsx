import { SubmitHandler, useForm } from 'react-hook-form';
import { facebookIcon, googleIcon } from '../../assets/icons';
import axios from '../../utils/axios';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './styles.module.css';

type Inputs = {
  email: string;
  password: string;
  grantType: string;
};

function Login(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const socials = [
    { name: 'Google', icon: googleIcon },
    { name: 'Facebook', icon: facebookIcon },
  ];

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h2 className={styles.headingText}>Welcome back Anam Lab</h2>
        <form
          className={styles.formContent}
          onSubmit={handleSubmit(props.handleOnSubmitLoginForm)}
        >
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email')}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password')}
          />
          <Input
            type="hidden"
            {...register('grantType', { value: 'password' })}
            hidden={true}
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
            <Button className="social">
              <img className={styles.socialIcon} src={social.icon} alt="" />
              {social.name}
            </Button>
          ))}
        </div>
        <p className={styles.signUpText}>
          Don't have an account?
          <span onClick={() => props.changePopupPage(false)}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
