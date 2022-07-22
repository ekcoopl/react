import React from "react";
import {menu} from './menu'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn.svgporn.com/logos/mailjet-icon.svg" alt="" height={50}/>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
