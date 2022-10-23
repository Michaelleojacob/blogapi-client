import formatDate from '../utils/formatDate';

// {
//   "_id": "63532a4d919aadef64a76669",
//   "title": "one",
//   "author": "migs",
//   "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam est felis, sed vestibulum lacus hendrerit ac. Praesent volutpat ante a porttitor posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis auctor imperdiet lacinia. Phasellus quis ex pellentesque, efficitur quam nec, ornare nibh. Aliquam et orci pellentesque, suscipit ipsum sed, dapibus orci. Aenean cursus blandit enim, a facilisis nisi pretium sit amet. Integer laoreet dapibus enim, ut feugiat nisi tempor a. Mauris eu malesuada nisi. Duis non efficitur ex. Nulla condimentum accumsan massa, vitae pharetra enim placerat id. Duis sit amet augue ut lacus aliquet finibus et ut erat. Pellentesque semper tortor magna, vitae euismod magna maximus eu. Pellentesque tempus ornare tellus. Vestibulum dictum, risus quis faucibus suscipit, risus felis aliquam velit, quis rhoncus ligula eros eget diam. Fusce elementum justo ut porta suscipit.",
//   "hidden": false,
//   "date": "2022-10-21T23:25:00.272Z",
//   "__v": 0
// }

const SingleBlog = ({ blog }) => {
  console.log(blog);
  const date = formatDate(blog.date);
  return (
    <>
      <div>{blog.title}</div>
      <div>{blog.body}</div>
      <div>{blog.author}</div>
      <div>{date}</div>
    </>
  );
};

export default SingleBlog;
