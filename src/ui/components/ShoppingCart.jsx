
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/ShoppingCartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { PaymentCheckout } from './PaymentCheckout';
import { Favorites } from './Favorites';
import { PrivaciPolitics } from './PrivaciPolitics';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { ProductosRecomendados } from './ProductosRecomendados';



export const ShoppingCart = () => {

    const [cart, setCart] = useContext(CartContext);
    const [cartEmpty, setCartEmpty] = useState(null);
    const productsStotage = JSON.parse(localStorage.getItem('products'));

    const [subTotal, setSubtotal] = useState(0);

    const[itemQuantity, setItemQuantity] = useState(1)

    useEffect(() => {
        console.log("Carro"+ (cart.length>0));
        setCartEmpty(cart.length>0);
    })

    

    const [check, setcheck] = useState(false)
    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    // const totalPrice = cart.reduce(
    //   (acc, curr) => acc + curr.quantity * curr.price,
    //   0
    // );

    const totalPrice =cart.reduce((acc, curr) => {
      // setSubtotal(acc + curr.quantity * curr.price);
      return  acc + curr.quantity * curr.price;
    }, 0);

    const getSubtotal = () => {
      setSubtotal(totalPrice)
    }

    const checkOut = () => {
       setcheck(true);
        console.log(check);
    }

    const clearCart = () => {
        setCart([]);
    }

    


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

      const addToCart = (id) => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1,  };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1}];
          }
        });
      };

      const removeItemPerId = (id) => {
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: 0 };
              } else {
                return item;
              }
            });
          }
        });
      };

    

  return (
    <>

     


        {
            (!cartEmpty) && 
            <div className='container mt-5' style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              padding: "8px"
          }}>
              <div className='row'>
                <div className="col-12" style={{
                  marginTop: "100px",
                  marginBottom: "20px"
                }}>
                  <h1 className=' text-center'>Tu carrito Es vacío</h1>
                </div>
              </div>
              <div className='row'>
                <div className="col-12 d-flex justify-content-center">
                <Link to="/allProduct" className=" rounded p-3  text-white text-center "
                style={{
                textDecoration: 'none',
                backgroundColor: '#DAA520',
                marginBottom: "50px"
                }} ><b>Seguir Comprando</b></Link>
                </div>
              </div>
              <div className='row'>
                <div className="col-12">
                  <h3 className='text-center'>¿Tienes una cuenta?</h3>
                </div>
              </div>
              <div className='row'>
                <div className="col-12 mb-5">
                  <p className=' text-center'>Inicia sesión para finalizar tus compras con mayor rapidez.</p>
                </div>
              </div>
            </div>
           
        }

        { (cartEmpty) && 
          <div className='container mt-5' style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",

        }}>

            <div className='row'>
              <div className='col-6 mt-4 mb-4 '>
                <h1 className='m-5'>Tu carrito</h1>
              </div>
              <div className='col-6 mt-4 mb-4 d-flex justify-content-center align-items-center'>
                <Link 
                        className="m-5" 
                        to="/allProduct"
                        >
                          Seguir comprando
                </Link>
              </div>
            </div>

            <Table responsive  variant='white'>
                <thead>
                    <tr>
                        <th className='text-center'>PRODUCTO</th>
                        <th className='text-center'>CANTIDAD</th>
                        <th className='text-center'>TOTAL</th>
                       
                    </tr>
                </thead>
                <tbody className='mb-5'>
                    {
                        cart.map((item) => (
                            <tr key={item.id} className=''>
                                <td className='d-flex justify-content-center pt-4'> 
                                    {/* <Card style={{ width: '7rem' }} >
                                        <Card.Img  variant="top" src={item.src} />
                                    </Card> */}
                                    <img className='imgZoom' src={item?.src} alt="logo" style={{width: "7rem"}} />
                                   
                                </td>
                                <td className='text-center pt-5 '>
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-6 col-sm-12'>
                                        <p className='d-block text-center'>{item.title}</p>
                                        <p className='d-block text-center'>${item.price}</p>
                                      </div>
                                      <div className='col-md-6 col-sm-12 d-flex justify-content-beetween '>
                                        {/* <input type="number" id="tentacles" name="CANTIDAD" value={item.quantity}  min="1"  className='d-block text-center p-3 mb-4' style={{
                                        width: "150px",
                                        maxWidth: "100%",
                                        marginRight: "15px",
                                        }}
                                      /> */}
                                        <button onClick={() => removeItem(item.id)} >
                                          -
                                        </button>

                                        <input
                                          className="text-center"
                                          type="number"
                                          value={item?.quantity}
                                                 />

                                        <button onClick={() => addToCart(item.id)} >
                                        +
                                        </button>

                                        <FaRegTrashAlt className='' style={{
                                          marginTop: "20px",
                                          marginLeft: "10px",
                                        }} onClick={() =>removeItemPerId(item.id)} />
                                       
                                      </div>
                                    </div>
                                  </div>
                                  </td>
                                <td className='pt-5'>${item.quantity * item.price} MXN</td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </Table>

            
            <div className='row mt-5 pb-5'>
              <div className='col-6'>
                   
              </div>
              <div className='col-6'>
                <div class="d-grid gap-2">
                   
                      <p className='d-block text-center'>Subtotal: ${totalPrice} MXN</p>
                      <p className='d-block text-justify'>Impuesto incluido y los gastos de envío se calculan en la pantalla de pago</p>
                      <PaymentCheckout totalPrice={totalPrice}  />
                  </div>
              </div>
            </div>

        </div>
        }



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
    </div>


        {/* {
            (!cartEmpty) && <div className="alert alert-danger mt-3 text-center" role="alert">
                Your cart is empty</div>
        }
        { (cartEmpty) && 
        <div className="container mt-3 mb-3"> 
            <h2 className="p-3 text-center title">Shopping Cart</h2>  
            <Table responsive bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th className='text-center'>Product</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr key={item.id}>
                                <td className='text-center'> 
                                    <Card style={{ width: '5rem' }} >
                                        <Card.Img  variant="top" src={item.src} />
                                    </Card>
                                </td>
                                <td className='text-center'>{item.title}</td>
                                <td>
                                    <div className=" d-flex justify-content-between">
                                        <button className="btn btn-outline-success btn-sm" onClick={() => addToCart(item.id)}>
                                            +
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button className="btn btn-outline-danger btm-sm" onClick={() => removeItem(item.id)}>
                                            -
                                        </button>
                                    </div>
                                </td>
                                <td className='text-center'>${item.quantity * item.price}</td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </Table>

            <hr/>
           
            
            <div className="d-flex flex-row-reverse mb-3">

            <Card  bg="dark"
                key="primary"
                text= "white"
                style={{ width: '30rem' }}
                className="mb-2 border border-info rounded-4 mr-2">
                    <Card.Body>
                        <Card.Text className='text-center'>
                            SubTotal: ${totalPrice}
                        </Card.Text>
                        <Card.Text className=''>
                            <span>Taxes included and shipping cost is going to be calculated at checkout screen.</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='container'>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-outline-info mt-3" onClick={checkOut}>Checkout</button>
                            <button className="btn btn-outline-danger mt-3 ml-2" onClick={clearCart}>Clear Cart</button>
                        </div>
                        {  (check) &&<div className='animate__animated animate__bounce justify-content-center'>
                                <PaymentCheckout totalPrice={totalPrice}/>
                            </div>
                        }
                        
                    </Card.Footer>
                </Card>
            </div>
 
        </div>
        }
  
        {
            productsStotage && <div className='favoritesBackGround mt-3'>
               
                <Favorites props={productsStotage}/>
                </div>
        } */}
        <PrivaciPolitics/>
       
    </>
  )
}
