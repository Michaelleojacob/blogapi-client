import styles from '../styles/blogs/card.module.css';

// {
//   "_id": "63532a4d919aadef64a7666e",
//   "title": "six",
//   "author": "ris",
//   "body": "amet",
//   "hidden": false,
//   "date": "2022-10-21T23:25:00.272Z",
//   "__v": 0
// }

const BlogCard = ({ blog }) => {
  const date = new Date(blog.date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const handleClick = (e) => {
    console.log(blog._id.toString());
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <div>{blog.title}</div>
      <div>{blog.author}</div>
      <div>{date}</div>
    </div>
  );
};

export default BlogCard;
