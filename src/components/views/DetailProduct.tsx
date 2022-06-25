import { useParams, Navigate } from "react-router-dom"
import {Image,Button} from 'react-bootstrap'
import data from "../../lib/data"
import { Product } from "../../lib/interface"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const getProduct = (id: string) => {
    return data.find((product:Product) => product.id === Number(id))
}

const DetailProduct = () => {
    const {addItemToCart} = useContext<any>(CartContext)

    const {id} = useParams()
    const product = getProduct(id!)

    if (!product) {
        return <Navigate to="/" />
    }

    return (
        <div style={{display: "flex"}}>
            <div style={{padding:"16px"}}>
                <Image src={product.image} alt={product.name} style={{maxWidth: "100%"}} />
            </div>

            <div style={{padding: "16px"}}>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>

                <p>{product.description}</p>

                <Button className="w-100" onClick={()=> addItemToCart(product)}>Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default DetailProduct;
