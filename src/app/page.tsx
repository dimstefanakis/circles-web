import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <div className='w-full p-8'>
        <div className='flex items-center'>
          <div
            className='w-14 h-14 border-8 border-white rounded-full bg-transparent'
          >

          </div>
          <p
            className='ml-4 text-4xl tracking-tighter font-bold'
          >Circles</p>
          </div>
      </div>
      <div
        className='mt-10 flex flex-col items-center justify-center'
      >
        <Image
          src="/friends.png"
          width={400}
          height={400}
          objectFit='contain'
          style={{
            objectFit: 'contain'
          }}
          className='p-4'
          alt="Picture of the author"
        />

        <h1
          className='mt-10 tracking-tighter max-w-xs text-center text-4xl font-bold'
        >
          An app for your closest people
        </h1>
      </div>
    </main>
  )
}
