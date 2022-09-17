import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { facebookIcon, googleIcon } from '../../assets/icons';
import { moment3 } from '../../assets/images';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const socials = [
    { name: 'Google', icon: googleIcon },
    { name: 'Facebook', icon: facebookIcon },
  ];

  return (
    <div className={styles.loginContainer}>
      <div className="loginContent">
        <h2 className={styles.headingText}>Welcome back Anam Lab</h2>
        <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
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
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
