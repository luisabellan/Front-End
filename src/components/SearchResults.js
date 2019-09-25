import React, { useState } from 'react';
import Book from './Book';
//redux
import { connect } from 'react-redux';
import { searchBooks } from '../redux/actions';


const SearchResults = props => {
const [ description, setDescription ] = useState({description: ''})

    const handleChange = e => {
        console.log(description);
        setDescription({description: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.searchBooks(description)
    }

    return (
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
    </form>
    )
}

const mapStateToProps = state => {
    return {
        descriptions: state.user.descriptions,
    }
}

export default connect(mapStateToProps, {searchBooks})(SearchResults);