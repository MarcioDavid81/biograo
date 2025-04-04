import React from 'react'
import Marquee from "react-fast-marquee";
import { getPartners } from '../../../../actions';
import ImageMarquee from './ImageMarquee';

export default async function MarqueeBanner() {
  const partners = await getPartners();
  
  return (
    <section className=" container mx-auto px-4 py-12">
        <Marquee autoFill={true} pauseOnHover={true} className='flex items-center justify-between py-10 h-full'>
            {partners.map((partner: any) => (
                <div key={partner.id} className='mx-4' title={partner.acf.name}>
                    <ImageMarquee thumbnail={partner.acf.thumbnail} name={partner.acf.name} />
                </div>
            ))}
        </Marquee>
    </section>
  )
}
