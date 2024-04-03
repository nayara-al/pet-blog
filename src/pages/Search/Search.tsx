import style from "./Search.module.css";
import { useQuery } from "../../hooks/useQuery";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { PostDetail } from "../../components";
import { Link } from "react-router-dom";
import { IDocument } from "../../interface/database";

export default function Search() {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);
  return (
    <div className={style.search_container}>
      <h1>Resultados encontrados para: {search}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts &&
          posts.map((post: IDocument) => (
            <PostDetail
              key={post.id}
              createdBy={post.createdBy}
              id={post.uid}
              imgSrc={post.imageUrl}
              tags={post.tags}
              title={post.title}
            />
          ))}
      </div>
    </div>
  );
}
