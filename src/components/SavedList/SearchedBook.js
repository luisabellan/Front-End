import React from 'react';
import Book from '../Book';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles({
    card: {
      maxWidth: 275,
      margin: '8px',
      borderRadius: '0',
      boxShadow: '0.5px 2px 7px #282c34',
    },
});


const SearchedBook = (props) => {
  // const [ image, setImage ] = ('');

   

    //Material UI
    const classes = useStyles();

    //props later
    const book = props.book;
    console.log('Book props', props)
    console.log('Book props.book', props.book)

    const id = {"bookId": props.book.id}
    console.log('Book props.book.id', props.book.id, 'id', id);

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
                <IconButton aria-label="add to favorites" onClick={() => props.saveThis(id)}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    )
}

export default SearchedBook;