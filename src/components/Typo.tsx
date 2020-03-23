import React from 'react';
import {Typography, TypographyProps, makeStyles, Link} from '@material-ui/core';

const typoStyle = makeStyles({
  h1: {
    color: 'white',
    fontWeight: 800,
    fontSize: 24,
    lineHeight: '15px',
    textAlign: 'center',
  },
  h2: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center',
    color: '#000000',
  },
  h3: {
    color: '#222222',
    fontSize: 20,
    lineHeight: '15px',
    fontWeight: 'bold',
  },
  h4: {
    color: '#39BD8D',
    marginLeft: '8px',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  h5: {
    color: '#F02D00',
    marginLeft: '8px',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  h6: {
    color: '#376CF5',
    position: 'absolute',
    width: '31px',
    height: '15px',
    top: '269px',
    left: '145px',
    fontWeight: 600,
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 15,
  },
  subtitle1: {
    fontWeight: 800,
    fontSize: 12,
    lineHeight: '15px',
    color: '#222222',
  },
  subtitle2: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '15px',
    color: '#222222',
    textTransform: 'none',
  },
  caption: {
    fontWeight: 800,
    fontSize: 14,
    lineHeight: '15px',
    color: '#A5B2C0',
    textTransform: 'capitalize',
  },
  body1: {
    fontSize: 14,
    lintHeight: '15px',
    color: '#222222',
  },
  body2: {
    fontSize: 12,
    lintHeight: '15px',
    color: '#000000',
    fontWeight: 'bold',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '15px',
    color: '#A5B2C0',
    textTransform: 'none',
  },
});

const linkStyle = makeStyles({
  underlineNone: {
    color: '#FFF6A0',
    fontWeight: 600,
    lineHeight: '19px',
  },
});

interface IProps {
  linkTo?: string;
}

export const Typo: React.FC<TypographyProps & IProps> = (
  props: TypographyProps & IProps,
) => {
  const typoClasses = typoStyle();
  const linkClasses = linkStyle();

  const renderTypo = () => (
    <Typography {...props} classes={{...typoClasses}}>
      {props.children}
    </Typography>
  );

  const renderLink = () => (
    <Link href={props.linkTo} classes={{...linkClasses}} underline="none">
      {props.children}
    </Link>
  );

  if (props.linkTo) {
    return renderLink();
  }

  return renderTypo();
};
