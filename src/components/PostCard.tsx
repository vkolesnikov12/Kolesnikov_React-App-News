import React from 'react';
import data from './data.json';

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

const PostCard: React.FC = () => {
  return (
    <div>
      {data.map((post: Post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.createdAt}</p>
          <p>{post.author.login}</p>
          <p>{post.tags.map(tag => tag.name)}</p>
        </div>
      ))}
    </div>
  );
};

export default PostCard;