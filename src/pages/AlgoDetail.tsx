import React, {useState, Dispatch} from 'react';
import AceEditor from 'react-ace';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import IconUpload from '../assets/images/upload.svg';
import IconDiscard from '../assets/images/discard.svg';
import {Typo} from '../components';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-textmate';
import {useDispatch} from 'react-redux';
import {IUpdateNotificationAction, updateNotificationAction} from '../actions';
import {NOTIFICATION_TYPE} from '../types';

const useStyles = makeStyles(theme => ({
  list: {
    marginTop: '24px',
    marginBottom: '25px',
  },
  button: {
    boder: '1px solid red',
    borderRadius: '18px',
    boxSizing: 'border-box',
    width: '150px',
    height: '50px',
    marginLeft: '20px',
  },
  item: {
    borderRadius: '10px',
    width: '100%',
  },
  aceEditor: {
    borderRadius: '5px',
    marginLeft: '140px',
    marginBottom: '15px',
    marginTop: '15px',
    marginRight: '15px',
  },
  container: {
    paddingLeft: '50px',
    paddingRight: '50px',
  },
}));

export const AlgoDetail = (props: {toggleTheme: () => void}) => {
  function onChange(value: any) {
    console.log('change', value);
  }
  const classes = useStyles();

  const themes = {
    light: {
      foreground: 'textmate',
      background: '#F3F7FA',
      backgroundAceEditor: '#EAEFF2',
    },
    dark: {
      foreground: 'terminal',
      background: '#222222',
      backgroundAceEditor: '#141414',
    },
  };

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme.foreground === 'textmate') {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const dispatch = useDispatch<Dispatch<IUpdateNotificationAction>>();

  const openNoti = () =>
    dispatch(
      updateNotificationAction({
        show: true,
        message: 'hello world',
        type: NOTIFICATION_TYPE.success,
      }),
    );

  return (
    <Grid container={true} className={classes.container}>
      <Grid container={true} justify="flex-end" className={classes.list}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={toggleTheme}
        >
          <img src={IconUpload} alt="" />
          <Typo variant="h4">Theme</Typo>
        </Button>
        <Button className={classes.button} variant="outlined">
          <img src={IconUpload} alt="" />
          <Typo variant="h4">Update script</Typo>
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={openNoti}
        >
          <img src={IconDiscard} alt="" />
          <Typo variant="h5">Discard</Typo>
        </Button>
      </Grid>
      <Grid
        container={true}
        className={classes.item}
        style={{backgroundColor: theme.background}}
      >
        <Typo variant="h6">In[ ]:</Typo>
        <AceEditor
          className={classes.aceEditor}
          placeholder="Placeholder Text"
          mode="python"
          theme={theme.foreground}
          name="123"
          width="100%"
          height="630px"
          fontSize={12}
          showGutter={false}
          showPrintMargin={false}
          onChange={onChange}
          style={{backgroundColor: theme.backgroundAceEditor}}
        />
      </Grid>
    </Grid>
  );
};
