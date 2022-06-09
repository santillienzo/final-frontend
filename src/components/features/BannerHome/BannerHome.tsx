import React from 'react'
import { Carousel } from 'react-bootstrap'
import './BannerHome.css'

const BannerHome = () => {
    return (
        <Carousel style={{width: '94%', margin: '15px auto'}}>
            <Carousel.Item style={{height: '75vh', }}>
                <img
                    style={{objectFit:'contain'}}
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>Primer producto</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '75vh', }}>
                <img
                style={{objectFit:'contain'}}
                className="d-block w-100"
                src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Segundo producto</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '75vh', }}>
                <img
                style={{objectFit:'contain'}}
                className="d-block w-100"
                src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Tercer producto</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default BannerHome