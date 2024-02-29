import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { House, User, SignIn, PawPrint, PlusSquare } from "@phosphor-icons/react";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <House size={40} color="white" weight="fill" />
      </Link>
      <Link to="/about">
        <User size={40} color="white" weight="fill" />
      </Link>
      <Link to="/novo-post">
        <PlusSquare size={40} color="white" weight="fill" />
      </Link>
      <Link to="/login">
        <SignIn size={40} color="white" weight="fill" />
      </Link>
      <Link to="/cadastro">
        <PawPrint size={40} color="white" weight="fill" />
      </Link>
    </footer>
  );
}
