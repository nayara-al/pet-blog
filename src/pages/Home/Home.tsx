/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FormFieldText } from "../../components";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { IDocument } from "../../interface/database";
import PostDetail from "../../components/Post/PostDetail";

export default function Home() {
  const { documents: posts, loading } = useFetchDocuments("posts");
  console.log("posts: ", posts);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Veja os nossos posts mais recentes</h1>
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
        {posts ? (
          posts.length === 0 ? (
            <div className={styles.noposts}>
              <p className={styles.noposts_paragraph}>
                Não foram encontrados posts. Vamos criar um agora?
              </p>
              <Link to="/criar-post" className={styles.link}>
                Criar post
              </Link>
            </div>
          ) : (
            posts.map((post: IDocument) => (
              <PostDetail key={post.id} createdBy={post.createdBy} id={post.uid} imgSrc={post.imageUrl} tags={post.tags} title={post.title}/>
              ))
              )
              ) : null}
      </div>
    </div>
  );
}