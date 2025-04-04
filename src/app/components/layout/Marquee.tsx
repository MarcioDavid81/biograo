import React from 'react'
import Marquee from "react-fast-marquee";

export default async function MarqueeAviso() {
  
  return (
    <section className=" container-custom mx-auto bg-gray-900 z-[100]">
        <Marquee autoFill={true} pauseOnHover={true} className='flex items-center justify-between h-full'>
            <div className='mx-4'>
                <p className='text-white text-xs'>Este site é apenas um modelo, as informações aqui contidas não representam a realidade, tampouco os produtos e preços exibidos.</p>
            </div>
        </Marquee>
    </section>
  )
}