import React, {Dispatch} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {IStoreState} from '../types';
import {useSelector, useDispatch} from 'react-redux';
import {Grid} from '@material-ui/core';
import {IUpdateNotificationAction, updateNotificationAction} from '../actions';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Notification = () => {
  const classes = useStyles();
  const notication = useSelector((state: IStoreState) => state.notification);
  const dispatch = useDispatch<Dispatch<IUpdateNotificationAction>>();

  const handleClose = () =>
    dispatch(
      updateNotificationAction({
        ...notication,
        show: false,
      }),
    );

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
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Grid>
  );
};
