import { useParams, Navigate } from "react-router-dom"
import {Image,Button} from 'react-bootstrap'
import data from "../../lib/data"
import { Product } from "../../lib/interface"

const getProduct = (id: string) => {
    return data.find((product:Product) => product.id === Number(id))
}

const DetailProduct = () => {
    const {id} = useParams()
    const product = getProduct(id!)

    if (!product) {
        return <Navigate to="/" />
    }

    return (
        <div style={{display: "flex"}}>
            <div style={{padding:"16px"}}>
                <Image src={product?.image} alt={product?.name} style={{maxWidth: "100%"}} />
            </div>

            <div style={{padding: "16px"}}>
                <h1>{product?.name}</h1>
                <h2>{product?.price}</h2>

                <p>{product?.description}</p>

                <Button>Comprar</Button>
            </div>
        </div>
    )
}

export default DetailProduct;
