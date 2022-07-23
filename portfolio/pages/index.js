import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { TestFunctionReact3D } from './react-fiber'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TestFunctionReact3D />
      </main>
    </div>
  )
}
