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
import LoginImage from '../../src/assets/LoginImage.svg';
import { AppBar, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { VisibilityOff, Visibility } from '@mui/icons-material';


const useStyles = makeStyles({
 
    loginLogo:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      "& p":{
        fontSize: "30px",
        fontWeight: 600,
      },   
    },

    loginPageHolder:{
        display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#EAF0FF"
    },

    loginBox:{
        background:"#fff",
        borderRadius:"5px",
        padding:"25px",
        boxShadow:"0px 0px 17px #00000026 ",
        justifyContent:"flex-start",
        "& h2":{
            fontSize:"50px",
            textAlign:"left",
            fontWeight:"400",
            marginBottom:10,
        },
        "& h5":{
            fontSize:"15px",
            textAlign:"left",
            fontWeight:"400",
            paddingLeft:10,
            marginBottom:30,
        },

        "& a":{
            textDecoration:"none",
            fontSize:"15px",
            color:"#2F7AE8",
           
            
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

 
export default function SignIn() {
  const classes = useStyles();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  return (
    <>
    <AppBar position="fixed" elevation={0} style={{background:"#fff", color:"#2F7AE8"}}>
            <Toolbar> <Box className={clsx(classes.loginLogo, 'loginLogo')} > 
            <img alt="Logo" height="40" src={LogoIcon} /> 
            <Typography variant="body2">
                SAKARI
          </Typography>
            </Box></Toolbar>
    </AppBar>
    <Box className={clsx(classes.loginPageHolder, 'loginPageHolder')} >
      <Container component="main" maxWidth="sm">
     


        <Box className={clsx(classes.loginBox, 'loginBox')} 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
             
          }}
        >

           
          <Typography component="h2" variant="h2">
            Welcome Back !
          </Typography>
          <Typography component="h5" variant="h5">
            We missed you. Don't have an account yet? <Link href="/"> SignUP</Link> 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
           
          <Grid container spacing={2}>
          <Grid item xs={12}>
        <FormControl fullWidth  variant="outlined">
          <InputLabel style={{background:"#fff", paddingLeft:5, paddingRight:5}} htmlFor="standard-adornment-EmailAddress">Email Address</InputLabel>
          <OutlinedInput id="standard-adornment-EmailAddress"  />
        </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth  variant="outlined">
          <InputLabel style={{background:"#fff", paddingLeft:5, paddingRight:5}} htmlFor="standard-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="standard-adornment-password"
            
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
                    style={{minWidth:150}}
                   
                    >
                    Login
                    </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>

      
      
      </Box>
    </>
  );
}