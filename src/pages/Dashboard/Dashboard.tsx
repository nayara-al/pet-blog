import style from "./Dashboard.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuthValue();
  const uid = user!.uid;
  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const deleteDocument = (id: string) => {
    console.log("Tem certeza que deseja deletar os post de id: ", id)
  }
  return (
    <div className={style.dashboard}>
      <h1>Dashboard</h1>
      <p className={style.description}>Gerencie seus posts</p>
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
              <Link to={`/post/${post.id}`} className={style['btn-outline']}>
                Ver
              </Link>
              <Link to={`/post/edit/${post.id}`} className={style['btn-outline']}>
                Editar
              </Link>
              <button
                className={style['btn-danger']}
                onClick={() => deleteDocument(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
