import React from 'react'
import SaborACopasLogo from '../../assets/Logo-SaborACopas.svg';

export const PrivaciPolitics = () => {
  return (
    <>
        <div className='mt-5 mb-2' style={{
            height: "20px",
            width: "100%",
            backgroundColor: "#DAA520",
        }}></div>
        <div className='favoritesBackGround d-flex justify-content-center p-3 '>
            <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center mt-5 mb-3'>
                <img style={{width: '200px', height: '100px'}}
                className='rounded-pill' src={SaborACopasLogo} alt="logo" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center title'>Política de Privacida  Terminos y Condiciones</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center title'>Cervezas  Tequilas  Quiénes Somos  Contacto</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center'  style={{
                    color: "#DAA520",
           
                    }}> © 2023 Sabor A Copas. Derechos reservados.</p>
                </div>
            </div>
           
            </div>
           
        </div>
    </>
  )
}
