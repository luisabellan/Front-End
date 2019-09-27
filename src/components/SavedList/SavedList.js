import React, { useState, useEffect } from 'react';
import Book from '../Book';

import DescriptionCard from './DescriptionCard';
import SavedBooks from './SavedBooks';

import { connect } from 'react-redux';
import { getUser, saveBook, deleteBook } from '../../redux/actions';

const SavedList = ({getUser, isGetting, user, saveBook, isSaving, deleteBook, isDeletingBook}) => {

    //User
    useEffect( () => {

        getUser();
    }, [getUser] );

    if(isGetting) {
        console.log('isGetting', isGetting)
    }

    if(!isGetting){
        console.log('isGetting', isGetting, 'user', user);
    }

    //Saving and Deleting

    const saveThis = bookId => {
        saveBook(bookId);
    }

    const deleteThis = bookId => {
        deleteBook(bookId);
    }


    return(
        <>
        <p>Saved Descriptions</p>
        {
            user.descriptions.map( desc => 
                (
                <DescriptionCard key={desc.id} description={desc} saveThis={saveThis}/>
            ))
        }

        <p> Saved Books</p>
        <SavedBooks user={user} deleteThis={deleteThis}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isGetting: state.isGetting,
        isSaving: state.isSaving,
        isDeletingBook: state.isDeletingBook
    }
}
export default connect(mapStateToProps, {getUser, saveBook, deleteBook})(SavedList);