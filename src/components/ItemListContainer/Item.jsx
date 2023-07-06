import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({producto, id}) {

  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.thumbnail}
          alt={producto.title}
          height={350}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {producto.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Precio: ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ maxWidth: 345, justifyContent: 'center' }}>
        <Link to={`/item/${id}`}>
          <Button size="small" color="primary" >
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}