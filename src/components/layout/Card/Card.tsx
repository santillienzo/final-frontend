import React from 'react';

let parrillada = require('../../../assets/images/parrillada.jpg');

function Card() {
    return (
        <div className='card'>
            <img src={parrillada} alt="" className="card-img-top"/>
            <div className='card-body'>
                <h4 className='card-title'>
                    Parrillada "Otra vez maldito axel"
                    <p className="card-text text-secondary">
                        Especialidad de la casa, con una mezcla de todo.
                        Matambrito de cerdo al roqueford
                        Ensalada "Ave Maria purisima de la casa"
                    </p>
                </h4>
            </div>
        </div>
    )
}

export default Card;