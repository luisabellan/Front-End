import React, { useState, useEffect } from 'react';
import Book from './Book';
//redux
import { connect } from 'react-redux';
import { searchBooks } from '../redux/actions';


const SearchResults = props => {
const [ description, setDescription ] = useState({description: ''})
// const [ booksArr, setBooksArr ] = useState(props.state.returnedBooks)

    const handleChange = e => {
        console.log(description);
        setDescription({description: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.searchBooks(description)
    }

    // useEffect(() => {
    //     console.log('it is working')
    //     console.log('from useEffect', props.state.returnedBooks)
    //     setBooksArr(props.state.returnedBooks)
    // }, [props.state.returnedBooks])

    console.log('from component', props.state.returnedBooks)

    return ([
        <form className='search-form' onSubmit={handleSubmit}>
        <input         
        type='text'
        name='description'  
        onChange={handleChange}
        value={description.description}
        placeholder='Search' 
        className='textbox'
        />

        <button
        type='submit'
        className='button'
        >
        <span aria-label='yellow lightning bolt emoji'
        role='img'>
            ⚡
        </span>
        Let's Go!
        </button>
        
        <div>     
            {props.state.returnedBooks.length > 0 ? 
            props.state.returnedBooks.map(item => {

                console.log('item', item)
                return <Book book={item} />
            }) : null}
            
        </div>


    </form>
    ])
}

const mapStateToProps = state => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps, {searchBooks})(SearchResults);