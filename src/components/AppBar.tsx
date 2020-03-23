import React from 'react';
import {
  AppBar as MuiAppBar,
  Grid,
  Avatar,
  Button,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  makeStyles,
  Paper,
} from '@material-ui/core';
import {Typo} from './Typo';
import Logo from '../assets/images/logo.svg';
import dropDownIcon from '../assets/images/drop_down.svg';
import avatarImage from '../assets/images/sample_avatar.png';
import {useHistory} from 'react-router-dom';
import {logoutAction} from '../helpers/auth';

const style = makeStyles({
  menuButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export const AppBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const classes = style();
  const history = useHistory();

  const handleToggle = () => {
    setOpen(isOpen => !isOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleLogout = () => logoutAction();

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MuiAppBar
      style={{
        height: 75,
        width: '100%',
        paddingBottom: 8,
        background: 'none',
        boxShadow: 'none',
        padding: '23px 50px 50px 50px',
      }}
      position="static"
    >
      <Grid container={true} justify="space-between">
        <Grid item={true}>
          <Grid container={true} direction="column">
            <img src={Logo} height={25} width={150} alt="logo" />
            <Typo variant="subtitle1" style={{marginTop: 4}}>
              Cloud Management System
            </Typo>
          </Grid>
        </Grid>
        <Grid item={true} style={{minWidth: 150}}>
          <Grid container={true}>
            <Avatar
              alt="User Name here"
              src={avatarImage}
              style={{width: 50, height: 50, marginRight: 12}}
            />
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              classes={{root: classes.menuButton}}
            >
              <Grid container={true} alignItems="center">
                <Typo variant="subtitle2" style={{marginRight: 4}}>
                  Lifetouch
                </Typo>
                <img src={dropDownIcon} width={8} height={4} alt="drop-down" />
              </Grid>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition={true}
              disablePortal={true}
            >
              {({TransitionProps, placement}) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>
      </Grid>
    </MuiAppBar>
  );
};
