import { Inter } from 'next/font/google'
import Login from './login'
import Navbar from './components/Navbar'
import Homepg from './homepg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Login
    />
    </>
      )
}
