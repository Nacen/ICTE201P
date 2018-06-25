import React from 'react';
import Card from './Card.js';

const CardList = ( {robots}) => {
    return (
        <div>
            {
                robots.map((element, index) => {
                    return (
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                        />
                    );    
                })
            }
        </div>
    );
}

export default CardList;