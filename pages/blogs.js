import BlogCard from '../components/blogCard';
import styles from '../styles/blogs/blogs.module.css';

const Blogs = ({ blogs }) => {
  return (
    <div className={styles.container}>
      {/* <div> */}
      {blogs === null
        ? ''
        : blogs.map((blog) => {
            return <BlogCard blog={blog} key={blog._id} />;
          })}
    </div>
  );
};

export default Blogs;
