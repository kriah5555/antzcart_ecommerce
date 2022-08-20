import React from 'react'
import SliderOfCards from './SliderOfCards'
import HeaderSt from '../styles/HeaderStyles.module.css'
export default function Header() {
  return (
     <div className={HeaderSt.HeaderContainer}>
        <div className={HeaderSt.HeaderTitle}>Discover our products</div>
        <SliderOfCards/>
    </div>
  )
}
