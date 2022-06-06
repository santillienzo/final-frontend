import React from 'react';
import Card from './Card';


let muzzarella = require('../../../assets/images/muzzarella.png');
let lomo = require('../../../assets/images/lomo.png');
let empanada = require('../../../assets/images/empanada.png');
let pizzaespecial = require('../../../assets/images/pizzaespecial.png');
let hamburguesa = require('../../../assets/images/hamburguesa.png');
let card = [
    {"id": 1, "name": "Pizza Muzzarella", image: muzzarella, description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"id": 2, "name": "Empanadas de carne", image: empanada, description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"id": 3, "name": "Lomo completo", image: lomo, description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"id": 4, "name": "Pizza especial", image: pizzaespecial, description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"id": 5, "name": "Hamburguesa", image: hamburguesa, description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."},
];



function Cards() {
    return (
        <div className='container d-flex justify-content-center h-100'>
            <div className='row' style={{
                minWidth:"fit-content",
            }}>
                {
                    card.map(card => (

                        <Card image={card.image} name={card.name} key={card.id} description={card.description}/>

                    ))
                }
            </div>
        </div>
    )
}

export default Cards;