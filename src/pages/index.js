import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import NameInfo from '../components/NameInfo';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <h1>Name Info App</h1>
      <NameInfo />
    </>
  )
}
