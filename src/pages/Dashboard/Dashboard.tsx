import style from "./Dashboard.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { PencilSimpleLine, FloppyDisk } from "@phosphor-icons/react"

export default function Dashboard() {
  const { user } = useAuthValue();
  const { updateUserProfile } = useAuthentication();
  const uid = user!.uid;
  const { documents: posts } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleUpdateProfile = () => {
    if (displayName.trim() !== "") {
      updateUserProfile(displayName);
      setEditMode(false);
    }
  };

  return (
    <div className={style.dashboard}>
      <h1>Dashboard</h1>
      {editMode ? (
        <div className={style.displayNameEdit}>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button onClick={handleUpdateProfile}>
            <FloppyDisk color="white" size={20}/>
          </button>
        </div>
      ) : (
        <div className={style.displayName}>
          <p className={style.name}>{user?.displayName}</p>
          <button className={style['btn-edit']} onClick={() => setEditMode(true)}>
            <PencilSimpleLine size={16}/>
          </button>
        </div>
      )}
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
              <Link to={`/post/${post.id}`} className={style["btn-outline"]}>
                Ver
              </Link>
              <Link
                to={`/post/edit/${post.id}`}
                className={style["btn-outline"]}
              >
                Editar
              </Link>
              <button
                className={style["btn-danger"]}
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

