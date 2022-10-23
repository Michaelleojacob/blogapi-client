import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SubmitComment from '../../../components/newCommentForm';
import Comment from '../../../components/comments';
import SingleBlog from '../../../components/blog';
import Head from 'next/head';
import styles from '../../../styles/blogs/single_blog.module.css';

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);

  const router = useRouter();
  const { query, isReady } = router;

  const fetchBlogAndComments = async () => {
    // setLoading(true);
    const { id } = query;
    const rawData = await fetch(`http://localhost:3009/blog/${id}`);
    const data = await rawData.json();
    setBlog(data[0]);
    setComments(data[1]);
    // setLoading(false);
  };

  const updateComments = async (newComments) => setComments(newComments);

  useEffect(() => {
    if (isReady) {
      setId(query);
      fetchBlogAndComments();
    }
    // eslint-disable-next-line
  }, [isReady]);

  return (
    <div className={styles.container}>
      <Head>
        <title>michaelleojacob.single_blog</title>
        <meta name='description' content='blogapi.single_blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isReady && blog !== null ? <SingleBlog blog={blog} /> : ''}
      {isReady && comments !== null
        ? comments.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))
        : ''}
      {isReady ? <SubmitComment id={id} updateComments={updateComments} /> : ''}
    </div>
  );
};

export default Blog;
