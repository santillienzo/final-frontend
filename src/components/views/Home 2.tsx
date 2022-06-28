import React from 'react'
import {BannerHome, SliderCardSection} from '..'

import data from '../../lib/data'


const Home = () => {
    return (
        <>
            <BannerHome/>

            <SliderCardSection
                name='Ofertas'
                data={data}
            />
            <SliderCardSection
                name='Más vendidos'
                data={data}
            />
        </>
    )
}

export default Home