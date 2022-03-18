import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from '../Cart/CartItem'

const Cart = (props) =>{
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }

    const addItemHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={classes['cart-items']}>
                        {cartCtx.items.map( i => (
                            <CartItem 
                                key={i.id} 
                                name={i.name} 
                                amount={i.amount} 
                                price={i.price} 
                                onRemove={removeItemHandler.bind(null, i.id)} 
                                onAdd={addItemHandler.bind(null, i)}/>
                        ))}
                    </ul>
    

    return (
        <Modal showCartOff={props.showCartOff}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.showCartOff}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart 