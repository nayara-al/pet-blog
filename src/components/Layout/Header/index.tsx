import styles from "./Header.module.css";
import Logo from "../../../assets/svgs/logo.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <h1 className={styles.headerTitle}>PetBlog</h1>
    </header>
  );
}
