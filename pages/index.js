import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { MdWavingHand } from 'react-icons/md';

export default function Home() {
  return (
    <div className="content">
      <h2><MdWavingHand></MdWavingHand>Hi! This is our home page!</h2>
      <p>Come see our users list <Link href="/users"><a>Here!</a></Link></p>
    </div>
  )
}
