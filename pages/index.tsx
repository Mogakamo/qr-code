import Head from 'next/head'
import QrCode from "../components/QrCode"

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center py-2 bg-[#d6e2f0]">
      <Head>
        <title>QR - code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QrCode />
      
    </div>
  )
}
