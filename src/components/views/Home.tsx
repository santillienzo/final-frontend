import React from 'react'
import {BannerHome, RedirectButton} from '..'

const Home = () => {
    return (
        <div>
            <BannerHome/>
            <RedirectButton to="/redireccion"/>
        </div>
    )
}

export default Home