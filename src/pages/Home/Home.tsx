/* eslint-disable @typescript-eslint/no-explicit-any */
import PostUnit from "../../components/Post/Post";
import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FormFieldText } from "../../components";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

export default function Home() {
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();
  const { user } = useAuthValue();
  console.log("user:", user);

  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log("posts: ", posts);

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <FormFieldText
          id="pesquisar"
          label="Pesquisar"
          placeholder="Busque posts por tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.btn}>Pesquisar</button>
      </form>
      <div className={styles.post_list}>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p className={styles.noposts_paragraph}>
              Não foram encontrados posts. Vamos criar um agora?
            </p>
            <Link to="/criar-post" className={styles.link}>
              Criar post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

//{posts && posts.map((post) => <PostUnit key={post.id} post={post} />)}
