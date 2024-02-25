import React from 'react'
import packsmall from '../../assets/packsmall.svg';
import cervezascollectionsmall from '../../assets/cervezascollectionsmall.svg';

import sabordelabaja from '../../assets/sabordelabaja.svg';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardHeader } from 'react-bootstrap';

export const CervezasAndTequilas = () => {
  return (
    <>
        <div className="container mt-5">
            <div className="row mt-4">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-light d-flex justify-content-center align-items-center">
                    <h2 style={{ color:"#800000"}} className=' p-4'>Bienvenidos a Sabor A Copas</h2>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-3" style={{
                    backgroundColor: "#E0FFFF"
                }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 d-flex justify-content-end p-3'>
                                            <img src={sabordelabaja} alt='' className=''/>
                                        </div>
                                        <div className='col-12  d-flex justify-content-end'>
                                            <Link to={`/cervezas`} className=" rounded p-3  text-white text-center "
                                            style={{
                                            textDecoration: 'none',
                                            backgroundColor: '#DAA520', 
                                            width: "200px"
                                            }} ><b>Ordena tu 12-Pack</b>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            
                           
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                <img src={packsmall} alt='' className='p-2 m-2'/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-center align-items-center">
                       
                        
                    </div> */}
                </div>
            </div>
        </div>

        {/* <div className="container mt-5">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-16 col-sm-12 " style={{
                   backgroundImage: `url(${cervezascollectionsmall})`,
                   width: "45%",
                   height: "600px",
                }}>
                    <h1>Llala</h1>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-16 col-sm-12 " style={{
                   backgroundImage: `url(${cervezascollectionsmall})`,
                   width: "45%",
                   height: "600px",
                }}>
                    
                </div>
            </div>

        </div> */}

        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <Card
    
    key="primary"
    text= "white"
//style={{ width: '18rem' }}
    className="mb-2 border border-warning  mr-2"
        >

        <CardHeader style={{
            backgroundColor: "#DAA520",
           
        }}>

        </CardHeader>

        <Card.Body style={{ 
            backgroundImage: `url(${cervezascollectionsmall})`,
            width: "100%",
            height: "600px",
            maxHeight: "600px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#708090",
            opacity: "0.7",
            zIndex: "1"

        }}>
            <Card.Text className='d-flex justify-content-center'>

            </Card.Text>

            <Card.Title className='text-center mb-5' style={
            {
                color:"#FFFFFF",
                fontSize: "3rem"
            }
            }> Tequilas </Card.Title>
            <Card.Text className='text-center mb-5'style={
            {
            color:"#FFFFFF"
            }
            }>
           Las mejores Cervezas artesanales del mundo
            </Card.Text>

         <Card.Text className=' d-flex justify-content-center '>
                <Link to={`/Cervezas`} className=" rounded p-3   btn btn-outline-light text-white text-center "
            style={{
            textDecoration: 'none',
           
            }} ><b>Catálogo de Cervezas</b></Link>
                </Card.Text>





</Card.Body>
</Card>
                </div>
                <div className="col-6">
                    <Card
    
                    key="primary"
                    text= "white"
    //style={{ width: '18rem' }}
                    className="mb-2 border border-warning  mr-2"
                        >

                        <CardHeader style={{
                            backgroundColor: "#DAA520",
                        }}>

                        </CardHeader>
    
                        <Card.Body style={{ 
                            backgroundImage: `url(https://saboracopas.com/cdn/shop/collections/tequilas_small.svg?v=1698366949)`,
                            width: "100%",
                            height: "600px",
                            maxHeight: "600px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "#708090",
                            opacity: "0.7",
                            zIndex: "1"

                        }}>
                            <Card.Text className='d-flex justify-content-center'>
          
                            </Card.Text>

                            <Card.Title className='text-center mb-5' style={
                            {
                                color:"#FFFFFF",
                                fontSize: "3rem"
                            }
                            }> Tequilas </Card.Title>
                            <Card.Text className='text-center mb-5'style={
                            {
                            color:"#FFFFFF"
                            }
                            }>
                            Tequila ultra premium sin aditivos
                            </Card.Text>

                         <Card.Text className=' d-flex justify-content-center '>
                                <Link to={`/Tequilas`} className=" rounded p-3   btn btn-outline-light text-white text-center "
                            style={{
                            textDecoration: 'none',
                           
                            }} ><b>Catálogo de Tquilas</b></Link>
                                </Card.Text>
      
     
     
    
      
            </Card.Body>
        </Card>
                </div>
            </div>
        </div>


    </>

   
  )
}
