import { useEffect } from 'react';

import PostCard from '../components/PostCard/PostCard';
import Loading from '../components/Loading/Loading';
import {  postsRequested } from '../redux/actions/postsActions';
import { useAppSelector, useAppDispatch } from '../hooks';
import FilledAlerts from '../components/FilledAlert/FilledAlert';
import { ERROR_SEVERITY, INFO_SEVERITY, NO_POSTS_MESSAGE } from '../redux/constants/constants';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);
  const hasError = error !== null && error !== undefined;
  const isEmpty = posts.length === 0 && !hasError;
  
  useEffect(() => {
    dispatch(postsRequested());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      {hasError && (<FilledAlerts error={error} severity={ERROR_SEVERITY} />)}
      {isEmpty && <FilledAlerts error={NO_POSTS_MESSAGE} severity={INFO_SEVERITY} />}
      {!isEmpty && posts.map((post) => (
        <PostCard 
          key={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
          authorLogin={post.author.login}
          tags={post.tags}
        />
      ))}
    </>
  );
};

export default MainPage;
