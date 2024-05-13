import PostCard from "../components/PostCard";
import data from "../components/data.json"
const MainPage = () => {
  const posts = data;
  return (
    <div>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
  );
}
export default MainPage

