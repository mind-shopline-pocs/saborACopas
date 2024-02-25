import React from 'react'
import { Carrousel } from '../../ui/components/Carrousel'
import { ProductList } from '../components/ProductList'
import { PrivaciPolitics } from '../../ui/components/PrivaciPolitics'

export const HomePage = () => {
  return (
    <>
        <Carrousel />
        <ProductList />
        
        <PrivaciPolitics/>
    </>
  )
}
