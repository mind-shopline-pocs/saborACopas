import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/ShoppingCartContext';
import { ProductCard } from './ProductCard';

export const ProductosRecomendados = () => {

    const [cart, setCart] = useContext(CartContext)

    const [favorites, setFavorites] = useState([])

  //Calling the API to get the products
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://arkusnexustest.myshopline.com/admin/openapi/v20240601/products/products.json', {
                  headers: {
                      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhcHBLZXkiOiI3MWNmMDJjNTE1NjRhMjJhM2IxOTJlMzZkNTg5ZmEzZTIwMzU5YjljIiwic2VsbGVySWQiOiIyMDE4NTg1NzQzIiwic3RvcmVJZCI6IjE3MDcxNzY3MTIwMjgiLCJ2ZXJzaW9uIjoiVjIiLCJkb21haW4iOiJodHRwczovL3NsLW9wZW4tdXMubXlzaG9wbGluZS5jb20iLCJ0aW1lc3RhbXAiOjE3MDcxODI2Mjk4ODIsImlzcyI6Inlzb3VsIiwiZXhwIjoxODAxNzkwNjI5fQ.Je8Z8w7yuo31XKE2X2DV7VfLCpmMvYR2ONiW5-WXCX6P9puufWbAdBx39B3Ka4uS_nWAL7_hBNWMKvsH8kfVdA',
                  },
              });
              const data = await response.json();
             setFavorites(data?.products?.filter((product) => product.tags === "Favorites"));

          } catch (error) {
              console.error('Error fetching products:');
          }
      };

      fetchData();
  }, []); 

       //Cart Logic
       ///Remove and add more items
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

      const addToCart = (id,price,src,title) => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1, price,src,title };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1, price,src,title}];
          }
        });
      };
  return (
    <>
       <div className='container' style={{
  
       }}>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 style={{
                        color:"#008080"
                    }}>Productos Relacionados </h1>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row mt-5'>
                {favorites.map((favorite) => {

                    return(
                        <div className="col-xl-3 col-lg-6 col-md-6" key={favorite.id}>
                            <ProductCard props={favorite} buttonState="Ver Producto" />
                        </div>
                    )

                })

                }
            </div>
        </div>
    </>
  )
}
