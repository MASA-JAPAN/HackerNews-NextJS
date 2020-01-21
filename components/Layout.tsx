import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Router from "next/router";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    top: "5px"
  },
  title: {
    flexGrow: 1,
    padding: "14px"
  },
  paper: {
    background: "#1976d2",
    color: "#fff",
    display: "flex"
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
    <div>
      <div className="appBar">
        <Paper className={classes.paper}>
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
            Hacker News
          </Typography>
        </Paper>
      </div>

      <div className="container">
        <div>{children}</div>
      </div>
      <style jsx>
        {`
          .appBar {
            max-width: 800px;
            position: fixed;
            margin: 0 auto;
            top: 0;
            left: 0;
            right: 0;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            background: floralwhite;
            top: 60px;
            position: absolute;
            left: 0;
            right: 0;
            z-index: -1;
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
