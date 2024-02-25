import React, { useState } from 'react'
import { PaypalButton } from './PaypalButton'

export const PaymentCheckout = ({totalPrice}) => {

 console.log(totalPrice)

  return (  
    <>
        
        <div className='row'>
          <div className='col' style={{
            width: '100%',
            height: '100%'
          }}>
          <PaypalButton title="Shopping Cart" total={totalPrice}/>
          </div>
          </div>
       
    </>
  )
}
