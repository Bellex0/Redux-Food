import React, { Component } from 'react';
import Food from "./Food";
import { connect } from "react-redux";

class FoodList extends Component {

constructor(props){
    super(props)
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

export default connect()(FoodList)


