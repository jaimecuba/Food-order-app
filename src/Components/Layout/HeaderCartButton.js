import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import { useContext, useEffect, useState } from 'react'

const HeaderCartButton = (props) =>{

    const [addedItemToCart, setAddedItemToCart] = useState(false)

    const cartCtx = useContext(CartContext)
    const { items } = cartCtx

    const numberOfItemsInCart = items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    const cartButtonAnimation = `${classes.button} ${addedItemToCart ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0){
            return
        } 
        setAddedItemToCart(true)

        const timer = setTimeout(()=> {
            setAddedItemToCart(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={cartButtonAnimation} onClick={props.showCartOn}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfItemsInCart}</span>
        </button>
    )
}

export default HeaderCartButton