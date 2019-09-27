import React from 'react';
import Book from '../Book';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    card: {
      width: 225,
      height: 240,
      margin: '8px',
      borderRadius: '0',
      boxShadow: '0.5px 2px 7px #282c34',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    },
    icon: {
        opacity:'.75',
      },
});


const SearchedBook = (props) => {
  
    //Material UI
    const classes = useStyles();

    //Prop Variables
    const book = props.book;
    console.log('Searched Book props', props)
    console.log('Searched Book props.book', props.book)

    const id = {"bookId": props.book.id}
    console.log('Searched Book props.book.id', props.book.id, 'id', id);
    
    const inSaved = props.savedBooks.filter( saved => saved.id === book.id);
    console.log('inSaved', inSaved, 'length', inSaved.length);
    

    return (
        <div className='book'>
        <Card className={classes.card}>
            <Book book={book} />
            <CardActions>
                { inSaved.length > 0 ? 
                    <IconButton className={classes.icon} aria-label="add to favorites" disabled>
                    <   BookmarkIcon />
                    </IconButton>
                    :
                    <IconButton aria-label="add to favorites" onClick={() => props.saveThis(id)}>
                        <BookmarkBorderIcon />
                    </IconButton>
                }
            </CardActions>
        </Card>
        </div>
    )
}

export default SearchedBook;