import React from 'react';

const Gif = ({ img }) => {

    return (
        <div className='gif'>
            <img className='imgCardTenor' src={img}/>
        </div>
    );
}

export default Gif;