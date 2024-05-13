import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";

interface Tag {
  id: number;
  name: string;
}

interface Author {
  id: number;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  author: Author;
}

const MainPage = () => {
  
  const defaultState = useSelector((state: Post[]) => state)
  console.log(defaultState);
  
  return (
    <div>
    {defaultState.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
  );
}
export default MainPage
