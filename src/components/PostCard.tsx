import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

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
interface Props {
  post: Post
}
const PostCard: React.FC<Props> = ({post}) => {
  return (
    <div>
      <Card key={post.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={'https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-nimbus-vector-illustration_601298-13388.jpg'}
            alt={post.author.login}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
            <Typography variant="caption" component="div" sx={{marginTop: 2}} color="text.secondary">
              {post.createdAt}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              Автор: {post.author.login}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              {post.tags.map(tag => tag.name).join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PostCard;