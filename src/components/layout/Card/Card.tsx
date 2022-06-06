import React from 'react';

interface CardProps {
    name: string;
    image: string;
    description?: string;
}

function Card({name, image, description}: CardProps) {

    return (
        <div className='col-md-4'>
            <div className='card '>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={image} alt="" className="card-img-top" style={{width: "200px", height: "200px"}}/>
                </div>

                <div className='card-body '>
                    <h4 className='card-title'>{name}</h4>

                    <div style={{height: "60px",overflowY: "scroll"}}>
                        <p className="card-text ">{description}</p>
                    </div>



                    <div style={{display: "flex", justifyContent: "center"}}>
                        <a href="#!" className="btn btn btn-outline-secondary rounded-0 ">
                            Comprar

                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;