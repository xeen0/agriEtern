import Head from 'next/head'
//styling 
import styles from '../styles/Home.module.css'

//components
import {Navbar ,Header1 ,Dummy, Header2} from '../components'

export default function Home() {
  return (
    <div >
      <Header1/>
      <Header2/>
      {/* <Navbar/> */}
    </div>
  )
}
