import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { GrCloudComputer } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdHighQuality } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { Favorites } from './Favorites';
import { PrivaciPolitics } from './PrivaciPolitics';
import logoSabor from "../../assets/Logo-SaborACopas.svg"
import ornamental from "../../assets/ornament_2.svg"
import copo from "../../assets/presentation/ico-snowflake.svg"
import truck from "../../assets/presentation/ico-transport.svg"
import warehouse from "../../assets/presentation/ico-storage.svg"
import personal from "../../assets/presentation/ico-staff.svg"
import computer from "../../assets/presentation/ico-computer.svg"
import ramuri from "../../assets/marcas/ramuri.avif"
import hacker from "../../assets/marcas/hacker.avif"
import gouden from "../../assets/marcas/gouden.avif"
import sapporo from "../../assets/marcas/sapporo.avif"
import boscoli from "../../assets/marcas/boscoli.avif"
import diamante from "../../assets/marcas/diamante.avif"

import cactus from "../../assets/presentation/ico-cactus.svg"
import cart from "../../assets/presentation/ico-cart.svg"
import customerService from "../../assets/presentation/ico-customer-service.svg"
import handshake from "../../assets/presentation/ico-handshake.svg"
import reward from "../../assets/presentation/ico-reward.svg"
import socialnetw from "../../assets/presentation/ico-social-netw.svg"
 import customer from "../../assets/presentation/ico-customer.svg"
 import training from "../../assets/presentation/ico-training.svg"





