import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";



export default function Home() {
  return (
    <>
      <Head>
        <title>YINGQI | HOME</title>
        <meta name="keywords" content="Portfolio" />
      </Head>

      <div className="home-title-job-container">
        <h1 className="home-title-job">UX | <span className="title-background">UI</span></h1>  
      </div>
    </>
  );
}
