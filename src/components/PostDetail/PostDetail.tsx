import { Link } from "react-router-dom";
import style from "./PostDetail.module.css";
import { Button } from "..";
interface PostProps {
  imgSrc: string;
  title: string;
  createdBy: string;
  tags: string[];
  id: string;
}
export default function PostDetail({
  imgSrc,
  createdBy,
  id,
  tags,
  title,
  ...props
}: PostProps) {
  return (
    <div {...props} key={id} className={style.container}>
      <img src={imgSrc} alt={title} className={style.image} />
      <h2>{title}</h2>
      <p>por: {createdBy}</p>
      <div className={style.tags}>
        {tags.map((tag, index) => (
          <p key={index}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/post/${id}`}>
        <Button buttonType="primary">Ler</Button>
      </Link>
    </div>
  );
}
