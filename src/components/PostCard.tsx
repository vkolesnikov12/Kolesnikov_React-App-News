import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface Props {
  id: number,
  title: string;
  content: string;
  createdAt: string;
  authorLogin: string;
  tags: string[];
}
const PostCard: React.FC<Props> = ({title, content, createdAt, authorLogin, tags, id }) => {
  return (
    <div>
      <Card key={id} sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={'https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-nimbus-vector-illustration_601298-13388.jpg'}
            alt={authorLogin}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography variant="caption" component="div" sx={{marginTop: 2}} color="text.secondary">
              {createdAt}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              Автор: {authorLogin}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              {tags.join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PostCard;