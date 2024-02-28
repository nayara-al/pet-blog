import style from "./Post.module.css";
export default function PostUnit() {
  return (
    <div className={style.containerPost}>
      <div className={style.imagePost}>a</div>
      {/* <img src='' alt=''/> */}
      <p className={style.paragraph}>Post #1</p>
    </div>
  );
}
