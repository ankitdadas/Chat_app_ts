import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import '../App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoIcon from '../../src/assets/sakari-logo.png';
import LoginImage from '../../src/assets/LoginImagev2.svg';
import { AppBar, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Toolbar, FormHelperText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles({

  loginPageHolderMain: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 17px #00000026 ",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
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
    height: "100%"

  },

  loginBox: {

    maxWidth: "475px",
    padding: "25px",
    margin: "50px auto",

    justifyContent: "flex-start",
    "& h2": {
      fontSize: "50px",
      textAlign: "left",
      fontWeight: "400",
      marginBottom: 10,
      color: "#2D7DEC",
      marginTop: 40,
    },
    "& h5": {
      fontSize: "15px",
      textAlign: "left",
      fontWeight: "400",
      paddingLeft: 10,
      marginBottom: 30,
    },

    "& a": {
      textDecoration: "none",
      fontSize: "15px",
      color: "#2F7AE8",


    },
  }

});

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function LoginV2() {
  const classes = useStyles();
  const history = useHistory();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      history.push('/');
    }

  };

  return (
    <>

      <Box className={clsx(classes.loginPageHolder, 'loginPageHolder')} >
        <Container className={clsx(classes.loginPageHolderMain, 'loginPageHolderMain')} component="main" maxWidth="lg">


          <Grid container className={clsx(classes.loginBoxContainerGrid, 'loginBoxContainerGrid')}>
            <Grid item lg={6} md={6} sm={12} xs={12} style={{ background: "#7793bb", }} alignItems="center">
              <Box className={clsx(classes.loginBoxLeft, 'loginBoxLeft')}  >
                <img alt="Logo" src={LoginImage} style={{ maxWidth: "70%", margin: "10px auto" }} />
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
                        <OutlinedInput onChange={(e) => setEmail(e.target.value)} id="standard-adornment-EmailAddress" />
                        <FormHelperText id="component-error-text">{emailError}</FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl error={passwordError.length > 0 ? true : false} fullWidth variant="outlined">
                        <InputLabel style={{ background: "#fff", paddingLeft: 5, paddingRight: 5 }} htmlFor="standard-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="standard-adornment-password"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                              >
                                <Visibility />
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