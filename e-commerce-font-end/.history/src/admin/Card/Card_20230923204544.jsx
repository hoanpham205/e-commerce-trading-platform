import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';

const Card = (props) => {
    const [expanded, setExpaned] = useState(false)

    return (
        <div>
            <AnimateSharedLayout>
                {expanded ?(
                    <ExpandedCard param={props} e/>
                )}
            </AnimateSharedLayout>
        </div>
    );
}

export default Card;
