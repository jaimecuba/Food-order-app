import { Fragment } from "react/cjs/react.production.min"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals = () =>{
    return (
        <Fragment>
            <AvailableMeals />
             {/* <MealsSummary />  */}
        </Fragment>
    )
}

export default Meals