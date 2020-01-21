import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Router from "next/router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Layout({
  children,
  backButton
}: {
  children: any;
  backButton: any;
}) {
  const classes = useStyles();
  return (
    <div className="container">
      <AppBar>
        <Toolbar>
          {backButton && (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => Router.back()}
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
          )}

          <Typography variant="h6" className={classes.title}>
            Hacker Next
          </Typography>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: floralwhite;
            top: 60px;
            position: absolute;
          }
        `}
      </style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }
      `}</style>
    </div>
  );
}
