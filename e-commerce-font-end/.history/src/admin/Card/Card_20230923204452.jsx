import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';

const Card = () => {
    const [expanded, setExpaned] = useState(false)

    return (
        <div>
            <AnimateSharedLayout>
                {expanded ?(
                    Expanded
                )}
            </AnimateSharedLayout>
        </div>
    );
}

export default Card;
