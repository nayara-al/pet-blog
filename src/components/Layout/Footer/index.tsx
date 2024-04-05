import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { House, PlusSquare, ListDashes } from "@phosphor-icons/react";
import { useAuthentication } from "../../../hooks/useAuthentication";
export default function Footer() {
  const { auth } = useAuthentication();
  const isAuthenticated = (): boolean => {
    const user = auth.currentUser;
    return !!user;
  };
  return (
    <>
      {isAuthenticated() ? (
        <footer className={styles.footer}>
          <Link to="/">
            <House size={40} color="white" weight="fill" />
          </Link>
          <Link to="/dashboard">
            <ListDashes size={40} color="white" weight="fill" />
          </Link>
          <Link to="/criar-post">
            <PlusSquare size={40} color="white" weight="fill" />
          </Link>
        </footer>
      ) : null}
    </>
  );
}
