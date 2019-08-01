import React, {Component, Fragment} from 'react'
import './Product.css'
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 4
    }
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render() {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://icon-library.net/images/cart-icon-png-white/cart-icon-png-white-4.jpg" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product