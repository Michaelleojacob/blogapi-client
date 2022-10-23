import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SubmitComment from '../../../components/newCommentForm';

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);

  const router = useRouter();
  const { query, isReady } = router;

  const fetchBlog = async () => {
    const { id } = query;
    const rawData = await fetch(`http://localhost:3009/${id}`);
    const data = await rawData.json();
    setBlog(data[0]);
    setComments(data[1]);
  };

  useEffect(() => {
    if (isReady) {
      setId(query);
      fetchBlog();
    }
    // eslint-disable-next-line
  }, [isReady]);

  return (
    <>
      <div>hello from blog</div>
      {isReady ? <SubmitComment id={id} /> : ''}
    </>
  );
};

export default Blog;
