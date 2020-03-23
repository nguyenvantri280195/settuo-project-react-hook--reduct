import React from 'react';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {Typo} from '../components';
import {PATH} from '../constants';
import {useHistory} from 'react-router-dom';

const style = makeStyles({
  head: {
    borderBottom: '1px dotted #A5B2C0',
  },
});

export const RecordList: React.FC = () => {
  const classes = style();
  const history = useHistory();
  return (
    <Grid container={true}>
      <Table style={{height: '100%'}}>
        <TableHead>
          <TableRow classes={{head: classes.head}} hover={true}>
            <TableCell style={{paddingLeft: 50}}>
              <Typo variant="caption" style={{color: '#222222'}}>
                Name
              </Typo>
            </TableCell>
            <TableCell>
              <Typo variant="caption" style={{color: '#222222'}}>
                Age
              </Typo>
            </TableCell>
            <TableCell>
              <Typo variant="caption" style={{color: '#222222'}}>
                Gender
              </Typo>
            </TableCell>
            <TableCell>
              <Typo variant="caption" style={{color: '#222222'}}>
                Last Synced
              </Typo>
            </TableCell>
            <TableCell style={{paddingRight: 50}} align="right">
              <Typo variant="caption" style={{color: '#222222'}}>
                Actions
              </Typo>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3].map((el, index) => (
            <TableRow
              key={index}
              classes={{head: classes.head}}
              style={el % 2 !== 0 ? {backgroundColor: '#F9F9F9'} : undefined}
              hover={true}
              // tslint:disable-next-line
              onClick={() => history.push(PATH.record)}
            >
              <TableCell style={{paddingLeft: 50}}>
                <Typo variant="body1" style={{fontWeight: 'bold'}}>
                  Name
                </Typo>
              </TableCell>
              <TableCell>
                <Typo variant="body1">Age</Typo>
              </TableCell>
              <TableCell>
                <Typo variant="body1">Gender</Typo>
              </TableCell>
              <TableCell>
                <Typo variant="body1">Last Synced</Typo>
              </TableCell>
              <TableCell style={{paddingRight: 50}} align="right">
                <Typo variant="body1">Actions</Typo>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};
