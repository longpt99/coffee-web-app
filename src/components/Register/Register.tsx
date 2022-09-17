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
  firstName: string;
  lastName: string;
};

function Register() {
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
      <div className="loginContent">
        <h2 className={styles.headingText}>Create an account</h2>
        <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Fist Name"
            placeholder="Enter your first name"
            {...register('firstName', { required: true })}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            {...register('lastName')}
          />
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
          <Button type="submit" className="login">
            Create account
          </Button>
        </form>
        <p className={styles.signUpText}>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
