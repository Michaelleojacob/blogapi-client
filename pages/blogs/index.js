import BlogCard from '../../components/blogCard';
import styles from '../../styles/blogs/blogs.module.css';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    const rawData = await fetch('https://blog-api-server.onrender.com');
    const data = await rawData.json();
    return setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>michaelleojacob.blog_list</title>
        <meta name='description' content='blogapi.blog_list' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {blogs === null
        ? ''
        : blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
    </div>
  );
};

export default Blogs;
