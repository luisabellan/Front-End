import React from 'react';
import DescriptionCard from './DescriptionCard'

const DescriptionList = (props) => {

    console.log(props);
    const user = props.user;
    return (
        <div className='desc'>
        <p>Saved Descriptions</p>
        {
            user.descriptions.map( desc => 
                (
                <DescriptionCard user={user} key={desc.id} description={desc} saveBook={props.saveBook} deleteSearch={props.deleteSearch}/>
            ))
        }
        </div>
    );
}

export default DescriptionList;
