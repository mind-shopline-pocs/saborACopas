import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../ui/components/ProductCard'

export const TequilasPage = () => {
  const [tequilas, setTequilas] = useState([])


  //Logica para los Filtros

  

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

           
              //console.log(data?.products?.filter((product) => product.product_category.toLoweCase() === "beer"));
             setTequilas(data?.products?.filter((product) => product.product_category === "Tequila"));
              //Grabando en el local stoage para no hacer peticiones a la API

              // const productsStorage = data.products.map(product => {
              //     return  {
              //         id : product.id,
              //         title : product.title,
              //         handle : product.handle,
              //         image : product.image,
              //         price : product.variants[0].price,
              //         popularity : 2
              //     }
              // })
              
              // if(localStorage.getItem('products') !== null) {localStorage.setItem('products', "")}
              // if (localStorage.getItem('products') === null || localStorage.getItem('products') === ""){
              //     localStorage.setItem('products', JSON.stringify(productsStorage));
              // }
          } catch (error) {
              console.error('Error fetching products:');
          }
      };

      fetchData();
  }, []); 
  return (
    <>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 style={{
                        color:"#800000"
                    }}>Tequilas</h1>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row mt-5'>
                {tequilas.map((tequila) => {

                    return(
                        <div className="col-xl-3 col-lg-6 col-md-6" key={tequila.id}>
                            <ProductCard props={tequila} buttonState="Ver Tequila" />
                        </div>
                    )

                })

                }
                {/* <div className="col-lg-3 col-md-6">
                    
                </div> */}
            </div>
        </div>
    </>
  )
}
