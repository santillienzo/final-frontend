import react, { ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { ProductCart, Product} from '../lib/interface';

const CartContext = react.createContext({})

interface Props {
    children: ReactNode
}

export function CartContextProvider({children}: Props) {
    const [cartItems, setCartItems] = useState<ProductCart[]>(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    
    const changePriceTotal = ():number=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                let _price = 0;
                cartItems.map((item: ProductCart):number=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    return _price =_price + item.price * item.quantity
                })
                return _price
            }
        }

        return 0.00
    }

    const [priceTotal, setPriceTotal] = useState<number>(changePriceTotal) 

    const changeCountCart = ():number=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                //Recorremos el carrito
                let _count = 0
                cartItems.forEach((item: ProductCart)=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _count = _count + item.quantity
                })  
                return _count     
            }
        }
        return 0
    }

    const [countCart, setCountCart] = useState<number>(changeCountCart)
    const [showAlert, setShowAlert] = useState<boolean>(false)

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item: Product)=>{
        let quantity = 1;
        //Extraemos todos los datos del producto que seleccionemos
        const itemCart:  ProductCart= {...item, quantity}
        setPriceTotal(priceTotal! + itemCart.price * itemCart.quantity)
        
        const exist = cartItems.some((product: ProductCart) => product.id === itemCart.id);

         //En caso de que así sea sumamos 1 a la cantidad del producto, y si no es así agregamos el producto al render
        if (exist) {
            const pro = cartItems.map((product: ProductCart)=>{
                if (product.id === itemCart.id) {
                    product.quantity+= itemCart.quantity
                    setCountCart(countCart + itemCart.quantity)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else{
            setCartItems([...cartItems, itemCart])
            setCountCart(countCart + itemCart.quantity)
        }
        toast.success('Producto añadido al carrito!')
    }

    const deleteItemToCart = (idProduct: number | string)=>{
        cartItems.forEach((item: ProductCart)=>{
            if (item.id === idProduct) {
                let priceReduce = item.price * item.quantity
                setPriceTotal(priceTotal! - priceReduce)
                setCountCart(countCart! - item.quantity)
            }
        })
        setCartItems(cartItems.filter((item: ProductCart) => item.id !== idProduct))
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        toast.success('Producto eliminado al carrito!')
    }

    const updateItem = (value:number, item:Product)=>{
        const pro = cartItems.map((product: ProductCart)=>{
            if (product.id === item.id) {
                product.quantity = value
                setPriceTotal(changePriceTotal)
                setCountCart(changeCountCart)
                return product
            }else{
                return product
            }
        })
        setCartItems([...pro])
    }
    

    return (
        <CartContext.Provider value={{countCart, priceTotal, cartItems, addItemToCart, deleteItemToCart, updateItem, setShowAlert, showAlert}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;