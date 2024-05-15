import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PostCard from '../components/PostCard';
import { RootState } from '../redux/store';
import { Post } from '../types';

const MainPage = () => {
  
  const defaultState = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch(); 
  console.log(defaultState.news);

  useEffect(() => {
    dispatch({ type: 'GET_POST' });
  }, []);

  return (
    <>
    {defaultState.news.map((post: Post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </>
  );
};
export default MainPage;
