import Footer from "../../components/LoginFooter";
import Form from "../../components/RegisterForm";
import Head from 'next/head'
import Logo from "../../components/LoginLogo";
import React from "react";
import { useTheme } from "@platzily-ui/styling";

const Register = () => {
  const theme = useTheme();
  return (
        <>
            <Head>
                <title>Platzily - Register</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,700&display=swap" rel="stylesheet" />
            </Head>
            <main className="main">
                <div className="main-container">
                    <div className="header">
                        <Logo />
                         <section className="main-title">
                            <h1>Please enter your email and password to login</h1>
                        </section>
                        </div>
                        <section className="registerContainer"> 
                    <Form />
                    </section>
                </div>
            </main>
            <Footer className="footer" />
            <style jsx>{`
                .main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100vh;
                    padding: 35px 20px;
                    background-image: url('./registerBackgroundImage.png');
                    color:${theme.palette.text.light};
                    box-sizing: border-box;
                    font-size: 12px;
                    text-align: center;                    
                    font-family: 'Inter', sans-serif;
                }
                 .main-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 100%;
                    height: 540px;
                    padding: 20px 30px 0 30px;
                    border-radius: 5px;
                    color:${theme.palette.text.light};
                    background-color: white;
                    box-sizing: border-box;
                    font-size: 12px;
                    text-align: center;
                }
                .main-title {
                    width: 100%;
                    border-top: 1px solid #DDDDDD;
                }

                .main-title > h1 {
                    font-weight: 300;
                    font-size: 12px; 
                    line-height: 12px;
                    color: #7E95A5;
                    }
                @media (min-height: 500px) and (min-width: 800px) {
                    .main {
                        height: 93vh;
                    }
                }
                @media (min-height: 650px) and (min-width: 800px) {
                    .footer {
                        height: 95vh;
                    }
                }

                @media (min-width: 400px) {                
                    .main-container {
                        padding: 0px 15% 0 15;
                    }
                }
                
                @media (min-width: 450px) { 
                    
                    .main {
                        padding: 8%;
                    }
                    .main-container {
                        padding: 0px 20% 0 20%;
                        
                    }
                }

                @media (min-width: 500px) {                
                    .main-container {
                        padding: 0px 23% 0 23%;
                    }
                }

                @media (min-width: 550px) {  
                    .main {
                        padding: 8% 13%;
                    }              
                    .main-container {
                        padding: 0px 18% 0 18%;
                    }
                }

                @media (min-width: 600px) { 
                    .main {
                        padding: 5% 13%;
                    }                  
                    .main-container {
                        padding: 0px 22% 0 22%;
                    }
                }

                @media (min-width: 700px) {                
                    .main-container {
                        padding: 0px 15% 0 15%;
                    }
                }

                @media (min-width: 800px) {    
                    .main {
                        padding: 0px;
                    }                 
                    .main-container {
                        width: 806px;
                        height: 500px;
                        padding: 0px;
                    }
                    .main-title {
                        width: fit-content;

                    }
                }
            `}</style>
            <style global jsx>{`
                body {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    box-sizing: content-box;
                }
            `}</style>
        </>
  )
}


export default Register