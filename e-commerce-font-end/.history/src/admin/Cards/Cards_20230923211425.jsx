import React from 'react';
import { cardsData } from '../../assets/data/data';
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div className="Cards">
            {cardsData.map((card,id) =>{
                return (
                    <div className="parentContainer" key={id}>
                        <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            ba
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Cards;
