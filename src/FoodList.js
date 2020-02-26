import React, { Component } from 'react';
import Food from "./Food";
import { connect } from "react-redux";
import { addFood, removeFood } from './actionCreators';

class FoodList extends Component {

constructor(props){
    super(props)
   
    this.state = {
        topping: ""
    }
}

handleSubmit(e){
    e.preventDefault()
    this.props.addFood(this.state.topping)
    e.target.reset()
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

removeFood(id){
    this.props.removeFood(id)
}

    render() {
        let myToppings = this.props.toppings.map((val, index) =>
         <Food removeFood={() => this.removeFood(val.id)} 
         topping={val.topping} 
         key={index}/>)
        return(
            <div>
                 <form onSubmit = {(e) => this.handleSubmit(e)}>
                 <label htmlFor="task">Topping</label>
                 <input type="text" name="topping" id="topping" 
                 onChange={(e) => this.handleChange(e)}/>
                 <button>Add to Bowl!</button>
                 </form>
                <ul>{myToppings}</ul>
            </div>
        )
    }
}

function mapStateToProps(reduxState){ 
    return {
        toppings: reduxState.toppings
    } 
}




export default connect(mapStateToProps, {addFood, removeFood} )(FoodList)


