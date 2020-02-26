import React, { Component } from 'react';
import Food from "./Food";
import { connect } from "react-redux";

class FoodList extends Component {

constructor(props){
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.state = {
        topping: ""
    }
}
handleSubmit(e){
    e.preventDefault()
    this.props.dispatch({
        type: "ADD_FOOD",
        topping: this.state.topping 
    })
    e.target.reset()
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

removeFood(id){
    this.props.dispatch({
        type: "REMOVE_FOOD", 
        id
    })
}

    render() {
        let myToppings = this.props.toppings.map((val, index) =>
         <Food removeFood={() => this.removeFood(val.id)} 
         topping={val.topping} 
         key={index}/>)
        return(
            <div>
                 <form onSubmit = {() => this.handleSubmit}>
                 <label> htmlFor="task">Topping</label>
                 <input type="text" name="topping" id="topping" 
                 onChange={this.handleChange}/>
                 <button>Add Topping to Bowl!</button>
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


export default connect(mapStateToProps)(FoodList)


