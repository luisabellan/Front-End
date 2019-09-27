import React from 'react';
import { useState, useEffect } from 'react';
import '../style/topbooks.css';
import { moreStats } from '../statics/staticResults';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: '8px',
    matginTop: '0',
    borderRadius: '0',
    width: '30%',
    height: '52%',
    boxShadow: '0.5px 2px 7px #282c34',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    marginTop: '0',
    padding: '2px',
  },
  cover: {
    width: '100%',
    padding: '4px',
    height: '200px',
  }, 
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }
}));

function TopBooks(props){
  const [ popular, setPopular ] = useState(moreStats);
  const classes = useStyles();

  useEffect(() => {
    
  }, [popular]);

  return(
    <div className="topbooks">  
      <h4>Top 6 Books on Better Reads 🔥</h4>
      <div className='cards'>
      {
        popular.map(book => (
          <Card className={classes.card}>
          <CardMedia
              className={classes.cover}
              image={book.image}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <h3>{book.title}</h3>
                </Typography>
                <button className='add-button'>
                  + Add To My List
                </button>
                <Typography variant="subtitle1" color="textSecondary">
                  <h3>{book.author}</h3>
                </Typography>
                <Box component="fieldset" mb={5} borderColor="transparent">
                  <Rating name="disabled" value={book.rating} readOnly />
                </Box>
              </CardContent> 
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TopBooks;
