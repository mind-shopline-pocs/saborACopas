import React from 'react'
import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'

export const ItemAddToCart = ({id,title,image,variants}) => {

    const [cart, setCart] = useContext(CartContext)

    const price = variants[0].price
    const src = image.src
  
    console.log(image)

    const addToCart = () => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1, src,title };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1, price,src ,title}];
          }
        });
      };

    const removeItem = (id) => {
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      };

      const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
      };

      const quantityPerItem = getQuantityById(id);
  return (
    <>

    </>
  )
}
