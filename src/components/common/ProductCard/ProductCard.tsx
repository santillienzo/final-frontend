import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa"

// {name, image, description}: CardProps

interface CardProps {
    id: number;
    name: string;
    image: string;
    description: string;
}

function ProductCard({id, name, image, description}: CardProps) {

    return (
        <Card style={{width: '100%'}}>

                <div style={{display: "flex", justifyContent:"center", aspectRatio: "16 / 9", width: "100%", overflow: "hidden"}}>
                    <Card.Img variant="top" src={image}/>
                </div>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text style={{textOverflow: "ellipsis",height:"8em",overflow: "scroll", wordWrap: "break-word"}}>
                        {description}
                    </Card.Text>

                    <div style={{display: "flex", gap: 8, alignItems:"center"}}>
                    <Button><FaShoppingCart /></Button>
                    <Card.Link as={Button} href={`/product/${id}`}>Ver más</Card.Link>
                    </div>
                </Card.Body>

        </Card>

    )
}

export default ProductCard;