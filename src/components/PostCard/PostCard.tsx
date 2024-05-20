import { 
  Card,
  CardContent,
  CardMedia, 
  Typography, 
  CardActionArea 
} from '@mui/material';

import { Tag } from '../../types';

interface PostCardProps {
  title: string;
  content: string;
  createdAt: string;
  authorLogin: string;
  tags: Tag[];
};

const imageUrl = 'https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-nimbus-vector-illustration_601298-13388.jpg';
const stylesCard = { maxWidth: 345, marginBottom: 2 };
const stylesTypography = { marginTop: 2 };

const PostCard = ({ title, content, createdAt, authorLogin, tags }: PostCardProps) => {
  return (
    <>
      <Card sx={stylesCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={imageUrl}
            alt={authorLogin}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography variant="caption" component="div" sx={stylesTypography} color="text.secondary">
              {createdAt}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
              Автор: {authorLogin}
            </Typography><br />
            <Typography variant="caption" color="text.secondary">
            {tags.map((tag, index) => (
              <span key={index}>
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

