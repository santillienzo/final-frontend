import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface CardProps {
    name: string;
    image: string;
    description?: string;
}

// {name, image, description}: CardProps

function 
ProductCard() {

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/286px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default ProductCard;