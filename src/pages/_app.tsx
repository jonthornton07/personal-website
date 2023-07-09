import type { AppProps } from 'next/app'
import '@/globals.css'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-white'>
      <Component {...pageProps} />
    </div>
  )
}