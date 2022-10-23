import styles from '../styles/blogs/card.module.css';
import Link from 'next/link';
import formatDate from '../utils/formatDate';

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
  const date = formatDate(blog.date);

  return (
    <Link href={`/blogs/${blog._id.toString()}`}>
      <a>
        <div className={styles.container}>
          <div>{blog.title}</div>
          <div>{blog.author}</div>
          <div>{date}</div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
