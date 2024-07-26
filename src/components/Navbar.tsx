import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>The Thankful Path</div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </nav>
  );
}
