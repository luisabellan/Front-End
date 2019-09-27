import React, { useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { setImages } from '../redux/actions';

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



const useStyles = makeStyles({
    card: {
      maxWidth: 275,
      margin: '8px',
      borderRadius: '0',
      boxShadow: '0.5px 2px 7px #282c34',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


const Book = (props) => {
  const [ image, setImage ] = ('');

   

    //Material UI
    const classes = useStyles();

    //props later
    const book = props.book;
    console.log('book', props.book)
    console.log(props);

    const id = {"bookId": props.book.id}
    console.log(id);
    console.log(props.book.id);

    // if(book.ISBN === null){
    //   return book;
    // }else{
    //   props.image(book.ISBN)
    // }
    


    return (
        <div className='book'>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                {book.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {book.author}
                </Typography>
                <Typography variant="body2" component="p">
                Rating:
                <Rating name="disabled" value={book.rating} readOnly/>
                <br />
                ISBN: {book.ISBN}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites" onClick={() => props.saveThis(id)}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    )
}

const mapStateToProps = state => {
  return {
      state: state,
  }
}
export default connect(mapStateToProps, { setImages })(Book);