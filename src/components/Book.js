import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


const Book = (props) => {

    //Material UI
    const classes = useStyles();

    //props later
    const book = props.book;
    console.log('book', props.book)

    return (
        <>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                {book.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {book.author}
                </Typography>
                <Typography variant="body2" component="p">
                Rating: {book.rating}
                <br />
                ISBN: {book.isbn}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </>
    )
}

export default Book;