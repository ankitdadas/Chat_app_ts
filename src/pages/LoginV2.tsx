import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.scss';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoIcon from '../../src/assets/sakari-logo.png';
import LoginImage from '../../src/assets/LoginImagev2.svg';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from 'auth0-js';
const useStyles = makeStyles({
  loginPageHolderMain: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 17px #00000026 ",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    "@media screen and (max-width: 960px)": {
      borderRadius: "5px",
      maxWidth: "600px",
    },
    "@media screen and (max-width: 767px)": {
      borderRadius: "5px",
      maxWidth: "95%",
    },

  },

  loginLogo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: "20px",
    left: "0px",
    background: "#EAF0FF",
    padding: "10px 50px 10px 15px",
    borderRadius: "0px 50px 50px 0px",

    "& p": {
      fontSize: "30px",
      fontWeight: 600,
      color: "#2D7DEC",
    },
  },

  loginPageHolder: {
    display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#EAF0FF",
  },

  loginBoxContainerGrid: {
    // minHeight:"600px",

  },

  loginBoxLeft: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "0px 25px",
    height: "100%",
    "& img": {
      maxWidth: "70%",
      margin: "10px auto",

      "@media screen and (max-width: 960px)": {
        maxWidth: "50%",
      }

    },

  },

  loginBox: {
    maxWidth: "475px",
    padding: "25px",
    margin: "50px auto",
    justifyContent: "flex-start",

    "@media screen and (max-width: 960px)": {
      margin: "50px auto 20px",
    },


    "& h2": {
      fontSize: "50px",
      textAlign: "left",
      fontWeight: "400",
      marginBottom: 10,
      color: "#2D7DEC",
      marginTop: 40,
      "@media screen and (max-width: 960px)": {

        marginTop: 20,
      },
      "@media screen and (max-width: 767px)": {
        fontSize: "20px",
        marginTop: 40,
      },
    },


    "& h5": {
      fontSize: "15px",
      textAlign: "left",
      fontWeight: "400",
      paddingLeft: 10,
      marginBottom: 30,
      "@media screen and (max-width: 767px)": {
        fontSize: "12px",
        paddingLeft: 0,
      }
    },

    "& a": {
      textDecoration: "none",
      fontSize: "15px",
      color: "#2F7AE8",
      "@media screen and (max-width: 767px)": {
        fontSize: "12px",
      }


    },
  }

});

export default function LoginV2() {
  const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  var auth0Client = new auth0.WebAuth({
    domain: "dev-res9arij.us.auth0.com",
    clientID: "j4BvBd4YlEASv0yx96RLuDuglCUq2VK5",
    //audience: params.apiAudience,
    redirectUri: window.location.origin,
    scope: "read:current_user update:current_user_metadata",
    responseType: 'token id_token'
  });
  const classes = useStyles();
  const history = useHistory();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (password.length === 0) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (email.length === 0) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (email.length > 0) {

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setEmailError('Email is not valid');
        isValid = false;
      }
    }

    if (isValid) {
      const domain = 'dev-res9arij.us.auth0.com';
      /*  const accessToken = await getAccessTokenSilently({
         audience: `https://${domain}/api/v2/`,
         scope: "read:current_user",
       }); */


      auth0Client.client.login({
        realm: 'react-user-demo',
        username: email,
        password
      }, (err:any, authResult:any) => {
        if (err) {
         console.log("error", err)
          return
        }
        if (authResult) {
          history.push('/inbox');
        }
      })


    }

  };

  return (
    <>

      <Box className={clsx(classes.loginPageHolder, 'loginPageHolder')} >
        <Container className={clsx(classes.loginPageHolderMain, 'loginPageHolderMain')} component="main" maxWidth="lg">


          <Grid container className={clsx(classes.loginBoxContainerGrid, 'loginBoxContainerGrid')}>
            <Grid item lg={6} md={6} sm={12} xs={12} style={{ background: "#7793bb", }} alignItems="center">
              <Box className={clsx(classes.loginBoxLeft, 'loginBoxLeft')}  >
                <img alt="Logo" src={LoginImage} />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} alignItems="center" style={{ position: "relative" }}>
              <Box className={clsx(classes.loginBox, 'loginBox')}
                sx={{

                  display: 'flex',
                  flexDirection: 'column',

                }}
              >

                <Box className={clsx(classes.loginLogo, 'loginLogo')} >
                  <img alt="Logo" height="40" src={LogoIcon} />
                  <Typography variant="body2">
                    SAKARI
                  </Typography>
                </Box>


                <Typography component="h2" variant="h2">
                  Welcome Back !
                </Typography>
                <Typography component="h5" variant="h5">
                  We missed you. Don't have an account yet? <Link href="/"> SignUP</Link>
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl error={emailError.length > 0 ? true : false} fullWidth variant="outlined">
                        <InputLabel style={{ background: "#fff", paddingLeft: 5, paddingRight: 5 }} htmlFor="standard-adornment-EmailAddress">Email Address</InputLabel>
                        <OutlinedInput onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError('');
                          if (e.target.value.length === 0) {
                            setEmailError('Email is required');

                          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
                            setEmailError('Email is not valid');

                          }
                        }} id="standard-adornment-EmailAddress" />
                        <FormHelperText id="component-error-text">{emailError}</FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl error={passwordError.length > 0 ? true : false} fullWidth variant="outlined">
                        <InputLabel

                          style={{ background: "#fff", paddingLeft: 5, paddingRight: 5 }}
                          htmlFor="standard-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="standard-adornment-password"
                          type={passwordVisibility === true ? "text" : "password"}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError('');
                            if (e.target.value.length === 0) {
                              setPasswordError('Password is required');

                            }
                          }}

                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                aria-label="toggle password visibility"
                              >
                                {passwordVisibility === false ? <VisibilityOffIcon /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        <FormHelperText id="component-error-text">{passwordError}</FormHelperText>
                      </FormControl>


                    </Grid>

                    <Grid item xs={12}>
                      <Link href="#" variant="body2">
                        I forgot my password?
                      </Link>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        style={{ minWidth: 150 }}

                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>


        </Container>



      </Box>
    </>
  );
}