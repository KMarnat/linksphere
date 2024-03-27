interface SinglePostProps {
  name: string;
  content: string;
  likes: number;
  comments: number;
}

const SinglePost: React.FC<SinglePostProps> = ({ name, content, likes, comments }) => {
  return (
    <article className="single-post">
      <h2>{name}</h2>
      <p>{content}</p>
      <div className="single-post__stats">
        <span>Likes: {likes}</span>
        <span>Comments: {comments}</span>
      </div>
    </article>
  );
};

export default SinglePost;
