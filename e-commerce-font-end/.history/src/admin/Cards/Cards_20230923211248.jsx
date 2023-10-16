import React from 'react';
import { cardsData } from '../../assets/data/data';
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div className="Cards">
            {cardsData.cards}
        </div>
    );
}

export default Cards;
