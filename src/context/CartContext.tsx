import react, { ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CartContext = react.createContext({})

interface Props {
    children: ReactNode
}

export function CartContextProvider({children}: Props) {
    const [cartItems, setCartItems] = useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    const [priceTotal, setPriceTotal] = useState(()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                let _price = 0;
                cartItems.map((item: any)=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _price = _price + item.sale_price * item.quantity
                })
                return _price
            }else{
                return 0.00
            }
        }
    }) 
    const [countCart, setCountCart] = useState(()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                //Recorremos el carrito
                let _count = 0
                cartItems.map((item: any)=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _count = _count + item.quantity
                })  
                return _count     
            }else{
                return 0
            }
        }
    })
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item: any)=>{
        let quantity = 1;
        //Extraemos todos los datos del producto que seleccionemos
        item = {...item, quantity}

        setPriceTotal(priceTotal! + item.sale_price * item.quantity)
        
        const exist = cartItems.some((product: any) => product.id === item.id);

         //En caso de que así sea sumamos 1 a la cantidad del producto, y si no es así agregamos el producto al render
        if (exist) {
            const pro = cartItems.map((product: any)=>{
                if (product.id === item.id) {
                    product.quantity+= item.quantity
                    setCountCart(countCart + item.quantity)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else{
            setCartItems([...cartItems, item])
            setCountCart(countCart + item.quantity)
        }
        toast.success('Producto añadido al carrito!')
    }

    const deleteItemToCart = (idProduct: any)=>{
        cartItems.map((item: any)=>{
            if (item.id === idProduct) {
                let priceReduce = item.sale_price * item.quantity
                setPriceTotal(priceTotal! - priceReduce)
                setCountCart(countCart! - item.quantity)
            }
        })
        setCartItems(cartItems.filter((item: any) => item.id !== idProduct))
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        toast.success('Producto eliminado al carrito!')
    }

    const updateItem = (action:any, item:any)=>{


        if (action === "AUMENTAR") {
            const pro = cartItems.map((product: any)=>{
                if (product.id === item.id) {
                    product.quantity+= 1
                    setPriceTotal(priceTotal + product.sale_price)
                    setCountCart(countCart! + 1)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else if(action === "REDUCIR"){
            if (item.quantity > 1) {
                const pro = cartItems.map((product: any)=>{
                    if (product.id === item.id) {
                        product.quantity-= 1
                        setPriceTotal(priceTotal! - product.sale_price)
                        setCountCart(countCart! - 1)
                        return product
                    }else{
                        return product
                    }
                })
                setCartItems([...pro])
            }else{
                deleteItemToCart(item.id)
            }
        }
    }

    return (
        <CartContext.Provider value={{countCart, priceTotal, cartItems, addItemToCart, deleteItemToCart, updateItem, setShowAlert, showAlert}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;