import Image from 'next/image'
import React from 'react'
import HdSt from '../styles/HeaderStyles.module.css'


export default function HeaderCard(CardImage, CardTitle) {
  return (
    <div className={HdSt.CardContainer}>
        <div className={HdSt.CardImage}>
            <Image 
                src={'/images/i1.jpg'}
                width={640}
                height={440}
            />
        </div>
        <div className={HdSt.CardTitle}>
            Books
        </div>
    </div>
  )
}
