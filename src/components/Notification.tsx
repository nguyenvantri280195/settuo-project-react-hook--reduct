import React, { Dispatch } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { IStoreState } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import {
  IUpdateNotificationAction,
  updateNotificationAction
} from "../actions";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export const Notification = () => {
  const classes = useStyles();
  const notication = useSelector((state: IStoreState) => state.notification);
  const dispatch = useDispatch<Dispatch<IUpdateNotificationAction>>();

  const handleClose = () =>
    dispatch(
      updateNotificationAction({
        ...notication,
        show: false
      })
    );

  setTimeout(() => {
    dispatch(
      updateNotificationAction({
        ...notication,
        show: false
      })
    );
  }, 100000);

  return (
    <Grid className={classes.root}>
      <Snackbar
        open={notication.show}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={notication.type}>
          {notication.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};
