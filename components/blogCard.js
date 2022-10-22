const BlogCard = ({ blog }) => {
  return (
    <>
      <div>{blog.title}</div>
      <div>{blog.body}</div>
    </>
  );
};

export default BlogCard;
