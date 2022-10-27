import { SubmitHandler, useForm } from "react-hook-form";
import { facebookIcon, googleIcon } from "../../assets/icons";
import axios from "../../utils/axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./styles.module.css";
import queryString from "query-string";
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

  async function handleOpenNewTab(params: { grantType: string; link: string }) {
    const { data } = await axios.get(params.link);
    const win = window.open(data.link, "win", "width = 500, height = 500");
    if (win) {
      win.focus();
      const waitForToken = setInterval(function () {
        if (win.closed) {
          clearInterval(waitForToken);
        }

        const searchParams = new URL(win.location.href).searchParams;
        if (searchParams.get("code")) {
          win.close();
          props.handleOnSubmitLoginForm({
            code: searchParams.get("code"),
            grantType: params.grantType,
          });
        }
      }, 1000);
    }
  }

  const socials = [
    {
      name: "Google",
      icon: googleIcon,
      link: "http://localhost:8080/v1/auth/login/socials/google",
      grantType: "google",
    },
    {
      name: "Facebook",
      icon: facebookIcon,
      link: "http://localhost:8080/v1/auth/login/socials/facebook",
      grantType: "facebook",
    },
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
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <Input
            type="hidden"
            {...register("grantType", { value: "password" })}
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
            <Button
              key={key}
              className="social"
              onClick={() =>
                handleOpenNewTab({
                  link: social.link,
                  grantType: social.grantType,
                })
              }
            >
              <img
                className={styles.socialIcon}
                src={social.icon}
                alt={social.name}
              />
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
