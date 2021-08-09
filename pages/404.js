import React from 'react';
import lottie from 'lottie-web';
import errorAnimation from "../static/bus-breakdown.json";
import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

const NotFound = () => {

    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#error-animation"),
          animationData: errorAnimation,
          renderer: "svg",
          loop: true,
          autoplay: true, 
        });
      }, []);

    
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
           router.push('/'); 
        },  5000)
    }, [])

    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <title>404</title>
          <meta name="keywords" content="Yingqi's awesome portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="page-not-found">
          <div className="page-404-words">
            <p id="page-404-ohsnap">Aww Snap!</p>
            <p id="page-404-hitasnag">
              It seems like you have hit a snag, but not to worry,{" "}
              <strong>this page will be redirected in 5 seconds</strong> to
              Yingqi's{" "}
              <Link href="/">
                <a id="error-homepage">Homepage</a>
              </Link>
              .
            </p>
          </div>
          <div id="error-animation" />
        </div>
      </>
    );
}
 
export default NotFound;