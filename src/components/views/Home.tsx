import React from 'react'
import {BannerHome, SliderCardSection} from '..'

let products = [
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    }
]

const Home = () => {
    return (
        <>
            <BannerHome/>
            <SliderCardSection
                name='Ofertas'
                products={products}
            />
            <SliderCardSection
                name='Más vendidos'
                products={products}
            />
        </>
    )
}

export default Home