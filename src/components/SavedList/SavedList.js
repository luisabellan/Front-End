import React, { useState, useEffect } from 'react';
import Book from '../Book';

import DescriptionCard from './DescriptionCard';
import SavedBooks from './SavedBooks';

import { connect } from 'react-redux';
import { getUser, saveBook, deleteBook } from '../../redux/actions';

const SavedList = ({getUser, isGetting, user}) => {

    //User
    useEffect( () => {

        getUser();
    }, [getUser] );

    if(isGetting) {
        console.log(isGetting, 'true')
    }

    if(!isGetting){
        console.log(user);
    }

    return(
        <>
        <p>Saved Descriptions</p>
        {
            user.descriptions.map( desc => 
                (
                <DescriptionCard key={desc.id} description={desc}/>
            ))
        }

        <p> Saved Books</p>
        <SavedBooks user={user} />
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
export default connect(mapStateToProps, {getUser})(SavedList);