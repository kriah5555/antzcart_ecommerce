import React from 'react'
import HeaderSt from '../styles/HeaderStyles.module.css'
import HeaderCard from './HeaderCard'
import data from '../utils/data'


export default function SliderOfCardsProducts(products) {
  return (
    <div className={HeaderSt.CardsGroupPtoducts}>
       {data.products.map((product) => (
      <HeaderCard  product={product} />
      ))}

      
    </div>
  )
}
