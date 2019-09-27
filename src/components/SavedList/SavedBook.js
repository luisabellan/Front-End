import React from 'react';
import Book from '../Book';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackspaceIcon from '@material-ui/icons/Backspace';
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
        transform: 'rotate(-90deg)'
      },
});


const SavedBook = (props) => {

    //Material UI
    const classes = useStyles();

    //Prop Variables
    const book = props.book;
    console.log('Saved Book props.book', props.book)
    console.log('Saved Book props', props);

    const id = props.book.id;
    console.log('Saved Book props.book.id', props.book.id, 'id', id);

    return (
        <Card className={classes.card}>
            <Book book={book} />
            <CardActions>
                <IconButton className={classes.icon} aria-label="add to favorites" onClick={() => props.deleteThis(id)} >
                    <BackspaceIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default SavedBook;