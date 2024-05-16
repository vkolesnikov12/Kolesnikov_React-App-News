import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PostCard from '../components/PostCard';
import { RootState } from '../redux/store';
import { newsRequested } from '../redux/actions/newsActions';

const MainPage = () => {
  
  const dispatch = useDispatch(); 
  const news = useSelector((state: RootState) => state.posts.news);

  useEffect(() => {
    dispatch(newsRequested());
  }, []);

  return (
    <>
    {news.map((post) => (
      <PostCard 
      id={post.id}
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
