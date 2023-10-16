import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';

const Card = (props) => {
    const [expanded, setExpaned] = useState(false)

    return (
        <div>
            <AnimateSharedLayout>
                {expanded ?(
                    <ExpandedCard param={props} setExpaned={()=> setExpaned(false)}/>
                ):
                (<CompactCard param={props} setExpaned={()=> setEx/>)
                }
            </AnimateSharedLayout>
        </div>
    );
}

export default Card;
