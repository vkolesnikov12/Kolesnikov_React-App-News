import { 
  Card,
  CardContent,
  CardMedia, 
  Typography, 
  CardActionArea 
} from '@mui/material';

import avatarUrl from '../../public/images/avatar.avif';
import { Tag } from '../../types';

import styles from './postCard.module.css';

interface PostCardProps {
  title: string;
  content: string;
  createdAt: string;
  authorLogin: string;
  tags: Tag[];
};

const PostCard = ({ 
  title, 
  content, 
  createdAt, 
  authorLogin,
  tags,
}: PostCardProps) => {
  return (
    <>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={avatarUrl}
            alt={authorLogin}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography 
              variant="caption" 
              component="div" 
              className={styles.typography} 
              color="text.secondary"
            >
              {createdAt}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              Автор: {authorLogin}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              {tags.map((tag, id) => (
                <span key={id}>
                  {tag.name}
                </span>
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PostCard;
