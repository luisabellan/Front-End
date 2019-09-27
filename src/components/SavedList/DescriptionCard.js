import React from 'react';
import SearchedBook from './SearchedBook';

//Material UI
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SearchIcon from '@material-ui/icons/Search';

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

export default function DescriptionCard( props ) {

    //Material UI
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    //Props Variables
    console.log('Description card props', props);
    console.log('Description card description', props.description);
    const description = props.description;
    const savedBooks= props.user.savedBooks;


    return (
    <Card className={classes.card}>
        <CardHeader className={classes.header}
            avatar={
                <Avatar aria-label="description" className={classes.avatar}>
                <SearchIcon />
                </Avatar>
            }
            action={
                <>
                    <IconButton
                        aria-label="settings"
                        onClick={() => props.deleteSearch(description.id)}
                    >   
                        <DeleteForeverIcon />
                    </IconButton>
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
                </>
            }
            title={description.description}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.flexWrap}>
        {description.books.length > 0 ? 
            description.books.map(book => (
                <SearchedBook key={book.id} book={book} saveThis={props.saveBook} savedBooks={savedBooks}/>
            )) : null}
        </CardContent>
        </Collapse>
    </Card>
    );
    }