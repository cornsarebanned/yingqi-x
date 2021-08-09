import emailjs from "emailjs-com";
import React from "react";
import { Card, CardContent, Grid, TextField, Button, Typography } from "@material-ui/core";
import Head from 'next/head';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const theme = createTheme({
    typography: {
        "fontFamily": 'Noto Serif JP',
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
  });

const themeTitle = createTheme({
    typography: {
        "fontFamily": 'Open Sans',
        'fontSize': 15.5,
    },
  });

const themeColor = createTheme({
    palette: {
      primary: {
        main: "#343346",
      },
    },
  });

const Contact = () => {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("service_cornsarebanned", "cornsarebanned_portfolio", e.target, "user_2eeifpriibkvzI7PY4415")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });
          e.target.reset();
    }

    return ( 
    <>
        <Head>
          <meta charset="utf-8" />
          <title>YINGQI | CONTACT</title>
          <meta name="keywords" content="Yingqi's awesome portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
         <div>
            <div className="form-container">
                <div className="form-margin">
                    <Card style={{maxWidth:800, margin:"0 auto", padding:"20px 5px"}}>
                        <CardContent>
                        <ThemeProvider theme={themeTitle}><Typography style={{ fontWeight: 600 }} gutterBottom variant="h5">CONTACT ME</Typography></ThemeProvider>
                        <Typography gutterBottom color="textSecondary" variant="body2" component="p">Ask me anything or feel free to share your ideas and thoughts with myself and I will get back to you <span id="ask-me-anything">as soon as available</span>.
                        </Typography>
                        <Box pb={2} />
                        <form className="contact-form" onSubmit={sendEmail}>
                        <ThemeProvider theme={theme}><Grid container spacing={2}>
                                <Grid xs={12} sm={6} item>
                                    <TextField type="text" label="Name" placeholder="Name" name="name" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <TextField type="email" label="Email Address" placeholder="Email Address" name="email" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="text" label="Subject" placeholder="Subject" name="subject" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField label="Message" multiline rows={6} placeholder="Message" name="message" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                <ThemeProvider theme={themeColor}><Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button></ThemeProvider>
                                </Grid>
                            </Grid></ThemeProvider>
                        </form>
                        </CardContent>
                    </Card>
                </div>
                
            </div>
        </div>
    </>
        
    );
}
 
export default Contact;

