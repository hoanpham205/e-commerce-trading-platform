import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';

const Card = () => {
    const [expanded, setExpaned] = useState(false)

    return (
        <div>
            <AnimateSharedLayout>
                {expanded ?(
                    Expan
                )}
            </AnimateSharedLayout>
        </div>
    );
}

export default Card;
