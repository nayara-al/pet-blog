import styles from "./Header.module.css"
import Logo from "../../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.petBlogContainer}>
        <img src={Logo} className={styles.logo} />
        <h1 className={styles.headerTitle}>PetBlog</h1>
      </div>
      <ul className={styles.menuHeaderDesktop}>
        <li>
          <Link to="/about" className={styles.linkHeader}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/procurar" className={styles.linkHeader}>
            Pesquisar
          </Link>
        </li>
        <li className={styles.itemList}>
          <button className={styles.btnHeader}>
            <p className={styles.btnParagraph}>Sair</p>
          </button>
        </li>
      </ul>
      <ul className={styles.menuHeaderMobile}>
        <li>
          <Link to="/about" className={styles.linkHeaderMobile}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/procurar" className={styles.linkHeaderMobile}>
            Pesquisar
          </Link>
        </li>
        <li>
          <button className={styles.btnHeader}>
            Sair
          </button>
        </li>
      </ul>
    </header>
  );
}
