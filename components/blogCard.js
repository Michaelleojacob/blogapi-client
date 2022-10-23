import styles from '../styles/blogs/card.module.css';
import Link from 'next/link';
import formatDate from '../utils/formatDate';

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
