import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = ({comment, onDeleteComment}) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(comment)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eduardohoths.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Hoths</strong>
              <time title="23 de Junho às 17:08" dateTime="2022-06-23 187:08:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário"onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
