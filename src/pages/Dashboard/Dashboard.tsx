import style from "./Dashboard.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuthValue();
  const uid = user!.uid;
  const { documents: posts } = useFetchDocuments("posts", null, uid);
  return (
    <div className={style.dashboard}>
      <h1>Dashboard</h1>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={style.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={style.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}
      {posts &&
        posts.map((post) => (
          <div className={style.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={style.actions}>
              <Link to={`/post/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/post/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
