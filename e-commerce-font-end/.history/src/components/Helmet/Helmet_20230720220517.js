import React from 'react';

const Helmet = (props) => {
    document.title = "PhiHoan - " + props.title;
    return (
        <div className='w-100'>
            {}
        </div>
    );
}

export default Helmet;
