


import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Navigate, Route, Routes } from "react-router-dom"
import { ShoppingCartProvider } from "../../context/ShoppingCartContext"
import { HomePage } from "../pages/HomePage"

import { NavBarCustom } from "../../ui/components/NavBarCustom"
import Alert from 'react-bootstrap/Alert';
import { Footer } from "../../ui/components/Footer";
import { ProductPage } from "../pages/ProductPage";
import { ShoppingCart } from "../../ui/components/ShoppingCart";
import { PresentationCard } from "../../ui/components/PresentationCard";
import { CervezasPage } from "../pages/CervezasPage";
import { TequilasPage } from "../pages/TequilasPage";
import { ProductsNewPage } from "../pages/ProductsNewPage";
import { ItemPage } from "../pages/ItemPage";
import { AllProductsPage } from "../pages/AllProductsPage";




export const StoreRoutes = () => {
  return (
    <>
  
  <PayPalScriptProvider options={
        { 
          "client-id": "AbKhtTYY3ASbXezzgTDCdKZmwneJox7bSdfUsLPzjnRpb43eF-g2f4eK1yAMsjSfSoZEfvvPb1FoyXYB" 
        }
      }>
    <ShoppingCartProvider>
        <Alert className="text-center" key={"info"} variant={"info"}>
          Take advantage of our 10% discount on all 
        </Alert>   
        <NavBarCustom />
        
            <Routes>
              <Route path="Home" element={<HomePage />} />
              <Route path="product/:id" element={<ProductPage />} />
            
              <Route path="Cervezas" element={<CervezasPage />} />
              <Route path="Tequilas" element={<TequilasPage />} />
           
              <Route path="allProduct" element={<AllProductsPage />} />
              
              <Route path="cart" element={<ShoppingCart />} />

              <Route path="aboutUs" element={<PresentationCard />} />
  
              <Route path="/" element={<Navigate to={"/Home"} />} />
            </Routes>
      

         <Footer />
    </ShoppingCartProvider>
    </PayPalScriptProvider>
       
    </>
  )
}
