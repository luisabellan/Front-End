import React, { useEffect } from 'react';
import Book from '../Book';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles({
    card: {
      maxWidth: 275,
      margin: '8px',
      borderRadius: '0',
      boxShadow: '0.5px 2px 7px #282c34',
    },
    icon: {
      color: red[500],
    },
});


const SavedBook = (props) => {
  const [ image, setImage ] = ('');

   

    //Material UI
    const classes = useStyles();

    //props later
    const book = props.book;
    console.log('Saved Book props.book', props.book)
    console.log('Saved Book props', props);

    const id = props.book.id;
    console.log('Saved Book props.book.id', props.book.id, 'id', id);

    // if(book.ISBN === null){
    //   return book;
    // }else{
    //   props.image(book.ISBN)
    // }
    


    return (
        <div className='book'>
        <Card className={classes.card}>
            <Book book={book} />
            <CardActions>
                <IconButton className={classes.icon} aria-label="add to favorites" onClick={() => props.deleteThis(id)} >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    )
}

export default SavedBook;