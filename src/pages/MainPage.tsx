import { useSelector } from 'react-redux';

import PostCard from '../components/PostCard';
import { RootState } from '../redux/store';
import { Post } from '../types';

const MainPage = () => {
  
  const defaultState = useSelector((state: RootState) => state.news);
  console.log(defaultState.news);
  
  return (
    <>
    {defaultState.news.map((post: Post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </>
  );
};
export default MainPage;