export const PresentationCard = () => {
    const favorites = JSON.parse(localStorage.getItem('products'));
    
//   return (
//     <>
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-4">
//                     <h2 className="">Quiénes Somos</h2>
//                 </div>
//                 <div className="col-8">
//                     <hr style={{
//                         position: 'buttom',
//                     }}/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className='col-6 d-flex justify-content-center align-items-center'>
//                     <img style={{width: '200px', height: '100px'}}
//                     className='rounded-pill' src="https://cl.buscafs.com/www.startupstijuana.com/public/uploads/images/588_600x315.jpg" alt="logo" />
//                 </div>
//                 <div className="col-6">
//                 <p className="text-justify fw-lighter text-break">
//                         Arkus clothing is a contemporary clothing brand known for its trend-driven styles with affordable prices. Drawing inspiration from the latest trends, from street style to runway, Arkus clothing brand offers an array of styles that is fit for the fashion loving girl. From workwear to street style, night out, About Us label can keep you going from day-to-night. Shop the latest collection from About Us clothing line, ranging in dresses to tops, sweater knits, rompers, pants and outerwear.
//                 </p>
//                 </div>
//             <hr/>
//             </div>

//             <div className="row">
//                 <div className="col-12">
//                     <h2 className="text-center title">Infrastructure</h2>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <GrCloudComputer  style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <FaPeopleGroup  style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Best Personal</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <MdHighQuality  style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>High Quality</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <MdLocalOffer  style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Best Offert</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <FaWarehouse style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Huge Warehouse</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                     <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <TbTruckDelivery style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Quick Delivery</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' style={{
//                     backgroundcolor:"#FAF0E6"
//                 }} >
//                         <Card.Body>
//                             <Card.Text className='text-center'>
//                                 <MdOutlineSystemSecurityUpdateGood  style={{color: 'black', fontSize: '100px'}} />
//                             </Card.Text>
//                             <Card.Text className='text-center'>
//                                 <b>Mobile App</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <hr/>
//             </div>

//             <div className="row">
//                 <div className="col-12">
//                     <h2 className="text-center title">Our Colaborators</h2>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/11_mejores_logos_marcas_moda_prada.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/04_mejores_logos_marcas_moda_fendi.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/03_mejores_logos_marcas_moda_ermenegildo-zegna.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/02_mejores_logos_marcas_moda_dolceandgabbana.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/06_mejores_logos_marcas_moda_gucci.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                 <Card className='m-2 square border border-info' >
//                         <Card.Body>
//                         <Card.Img variant="top" src="https://codewebbarcelona.com/wp-content/uploads/2018/08/00_mejores_logos_marcas_moda_chanel.jpg" />
//                             <Card.Text className='text-center'>
//                                 <b>Cloud Servers</b>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
            
//         </div>
       
//         {
//             favorites && <div className='favoritesBackGround mt-3'>
               
//                 <Favorites props={favorites}/>
//                 </div>
//         }
//          <PrivaciPolitics/>
//     </>
//   )

return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Quiénes Somos</h2>
            </div>

            <div className="row">
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12  d-flex justify-content-center align-items-center  mt-4'>
                    <img className='imgZoom' src={logoSabor} alt="logo" />
                </div>
                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12  d-flex justify-content-center align-items-center  mt-4'>
                    <div className='conatainer'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className=''>En <strong>SABOR A COPAS</strong>, somos una empresa mexicana que destaca por tener uno de los mejores equipos de venta y por la distribución de productos artesanales de alta calidad en Baja California Norte, Sur y Sonora. </p>
                            </div>
                            <div className='col-12'>
                                <p className='d-block'>Contamos con una amplia gama de productos de alta calidad, con un equipo de trabajo altamente capacitado y con una infraestructura de vanguardia que nos permite ofrecer un servicio de excelencia.</p>
                            </div>
                            <div className='col-12'>
                                <img className='imgZoom' src={ornamental} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div className="row" style={{marginTop: "100px"}}>
        <div className="col-4">
          <h2>Infraestructura</h2>
        </div>
        <div className="col-8">
          <hr/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-2 col-md-3 col-sm-6 d-flex-justify-content-center" style={{
            marginRight: "100px"
        }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='imgZoom' src={copo} alt="logo" style={{
                        width: '120px'
            
                        }} />
                    </div>
                    <div className='col-12'>
                        <p className='d-block text-center'>CUARTOS REFRIGERADOS</p>
                    </div>
                </div>
            </div>
           
          
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6" style={{
            marginRight: "100px"
        }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='imgZoom ' src={truck} alt="logo" style={{
                        width: '120px'
            
                        }} />
                    </div>
                    <div className='col-12'>
                        <p className='d-block text-center'>UNIDADES DE ENTREGA REFRIGERADAS EN SECO</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6" style={{
            marginRight: "100px"
        }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='imgZoom ' src={warehouse} alt="logo" style={{
                        width: '120px'
            
                        }} />
                    </div>
                    <div className='col-12'>
                        <p className='d-block text-center'>BODEGAS DE ALMACENAMIENTO</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6" style={{
            marginRight: "100px"
        }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='imgZoom ' src={personal} alt="logo" style={{
                        width: '120px'
            
                        }} />
                    </div>
                    <div className='col-12'>
                        <p className='d-block text-center'>PERSONAL ALTAMENTE CAPACITADO</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6" style={{
            marginRight: "100px"
        }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='imgZoom ' src={computer} alt="logo" style={{
                        width: '120px'
            
                        }} />
                    </div>
                    <div className='col-12'>
                        <p className='d-block text-center'>TECNOLOGIA DE VANGUARDIA</p>
                    </div>
                </div>
            </div>
        </div>
          
      </div>
        </div>

        <div className='container'>
            <div className='row mt-5'>
                <div className="col-5">
                    <h2>Marcas que manejamos</h2>
                </div>
                <div className="col-7">
                    <hr/>
                </div>
            </div>
            <div className='row mt-5 d-flex justify-content-center align-items-center'>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={ramuri} alt="logo" style={{}} />
                </div>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={hacker} alt="logo" style={{}} />
                </div>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={gouden} alt="logo" style={{}} />
                </div>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={sapporo} alt="logo" style={{}} />
                </div>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={boscoli} alt="logo" style={{}} />
                </div>
                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <img className='imgZoom ' src={diamante} alt="logo" style={{}} />
                </div>
            </div>
        </div>

        <div className="container"> 
            <div className='row mt-5'>
                <div className="col-5">
                    <h2>¿Porqué Nosotros?</h2>
                </div>
                <div className="col-7">
                    <hr/>
                </div>
            </div>

            <div className='row mt-5'>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={customer} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Amplia cartera de clientes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={reward} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Programa Rewards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={training} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Promovemos, capacitamos y apoyamos a nuestros clientes para que su producto llegue a más consumidores.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={cart} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Damos el debido cuidado o su producto desde que llega a su punto de venta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={customerService} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Seguimiento postventa personalizado a todos nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-md-3 col-sm-12'>
                                <img className='imgZoom ' src={handshake} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Contamos con aliados estratégicos para impulsar tu marca en los diferentes puntos de venta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-3'>
                                <img className='imgZoom ' src={socialnetw} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Publicidad y contenido de su producto en nuestras redes sociales y con los clientes donde colocamos su producto.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-3'>
                                <img className='imgZoom ' src={cactus} alt="logo" style={{
                                width: '120px'
                                }} /> 
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <p className='d-block text-justify'>Distribuimos en Baja California Norte, Sur y Sonora.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <PrivaciPolitics/>
    </div>
   
  );

}

