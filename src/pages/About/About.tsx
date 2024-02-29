import { Link } from "react-router-dom";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Sobre o <span className={style.brandTitle}>PetBlog</span>
      </h2>
      <p className={style.paragraph}>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/" className={style.linkCreate}>Criar post</Link>
    </div>
  );
}
