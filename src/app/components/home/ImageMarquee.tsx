import Image from 'next/image'
import React from 'react'

interface PartnersProps {
    thumbnail: string;
    name: string;
}

export default function ImageMarquee({ thumbnail, name }: PartnersProps) {
  return (
    <Image src={thumbnail} alt={name} width={100} height={100} />
  )
}
