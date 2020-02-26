import React, { Component } from 'react';
import Food from "./Food"

export default class FoodList extends Component {

constructor(props){
    super(props)
    this.state = {
        toppings: ["Fajita Veggies", "Brown Rice", "Corn"]
    }
}
    render() {
        let myToppings = this.state.toppings.map((topping, index) => (<Food topping={topping} key={index}/>))
        return(
            <div>
                <ul>{myToppings}</ul>
            </div>
        )
    }
}


