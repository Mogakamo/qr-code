import Image from 'next/image'
import React from 'react'

function QrCode() {
  return (
    <div className="h-96 w-72 rounded-xl bg-white ">
      <div className="relative m-3 h-56 rounded-md">
        <Image
          src="/image-qr-code.png"
          objectFit="cover"
          className="rounded-md"
          layout="fill"
        />
      </div>
      <div className="m-5 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-md text-[#1f3251]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7b879d] mt-2	text-xs p-2">
          {' '}
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default QrCode
