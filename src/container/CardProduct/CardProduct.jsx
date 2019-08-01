import React, {Component, Fragment} from 'react'
import '../Product/Product.css'

class CardProduct extends Component {
    state = {
        order: 4
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }
    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }else{
            alert("tidak bisa dikurangi lagi")
        }
    }
    render() {
        return(
            <div className="card">
                <div className="img-thumb">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/au_0708_pack15.jpg" alt=""/>
                </div>
                <p className="title">Ayam Utuh</p>
                <p className="price">Rp.100.000,00-</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct