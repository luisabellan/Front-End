import React, { useState } from 'react';
import Book from './Book';
//redux
import { connect } from 'react-redux';
import { searchBooks } from '../redux/actions';


const SearchResults = () => {

    return (
        <>
        <Book/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        descriptions: state.user.descriptions,
    }
}

export default connect(mapStateToProps, {searchBooks})(SearchResults);