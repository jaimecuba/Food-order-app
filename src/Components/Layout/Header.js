import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import { Fragment } from 'react/cjs/react.production.min'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton showCartOn={props.showCartOn}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table of food"/>
            </div>
        </Fragment>
    )
}

export default Header