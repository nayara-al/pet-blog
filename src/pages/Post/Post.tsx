import style from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export default function Post() {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id as string);
  return (
    <div className={style.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={style.tags}>
            {post.tags.map((tag: string) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
