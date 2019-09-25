import React, { useState, useEffect } from 'react';
import Book from './Book';
//redux
import { connect } from 'react-redux';
import { searchBooks } from '../redux/actions';


const SearchResults = props => {
const [ description, setDescription ] = useState({description: ''})

    const handleChange = e => {
        setDescription({description: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.searchBooks(description)
    }

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