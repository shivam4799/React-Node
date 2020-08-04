import React from "react";
import { Redirect, navigate } from "@reach/router";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url()",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [email, updateEmail] = React.useState("");
  const [password, updatePassword] = React.useState("");
  const [firstName, updateFirstName] = React.useState("");
  const [lastName, updateLastName] = React.useState("");
  const classes = useStyles();
  const errors = {
    firstName: "invalid",
    // email: "email field required",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/user/register", {
        email: email,
        name: firstName + lastName,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        alert("success");
        navigate("/login");
      })
      .catch(function (error) {
        alert(error);
        console.log(error.response.data);
      });
  };

  console.log("submit");
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          {/* <form className={classes.form} noValidate> */}
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="outlined"
                /> */}
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  value={firstName}
                  onChange={(e) => updateFirstName(e.target.value)}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={lastName}
                  onChange={(e) => updateLastName(e.target.value)}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
            </Grid>
            <TextField
              error={errors.email}
              helperText={errors.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              error={errors.password}
              helperText={errors.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
