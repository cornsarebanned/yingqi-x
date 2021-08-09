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

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h3 className="home-title-name">__________________</h3>
      </motion.div> */}

      <div className="home-title-job-container">
        <h1 className="home-title-job">UX | <span className="title-background">UI</span></h1>  
      </div>

      {/* <div className="projects-wrapper">

        <div className="card">
          <div className="card-content"> */}
            {/* <grid-item><img className="grid-image" src="/logo_light.png" width="100%" height="auto" alt="ezbuy" /></grid-item> */}
            {/* <h2 className="card-title">
              EZBUY|<span className="title-nobold">UX Case Study</span>
            </h2>
            <p className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link href="#">
              <a className="card-btn">Learn More</a>
            </Link>
          </div>
        </div>
        
      </div> */}
    </>
  );
}
