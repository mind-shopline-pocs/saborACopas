import React, { useContext, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Item } from '../../ui/components/Item';

import { CartContext } from '../../context/ShoppingCartContext';
import { PaymentCheckout } from '../../ui/components/PaymentCheckout';
import { ProductosRecomendados } from '../../ui/components/ProductosRecomendados';

import { PiStarThin } from "react-icons/pi";
import { PrivaciPolitics } from '../../ui/components/PrivaciPolitics';


export const ProductPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const [cart, setCart] = useContext(CartContext)

    const [quantity, setQuantity] = useState(0);

    const[itemQuantity, setItemQuantity] = useState(1)

    const [reseña,setReseña] = useState(false)

    const onReturn = () => {
        navigate(-1);
      }

      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch(`https://arkusnexustest.myshopline.com/admin/openapi/v20240601/products/${id}.json`, {
            headers: {
                Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhcHBLZXkiOiI3MWNmMDJjNTE1NjRhMjJhM2IxOTJlMzZkNTg5ZmEzZTIwMzU5YjljIiwic2VsbGVySWQiOiIyMDE4NTg1NzQzIiwic3RvcmVJZCI6IjE3MDcxNzY3MTIwMjgiLCJ2ZXJzaW9uIjoiVjIiLCJkb21haW4iOiJodHRwczovL3NsLW9wZW4tdXMubXlzaG9wbGluZS5jb20iLCJ0aW1lc3RhbXAiOjE3MDcxODI2Mjk4ODIsImlzcyI6Inlzb3VsIiwiZXhwIjoxODAxNzkwNjI5fQ.Je8Z8w7yuo31XKE2X2DV7VfLCpmMvYR2ONiW5-WXCX6P9puufWbAdBx39B3Ka4uS_nWAL7_hBNWMKvsH8kfVdA',
            },
        });
          const data = await response.json();
          setProduct(data.product);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };

      if(!product){
   
        return  <Navigate to="/Home" />
     }
     



const src = product?.image?.src;
const title = product?.title;
const price = (product?.variants)?product?.variants[0].price: ""

