import Image from 'next/image'
import React from 'react'
import HdSt from '../styles/HeaderStyles.module.css'
import Link from 'next/link'

export default function HeaderCard(product) {
  return (
    <div className={HdSt.CardContainer}>
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <a>
                <img
                //  width={900}
                //  height={800}

                 
                    src={`/images/i1.jpg`}
                    alt='/images/i1.jpg'
                    className="rounded shadow"
                />
            </a>
        </Link>
        <dev className="flex flex-col items-center justify-center p-5">
            <Link href={`/product/${product.slug}`}>
               <a><h2 className='text-lg'></h2></a>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <p>${product.price}</p>
            {/* <button className='primary-button' type="button">
                Add to cart
            </button> */}
        </dev>
    </div> 

     {/* <div className={HdSt.CardImage}>
            <Image 
                src={'/images/i1.jpg'}
                width={640}
                height={440}
            />
        </div>
        <div className={HdSt.CardTitle}>
            Books
        </div> */}


    </div>
  )
}
