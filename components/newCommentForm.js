import { useState } from 'react';
import styles from '../styles/comments/newComment.module.css';

const SubmitComment = ({ id, updateComments }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, body, id };
    const rawResponse = await fetch(
      `http://localhost:3009/blog/${id}/newComment`,
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
      <form onSubmit={handleSubmit}>
        <label>
          title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
          comment
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </label>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default SubmitComment;
