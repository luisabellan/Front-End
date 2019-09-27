import React, { useEffect } from 'react';

import DescriptionCard from './DescriptionCard';
import SavedBooks from './SavedBooks';
import DescriptionList from './DescriptionList';

import './SavedList.css';

import { connect } from 'react-redux';
import { getUser, saveBook, deleteBook, deleteSearch} from '../../redux/actions';

const SavedLists = ({getUser, isGetting, user, saveBook, deleteBook, deleteSearch}) => {

    //User
    useEffect( () => {

        getUser();
    }, [getUser] );

    if(isGetting) {
        console.log('isGetting', isGetting)
    }

    if(!isGetting){
        console.log('isGetting', isGetting, 'user', user, 'user.descriptions', user.descriptions);
    }

    //Saving and Deleting

    const saveThis = bookId => {
        saveBook(bookId);
    }

    const deleteThis = bookId => {
        deleteBook(bookId);
    }

    const deleteThisToo = searchId => {
        deleteSearch(searchId);
    }

    //Render
    console.log(window.location.pathname);
    const address = `${window.location.pathname}`;
    console.log(address);



    return(
        <div className="display-saved">
        {
            address == '/saved-searches'? 
            <DescriptionList user={user} saveBook={saveThis} deleteSearch={deleteThisToo}/>
            :
            <SavedBooks user={user} deleteBook={deleteThis}/>
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        isGetting: state.isGetting,
        isSaving: state.isSaving,
        isDeletingBook: state.isDeletingBook
    }
}
export default connect(mapStateToProps, {getUser, saveBook, deleteBook, deleteSearch })(SavedLists);