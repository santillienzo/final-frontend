import React, { FC } from 'react'
import './RedirectButton.css'
import {Link} from 'react-router-dom' 

const ButtonHome:FC<{to: string}> = ({to}) => {
    return (
        <Link to={to} className='redirectButton'>Ir a otra página</Link>
    )
}

export default ButtonHome