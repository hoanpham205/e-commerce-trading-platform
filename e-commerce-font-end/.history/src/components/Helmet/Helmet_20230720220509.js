import React from 'react';

const Helmet = (props) => {
    document.title = "PhiHoan - " + props.title;
    return (
        <div className=''>
            
        </div>
    );
}

export default Helmet;
