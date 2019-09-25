import React, { useState } from 'react';
import Book from './Book';
//redux
import { connect } from 'react-redux';
import { searchBooks } from '../redux/actions';


const SearchResults = props => {

    return (
        <form className='search-form' >
        <input 
        name='summary' 
        type='text' 
        placeholder='Search' 
        className='textbox'/>
        
        <button
        type='submit'
        className='button'
        onClick={e => {e.preventDefault();
            props.searchBooks()
        }}
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

// function FormComponent({ onSubmit }){
//   return (
//     <Formik 
//       initialValues = {initialSearchForm}
//       onSubmit = {onSubmit}
//       render = {props => {
//         return(
//           <Form className='search-form' >
//               <Field 
//               name='summary' 
//               type='text' 
//               placeholder='Search' 
//               className='textbox'/>

//             <input 
//               title="Search" 
//               value="⚡ Let's Go!" 
//               type="submit" 
//               className="button">
//             </input>
//           </Form>
//           );
//         }}
//       />
//   );
// }
