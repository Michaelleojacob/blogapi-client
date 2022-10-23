import styles from '../styles/blogs/card.module.css';

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.container}>
      <div>{blog.title}</div>
      <div>{blog.author}</div>
    </div>
  );
};

export default BlogCard;
