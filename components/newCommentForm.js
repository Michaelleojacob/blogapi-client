import { useState } from 'react';
import styles from '../styles/comments/newComment.module.css';

const SubmitComment = ({ id, updateComments }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, body, id };
    const rawResponse = await fetch(
      `https://blog-api-server.onrender.com/blog/${id}/newComment`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const content = await rawResponse.json();
    setTitle('');
    setBody('');
    return updateComments(content);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>Leave a comment!</div>
        <label>
          title
          <input
            value={title}
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
          comment
          <textarea
            value={body}
            className={styles.input}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </label>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default SubmitComment;
