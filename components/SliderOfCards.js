import React from 'react'
import HeaderSt from '../styles/HeaderStyles.module.css'
import HeaderCard from './HeaderCard'

export default function SliderOfCards() {
  return (
    <div className={HeaderSt.CardsGroup}>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
      <HeaderCard CardImage={'/images/i1.jpg'} CardTitle={"Books"}/>
    </div>
  )
}
