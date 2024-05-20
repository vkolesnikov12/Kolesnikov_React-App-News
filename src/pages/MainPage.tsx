import { useEffect } from 'react';

import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import { newsRequested } from '../redux/actions/newsActions';
import { useAppSelector, useAppDispatch } from '../hooks';
import FilledAlerts from '../components/FilledAlert';
import { Post } from '../types';

const MainPage = () => {
  
  const dispatch = useAppDispatch();
  
  const news = useAppSelector((state) => state.posts.news);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);
  const notEmpty = news.length === 0 && !isLoading && !error;
  
  useEffect(() => {
    dispatch(newsRequested());
  }, []);

  if(isLoading) return <Loading/>;

  return (
    <>
    {error && (<FilledAlerts
      error={error} severity='error'
    />)}
    {notEmpty && <FilledAlerts error="No post found" severity="info"/>}
    {!error && news.map((post: Post) => (
      <PostCard 
        key={post.id}
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        authorLogin={post.author.login}
        tags={post.tags.map(tag => tag.name)}
      />
    ))}
  </>
  );
};

export default MainPage;
