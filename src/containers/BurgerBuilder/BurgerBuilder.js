import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        ordered: false
    }

    orderButtonHandler = () => {
        this.setState( {ordered: true} );
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState( {ingredients: updatedIngredients, totalPrice: newPrice} )
    }

    removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            if (oldCount > 0) {
                const updatedCount = oldCount - 1;
                const updatedIngredients = {
                ...this.state.ingredients
                };
                updatedIngredients[type] = updatedCount;
                const priceDeduction = INGREDIENT_PRICES[type];
                const newPrice = this.state.totalPrice - priceDeduction;
                this.setState( {ingredients: updatedIngredients, totalPrice: newPrice} )
            }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        const disabledButtonCheck = this.state.totalPrice === 4;

        return (
            <Fragment>
                <Modal show={this.state.ordered}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    disabledButton={disabledButtonCheck}
                    order={this.orderButtonHandler} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;