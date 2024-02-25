import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { IoMdPaperPlane } from "react-icons/io";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='' style={{
      backgroundColor: "#FFEFD5"
    
    }}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>

          <p style={{
            color: "#DAA520",
            fontSize: "20px"
          }}>Suscríbete para recibir promociones</p>
          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn> */}
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              
              <MDBCol md='' >
                <MDBInput contrast type='email' label='' placeholde="Email" className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn  type='submit' className='' style={
                  {
                    backgroundColor: "#DAA520",
                    color: "white"
                  }
                }>
                  <IoMdPaperPlane style={{color: "white", fontSize:"25px"}} className='' />
                    Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='' style={{
          color: "#DAA520",
        }}>
          <p>
            Siguenos en las Redes Sociales
          </p>
        </section>
      </MDBContainer>

      <div className='text-center '>
      <Link 
                        className="navbar-brand" 
                        to="https://www.instagram.com/saboracopasbc/" 
                        >
                           <CiInstagram  style={{color: '#DAA520', fontSize: '50px'}}/>
        </Link>
       
        </div>
      
    </MDBFooter>
  );
};