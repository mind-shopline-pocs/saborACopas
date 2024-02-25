import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StoreRoutes } from '../store/routes/StoreRoutes'
import { HomePage } from '../store/pages/HomePage'




export const AppRouter = () => {
    return (
      <>
        
        <Routes>
            <Route path="/*" element={ <StoreRoutes />} />
        </Routes>
      </>
    )
  }
  