import React, { useState, useEffect } from "react";
import { Redirect, navigate } from "@reach/router";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "@reach/router";

import { connect } from "react-redux";

import { auth } from "../store/actions/index";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

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

const Login = (props) => {
  const classes = useStyles();

  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  // const [errors, updateError] = useState({});
  const [errors, updateErrors] = useState({
    errors: null,
    firstName: null,
    email: null,
  });
  const [isLoading, updateisLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");

    if (props.errors !== null) {
      console.log(errors);
      console.log(props.auth.errors);
      updateErrors({ ...errors, ...props.auth.errors });
      console.log(errors);
      updateisLoading(props.auth.loading);
    }
  }, [props.auth.errors, props.auth.loading]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAuth(email, password);
    console.log(email, password);
  };
  if (props.auth.isAuthenticated) {
    return (window.location.href = "/");
  } else {
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
              Sign in
            </Typography>

            <form className={classes.form} onSubmit={onSubmitHandler}>
              <p style={{ color: "red" }}>{errors.errors}</p>

              <TextField
                variant="outlined"
                margin="normal"
                error={errors.email}
                helperText={errors.email}
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
                disabled={isLoading ? "true" : ""}
              >
                {isLoading ? "signing..." : "Sign In"}
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
