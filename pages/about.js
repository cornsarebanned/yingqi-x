import Head from 'next/head';
import Image from 'next/image'

const About = () => {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>YINGQI | ABOUT</title>
          <meta name="keywords" content="Yingqi's awesome portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
          <div className="about-container">
            <div className="about-background"></div>

            <div className="about-content-container">
              <div className="about-image">
                <Image
                  src="/food-min.jpg"
                  alt="picture"
                  width="455vh"
                  height="590rem"
                />
              </div>

              <div className="about-content">
                <h1 id="about-font-h1">ABOUT</h1>
                <span id="about-font-h4-v1">
                  I&apos;m an aspiring UX Designer based in Singapore.
                </span>
                <br />
                <span className="about-font-h4-v2">
                  I enjoy crafting solutions to create simplistic yet responsive
                  Web Applications for the everyday consumers while keeping
                  vital business goals in mind. When I&apos;m not working on my
                  craft, you will find me adulting, picking up basic Spanish
                  expressions, reading or engaging in a pickup basketball game.
                </span>
                <br />
                {/* <span className="about-font-h4-v2">
                  Graduated in 2015 with a Bachelor's degree in Accountancy, I went 
                  on to pursue a career in Treasury operations. I enjoyed the prospect of
                  working alongside different stakeholders and rectifying 
                  operational issues on a daily basis. Given the complications faced 
                  while navigating unfamiliar banking platforms during crunch time , 
                  I wonder if more could have been done to improve users' experiences. 
                </span> */}
                {/* <br /> */}
                <span className="about-font-h4-v2">
                  This website is built with tonnes of love and googling, please kindly continue 
                  to <em>watch this space for further updates</em>.
                </span>
                <br />
                <div className="about-peace-icon"></div>
              </div>
            </div>
          </div>
        
        </div>
      </>
    );
}
 
export default About;