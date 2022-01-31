import Image from 'next/image'
import React from 'react'

function QrCode() {
  return (
    <div className="h-96 w-72 rounded-xl bg-white ">
      <div className="relative h-56 m-3 rounded-md">
        <Image src="/image-qr-code.png" objectFit="cover" className='rounded-md' layout="fill" />
      </div>
    </div>
  )
}

export default QrCode
