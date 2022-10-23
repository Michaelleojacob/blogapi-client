import BlogCard from '../../components/blogCard';
import styles from '../../styles/blogs/blogs.module.css';
import { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    const rawData = await fetch('http://localhost:3009');
    const data = await rawData.json();
    return setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      {blogs === null
        ? ''
        : blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
    </div>
  );
};

export default Blogs;
