import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'

const MealItemForm = (props) =>{

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = e => {
        e.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount // just turning the above enteredAmount string into a number
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Quantity" 
                input={{
                    type: "number",
                    id: 'quantity_'+ props.id,
                    defaultValue: '1',
                    min: '1',
                    max: '10',
                    step: '1'
                }}
            />
            <button className={classes.button}>Add to cart</button>
            {!amountIsValid  && <p>Please enter a valid amount between 1 and 5</p>}
        </form>
    )
}

export default MealItemForm