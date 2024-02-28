import styles from "./Footer.module.css";
import { House, User, SignIn, PawPrint } from "@phosphor-icons/react";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/">
        <House size={40} color="white" weight="fill" />
      </a>
      <a href="/about">
        <User size={40} color="white" weight="fill" />
      </a>
      <a href="/login">
        <SignIn size={40} color="white" weight="fill" />
      </a>
      <a href="/cadastro">
        <PawPrint size={40} color="white" weight="fill" />
      </a>
    </footer>
  );
}
