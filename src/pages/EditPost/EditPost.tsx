import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditPost.module.css";
import { Button, FormFieldText } from "../../components";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

export default function EditPost() {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id as string);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setTags(post.tags.join(", "));
    }
  }, [post]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const data = {
        title,
        body,
        tags: tagsArray,
      };

      updateDocument(id, data);

      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      setFormError(
        "Ocorreu um erro ao enviar a imagem. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className={styles.editPost}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Cheque sua imagem e altere os campos que achar necessário</p>{" "}
          {post.imageUrl ? (
            <div>
              <h3>Prévia da imagem</h3>
              <img
                src={post.imageUrl}
                alt="Prévia da imagem"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className={styles.form}>
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
            {!response.loading && (
              <Button buttonType="secondary">Editar post!</Button>
            )}
            {response.loading && (
              <Button buttonType="secondary" disabled>
                aguarde...
              </Button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
