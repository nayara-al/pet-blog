import styles from "./Header.module.css";
import Logo from "../../../assets/svgs/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useAuthContext } from "../../../context/useAuthContext";
export default function Header() {
  const { user } = useAuthContext();
  const { logout } = useAuthentication();
  const navigate = useNavigate();
  const handleSignOut = () => {
    console.log("tentando logout");
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.petBlogContainer}>
        <img src={Logo} className={styles.logo} />
        <h1 className={styles.headerTitle}>PetBlog</h1>
      </div>
      {user ? (
        <>
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
              <button className={styles.btnHeader} onClick={handleSignOut}>
                <p className={styles.btnParagraph}>Sair</p>
              </button>
            </li>
          </ul>
          <ul></ul>
        </>
      ) : (
        <ul className={styles.menuHeaderDesktop}>
          <li>
            <Link to="/login" className={styles.linkHeader}>
              Entrar
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className={styles.linkHeader}>
              Cadastrar
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
