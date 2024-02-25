import React, { useContext } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext'


export const PaypalButton  = (props) => {
    const navigate = useNavigate()
    const [cart, setCart] = useContext(CartContext)

    const clearCart = () => {
        setCart([])
    }

  return (
    <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: props.title,
                        amount: {
                            value: props.total,
                        },
                    },
                ],
            });
        }}

        onApprove={async(data, actions) => {
            const order = await actions.order?.capture();
   
            if(order?.status?.toLocaleUpperCase() === 'COMPLETED'){
                console.log('Order Completed')
                clearCart();
                navigate('/ProductList',{
                    replace: true
                });
            }else{
                console.log(order?.status?.toLocaleUpperCase())
                localStorage.setItem('orderStatus', JSON.stringify(order?.status?.toLocaleUpperCase()));
            }
           
        }}
    />

    
  )
}