const addToCart = () => {
  setCart((currItems) => {
    const isItemsFound = currItems.find((item) => item.id === id);
    if (isItemsFound) {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: parseFloat(item.quantity) + parseFloat(itemQuantity) , src,title };
        } else {
          return item;
        }
      });
    } else {
      return [...currItems, { id, quantity: parseFloat(itemQuantity), price,src ,title}];
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

const addAquantity = (e) => {
  setItemQuantity(e.target.value)
  console.log("Luiss"+e.target.value)
}


const addReseña = () => {

  setReseña(!reseña)
  
}
    
    
  return (

    <>
       
        <div className='container mt-5' style={{
            width: "100%",
          
            backgroundColor: "#FFFFFF",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}>
              <div className="row ">
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center  mt-4'>
                    <img className='imgZoom' src={product?.image?.src} alt="logo" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 ">
                  <h1 className='d-block text-justify'>{product?.title}</h1>
                  <h4 className="d-block text-justify mt-3">$ {(product?.variants)?product?.variants[0].price: ""} MXN</h4>
                  <p className="d-block text-justify">Impuesto incluido.</p>
                  <p className="d-block text-justify mt-5 mb-4">
                       {/* {utf8_decode(product?.body_html?.slice(3,product?.body_html?.length-4))} */}
                       {product?.body_html}
                  </p>
                  <p className="d-block text-justify" style={{
                    color:"#008080"
                  }}>PRESENTACIÓN</p>
                  <span className="badge rounded-pill  text-light" style={{
                    backgroundColor: "#008080",
                    fontSize: "20px",
                    fontWeight: "thin",
                    paddingRight: "1.5rem",
                    paddingLeft: "1.5rem",
                    paddingBottom: "0.8rem",
                    paddingTop: "0.8rem"
                  }}>{product?.spu}</span>
                   <p className="d-block text-justify mt-5" style={{
                    color:"#008080"
                  }}>CANTIDAD ({quantityPerItem} EN EL CARRITO)</p>
                  <input type="number" id="tentacles" name="CANTIDAD" min="1"  className='d-block text-center p-3 mb-4' style={{
                    width: "150px",
                    maxWidth: "100%",
                    
                  }}
                    onClick={addAquantity}
                  />
                  <div class="d-grid gap-2">
                    <button  className="p-2 shadow mb-2" onClick={() => addToCart()} style={{
                    backgroundColor: "white",
                    borderColor: "#DEB887",
                    color: "#DEB887",
                    display: "block",
              
                    }}>
                     Agregar a carrito
                      </button>
                      <PaymentCheckout totalPrice={100}/>
                  </div>
                  
                  {/* <div className='text-center'>
                  <span className="badge rounded-pill  text-light" style={{
                    backgroundColor: "#008080",
                    fontSize: "20px",
                    fontWeight: "thin",
                    paddingRight: "1.5rem",
                    paddingLeft: "1.5rem",
                    paddingBottom: "0.8rem",
                    paddingTop: "0.8rem"
                  }}>{quantityPerItem}</span>
                  </div> */}
                </div>
              <hr className='mb-5'/>
            </div>
        </div>

       <div className='simple-linear mt-5' style={{
        width: "100%",
        padding: "5px"
       }}>

            <div className='container bg-white' style={{
              marginTop: "100px",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            }}>
              <ProductosRecomendados/>
            </div>

            <div className='container' style={{
              marginTop: "100px",
            }}>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                  <h1>Reseñas de Clientes</h1>
                </div>
              </div>
              <div className='row d-flex justify-content-around'>
                <div className='col-xl-6 col-lg-6 d-flex justify-content-center'>

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 d-flex justify-content-center'>
                      <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                      <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                      <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                      <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                      <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                      </div>
                      <div className='col-12 d-flex justify-content-center'>
                      <p style={{color:"#DCDCDC", fontSize:"20px"}} className='d-block'>Sin Reseñas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 d-flex justify-content-center'>
                  <button  className="p-3 rounded reseña mb-2 " onClick={() => addReseña()} style={{
                    
                    display: "block",
                    width: "300px"
              
                    }}>
                     {(!reseña)?"Escribir una reseña":"Cancelar Reseña"}
                    </button>
                </div>
              </div>



            </div>
       </div>

  
       {(reseña) && 
      <div style={{
        backgroundColor: "#FFFFFF",
      }}>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
            <hr/>
            <h1>Escribir una Reseña</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <p>Calificación</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
                <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
                <PiStarThin style={{fontSize:"30px" , color:"#DAA520"}} />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center mt-4'>
                <p>Titulo de la Reseña</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center mt-4'>
               <input type="text" id="fname" name="fname" placeholder='Dele un título a su reseña' className='reseñaForm' style={{
                 width: "500px",
                 maxWidth: "100%",
                 padding: "12px",
                }}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center mt-4'>
                <p>Reseña</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center '>
              <textarea id="" name="" rows="7" cols="70" className='reseñaForm' placeholder='Escriba sus comentarios aquí'></textarea>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center mt-4 '>
              <p>Nombre (mostrado públicamente como )</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center '>
               <input type="text" id="fname" name="fname" placeholder='Ingrese su nombre publico(privado)' className='reseñaForm' style={{
                 width: "500px",
                 maxWidth: "100%",
                 padding: "12px",
                }}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center mt-4 '>
              <p>Correo electrónico</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center '>
               <input type="text" id="fname" name="fname" placeholder='Ingrese su correo electrónico(privado)' className='reseñaForm' style={{
                 width: "500px",
                 maxWidth: "100%",
                 padding: "12px",
                }}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12  mt-4 '>
              <p className='text-justify'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms and conditions and privacy policy.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-6  mt-4 '>
            <button  className="p-3 rounded reseña2 mb-2 " onClick={() => addReseña()} style={{
                    
                    display: "block",
                    width: "300px"
              
                    }}>
                     Cancelar Reseña
                    </button>
            </div>
            <div className='col-6  mt-4 '>
            <button  className="p-3 rounded reseña mb-5 " onClick={() => addReseña()} style={{
                    
                    display: "block",
                    width: "300px"
              
                    }}>
                     Enviar Reseña
                    </button>
            </div>
          </div>
        </div>
      </div>
      

    }
  
  <PrivaciPolitics/>
    </>
  )
}
