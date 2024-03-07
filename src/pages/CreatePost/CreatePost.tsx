import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreatePost.module.css";
import { Button, FormFieldText } from "../../components";
import { Trash } from "@phosphor-icons/react";

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  //const { user } = useAuthValue();
  const navigate = useNavigate();

  //const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    // validate image
    if (!imageFile) {
      setFormError("Selecione uma imagem para enviar.");
      return;
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);
    formData.append("body", body);
    formData.append("tags", JSON.stringify(tagsArray));

    console.log(tagsArray);

    console.log({
      title,
      body,
      tags: tagsArray,
      //uid: user.uid,
      //createdBy: user.displayName,
    });

    if (formError) return;

    /* insertDocument({
        title,
        image,
        body,
        tags: tagsArray,
        uid: user.uid,
        createdBy: user.displayName,
      });
   */
    // redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.createPost}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      {imageFile ? (
        <div>
          <h3>Prévia da imagem</h3>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Prévia da imagem"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelImg}>
          <span className={styles.spanTitle}>
            {imageFile ? imageFile.name : "Escolha uma imagem"}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setImageFile(file || null);
            }}
          />
        </label>
        <span className={styles.spanTrash} onClick={() => setImageFile(null)}>
          <Trash size={20} weight="fill" />
        </span>
        <FormFieldText
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
          label="Título"
          placeholder="Pense num bom título..."
        />
        <FormFieldText
          onChange={(e) => setBody(e.target.value)}
          value={body}
          id="body"
          label="Conteúdo"
          placeholder="Insira o conteúdo do post"
        />
        <FormFieldText
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          id="tags"
          label="Tags"
          placeholder="Tags separadas por vírgula"
        />
        <Button buttonType="primary">Criar post!</Button>
      </form>

    </div>
  );
}
