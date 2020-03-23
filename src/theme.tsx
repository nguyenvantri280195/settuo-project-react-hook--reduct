import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default fonts.
    fontFamily: ['Nunito'].join(','),
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        height: 50,
      },
      label: {
        textTransform: 'capitalize',
      },
      outlined: {
        border: '1px solid #E3EBF1',
        width: 150,
        borderRadius: 18,
      },
    },

    MuiOutlinedInput: {
      root: {
        backgroundColor: '#E9852F',
        transform: 'translate (10px 6px ) scale (0.70)',
      },
      input: {
        color: '#fff',
      },
    },
    MuiInputLabel: {
      filled: {
        transform: 'translate(0px, 16px) scale(1)',
      },
      shrink: {
        transform: 'translate(-32%, 2px) scale(0.75) !important',
      },
    },
    MuiFilledInput: {
      input: {
        paddingTop: 22,
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      root: {
        borderRadius: 7,
        borderTopLeftRadius: 7,
        '&:hover': {
          borderRadius: 7,
        },
      },
      underline: {
        '&:before': {
          content: '',
        },
        '&:after': {
          borderBottom: 'none',
        },
      },
    },
    MuiInput: {
      root: {
        background: '#FFFFFF',
        border: '1px solid #E3EBF1',
        boxSizing: 'border-box',
        borderRadius: '5px',
      },
      underline: {
        '&:before': {
          borderBottom: 'none !important',
        },
        '&:after': {
          borderBottom: 'none !important',
        },
      },
    },
    MuiInputBase: {
      input: {
        paddingTop: '13px',
        paddingLeft: '13px',
        paddingRight: '13px',
        paddingBottom: '13px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        color: '#000000',
      },
    },
  },
});
