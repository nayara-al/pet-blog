interface PostProps {
  imgSrc: string;
  title: string;
  createdBy: string;
  tags: Array<string>[];
  id: number;
}
export default function PostDetail({ ...props }: PostProps) {
  return (
    <div>
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <p>por: {props.createdBy}</p>
      <div>
        {props.tags.map((tag) => (
          <p>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
