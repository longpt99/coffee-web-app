import styles from './styles.module.css';
import logo from '../../assets/images/logo-2.png';
import basketShoppingIcon from '../../assets/icons/basket-shopping.svg';
import searchIcon from '../../assets/icons/search.svg';
import loginIcon from '../../assets/icons/circle-user.svg';
import { useState } from 'react';

function Header(props: any) {
  return (
    <header className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={styles.menuItem}>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
        <a href="#">
          <img
            className={styles.cartIcon}
            src={basketShoppingIcon}
            alt="shopping_cart"
          />
        </a>
        <button>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search_icon"
          />
        </button>
        <button onClick={() => props.showLoginModal(true)}>
          <img className={styles.loginIcon} src={loginIcon} alt="login_icon" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
