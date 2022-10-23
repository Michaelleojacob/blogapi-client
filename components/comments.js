import formatDate from '../utils/formatDate';
import styles from '../styles/comments/comments.module.css';

const Comment = ({ comment }) => {
  console.log(comment.body);
  const date = formatDate(comment.date);
  return (
    <div className={styles.container}>
      <div>{comment.title}</div>
      <div style={{ whiteSpace: 'pre-line' }}>{comment.body}</div>
      <div>{date}</div>
    </div>
  );
};

export default Comment;
