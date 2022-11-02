import styles from "./styles.module.css";
import logo from "../../assets/images/logo-2.png";
import basketShoppingIcon from "../../assets/icons/basket-shopping.svg";
import searchIcon from "../../assets/icons/search.svg";
import loginIcon from "../../assets/icons/circle-user.svg";
import { settingIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

function Header(props: any) {
  return (
    <header className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={styles.menuItem}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <a href="#">
          <img
            className={styles.cartIcon}
            src={basketShoppingIcon}
            alt="shopping_cart"
          />
        </a>
        <button className={styles.menuIcon}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search_icon"
          />
        </button>
        {props.isLogin ? (
          <div className={styles.setting}>
            <img
              className={styles.loginIcon}
              src={settingIcon}
              alt="login_icon"
            />
            <ul className={styles.settingMenu}>
              <li className={styles.settingItem}>
                <img
                  className={styles.settingIcon}
                  src={settingIcon}
                  alt="login_icon"
                />
                <Link to="/profile" className={styles.settingTab}>
                  Profile
                </Link>
              </li>
              <li className={styles.settingItem}>
                <img
                  className={styles.settingIcon}
                  src={settingIcon}
                  alt="login_icon"
                />
                <button
                  onClick={() => {
                    props.handleOnClickLogout();
                  }}
                  className={styles.settingTab}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          // <button
          //   onClick={() => {
          //     props.handleOnClickLogout();
          //   }}
          // >
          // </button>
          <button
            onClick={() => props.showLoginModal(true)}
            className={styles.menuIcon}
          >
            <img
              className={styles.loginIcon}
              src={loginIcon}
              alt="login_icon"
            />
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
