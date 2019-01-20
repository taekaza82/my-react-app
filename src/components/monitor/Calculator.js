import React, { Component } from 'react';


class Calculator extends Component {

    showOrders(orders) {
        if(!orders || orders.lenght == 0) {
            return <li className="text-right text-musted title">ไม่มีสินค้า</li>
        } else {
            return orders.map(order =>(
            <li className="text-right text-success title">
                {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
            </li>
            ))
        }
    }

    render(){

        const { totalPrice, orders} = this.props;

        return (
            <div >
                <h1 className="text-right">{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrders(orders)}                    
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator;