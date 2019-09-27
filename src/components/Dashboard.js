import React from 'react';
import { useState, useEffect } from 'react';
import '../style/dashboard.css';
import { staticData, staticResults } from '../statics/staticResults';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import SearchResults from './SearchResults';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: '8px',
    borderRadius: '10px',
    width: '33%',
    height: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '70%',
    padding: '4px',
  },
}));

function Dashboard(props){
  const [ books, setBooks ] = useState([]);
  const [ popular, setPopular ] = useState(staticData);
  
  const classes = useStyles();

  const findBooks = (form) => {
    console.log(form.summary);
    setBooks(staticResults);
  }

  useEffect(() => {
    
  }, [books, popular]);

  return(
    <div className="dashboard">  
      <div className="popular">
        {
          books.length > 0 ?
            (<h4>Your Results 🔥</h4>) :
            (<h4>Popular Demand 🔥</h4>)
        }
        <div className="book-cards">
          {
            books.length > 0 ?
              books.map(book => (
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={book.image}
                    title={book.title}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        <h3>{book.title}</h3>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        <h3>{book.author}</h3>
                      </Typography>
                      <button className='add-button'>
                        + Add To My List
                      </button>
                      <Box component="fieldset" mb={5} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating name="disabled" value={book.rating} readOnly />
                    </Box>
                    </CardContent>
                  </div>
                </Card>
              )) : 
              popular.map(book => (
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={book.image}
                    title={book.title}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        <h3>{book.title}</h3>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        <h3>{book.author}</h3>
                      </Typography>
                      <button className='add-button'>
                        + Add To My List
                      </button>
                      <Box component="fieldset" mb={5} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating name="disabled" value={book.rating} readOnly />
                      </Box>
                    </CardContent>
                    
                  </div>
                </Card>
              ))
          }
        </div>
      </div>
      <SearchResults onSubmit={findBooks} />
    </div>
  );
}

export default Dashboard;


