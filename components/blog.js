import formatDate from '../utils/formatDate';

const SingleBlog = ({ blog }) => {
  const date = formatDate(blog.date);
  return (
    <>
      <div>{blog.title}</div>
      <div style={{ whiteSpace: 'pre-line' }}>{blog.body}</div>
      <div>{blog.author}</div>
      <div>{date}</div>
    </>
  );
};

export default SingleBlog;
