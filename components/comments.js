// {
//   "_id": "6353883232a2353f176a6b85",
//   "blogId": "63532a4d919aadef64a76669",
//   "title": "chicken",
//   "body": "this is not a body",
//   "date": "2022-10-22T06:05:38.024Z",
//   "__v": 0
// }

const Comment = ({ comment }) => {
  const date = new Date(comment.date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <>
      <div>{comment.title}</div>
      <div>{comment.body}</div>
      <div>{date}</div>
    </>
  );
};

export default Comment;
