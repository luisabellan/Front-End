import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import SavedBook from './SavedBook';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
    width:'75%',
    margin:'inherit, auto',
    justifyContent:'space-around'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header:{
    width: '80%'

},
flexWrap: {
    display:'flex',
    flexWrap:'wrap'
}
}));

const SavedBooks = ( props ) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Functionality
  console.log('SavedBooks props', props)
  console.log('SavedBooks props.user.savedBooks', props.user.savedBooks);
  const savedBooks= props.user.savedBooks;

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="description">
            <ImportContactsIcon/>
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title='Saved Books'
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.flexWrap}>
        {savedBooks.length > 0 ? 
            savedBooks.map(book => (
                <SavedBook key={book.id} book={book} deleteThis={props.deleteBook}/>
            )) : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SavedBooks;