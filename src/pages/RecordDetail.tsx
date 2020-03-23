import React, {useState} from 'react';
import {Grid, makeStyles, Button} from '@material-ui/core';
import {Typo} from '../components';
import dotsImage from '../assets/images/dots.svg';
import horizontalDotsImage from '../assets/images/horizontal_dots.svg';
import downloadIcon from '../assets/images/download.svg';
import checkedBoxImage from '../assets/images/checked_box.svg';
import datePickerIcon from '../assets/images/date_picker.svg';
import {Line} from 'react-chartjs-2';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const style = makeStyles({
  view: {
    border: '1px solid #E3EBF1',
    borderRadius: 10,
    height: '100%',
  },
  value: {
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 18,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    color: '#000000',
    paddingTop: 63,
    paddingRight: 20,
    lineHeight: '15px',
    textTransform: 'capitalize',
  },
  selectedTimeFilterLabel: {
    background: '#F1F2F2',
    border: '0.5px solid #B0BBC8',
    boxSizing: 'border-box',
    borderRadius: '3px',
    width: '70px',
    textAlign: 'center',
    color: '#222222',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    textTransform: 'capitalize',
    paddingTop: '2px',
    paddingBottom: '2px',
  },
  timeFilterLabel: {
    color: '#E5E5E5',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    textTransform: 'capitalize',
    cursor: 'pointer',
  },
});

const data = {
  labels: [
    '7:00',
    '7:30',
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
  ],
  datasets: [
    {
      label: 'Value #1',
      fill: true,
      lineTension: 0.3,
      borderColor: '#E99145',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#E99145',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#E99145',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      backgroundImage: 'red',
    },
    {
      label: 'Value #2',
      fill: true,
      lineTension: 0.3,
      backgroundImage: 'linear-gradient(top to bottom, red, blue)',
      borderColor: '#DA3400',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#DA3400',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#DA3400',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};

export const RecordDetail: React.FC = () => {
  const classes = style();

  const Heading = () => (
    <Grid
      container={true}
      justify="space-between"
      alignItems="center"
      style={{height: 99}}
    >
      <Grid item={true} style={{height: '100%'}}>
        <Grid
          container={true}
          direction="column"
          justify="space-evenly"
          style={{height: '100%'}}
        >
          <Typo variant="h3">Juanita Flores</Typo>
          <Grid container={true} alignItems="center">
            <Typo variant="body1">Age:</Typo>
            <Typo variant="body1" className={classes.value}>
              57
            </Typo>
            <img src={dotsImage} height={10} alt="" style={{marginRight: 20}} />
            <Typo variant="body1">Gender: </Typo>
            <Typo variant="body1" className={classes.value}>
              Female
            </Typo>
            <img src={dotsImage} height={10} alt="" style={{marginRight: 20}} />
            <Typo variant="body1">Last Synced: </Typo>
            <Typo variant="body1" className={classes.value}>
              Oct 14, 2015 21:54:56
            </Typo>
          </Grid>
        </Grid>
      </Grid>
      <Button variant="outlined">
        <img
          src={downloadIcon}
          height={15}
          width={15}
          style={{marginRight: 16}}
          alt=""
        />
        <Typo variant="button">Download</Typo>
      </Button>
    </Grid>
  );

  const Chart = () => {
    const [ref, setRef] = useState();
    return (
      <Line
        // tslint:disable-next-line
        ref={(chartRef: any) => setRef(chartRef)}
        height={100}
        width={200}
        data={data}
        options={{title: {position: 'left', fontColor: 'red'}}}
      />
    );
  };

  const CustomCheckbox = (props: {checked?: boolean}) => (
    <div
      style={{
        border: !props.checked ? '0.5px solid #D1D2D3' : undefined,
        borderRadius: 2,
        width: 16,
        height: 16,
        backgroundImage: props.checked ? `url(${checkedBoxImage})` : undefined,
        backgroundSize: '16px 16px',
      }}
    />
  );

  const CheckboxRow = (props: {label: string; checked?: boolean}) => (
    <Grid
      container={true}
      justify="space-between"
      style={{marginTop: 12, marginBottom: 12, cursor: 'pointer'}}
    >
      <Typo variant="body2">{props.label}</Typo>
      <CustomCheckbox checked={props.checked} />
    </Grid>
  );

  const [startDate, setStartDate] = React.useState(
    new Date('2020-03-18T21:11:54'),
  );
  const [endDate, setEndDate] = React.useState(new Date('2020-03-18T21:11:54'));

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  enum TIME_FILTER {
    day = 'day',
    week = 'week',
    month = 'month',
    year = 'year',
  }

  const [timeFilter, setTimeFilter] = useState(TIME_FILTER.day);
  const handleClick = (time: TIME_FILTER) => () => setTimeFilter(time);

  return (
    <Grid container={true} style={{padding: 50, paddingTop: 0}}>
      <Heading />
      <Grid
        container={true}
        style={{
          height: 'calc(100vh - 252px)',
        }}
        spacing={3}
      >
        <Grid item={true} xs={9}>
          <Grid container={true} className={classes.view}>
            <Grid container={true}>
              <Grid
                item={true}
                justify="flex-start"
                xs={6}
                style={{paddingLeft: '35px', paddingTop: 55}}
                direction="row"
              >
                <Grid direction="row" container={true}>
                  <Grid item={true} xs={2}>
                    <Typo
                      onClick={handleClick(TIME_FILTER.day)}
                      className={
                        timeFilter === TIME_FILTER.day
                          ? classes.selectedTimeFilterLabel
                          : classes.timeFilterLabel
                      }
                    >
                      Last Day
                    </Typo>
                  </Grid>
                  <Grid item={true} xs={2}>
                    <Typo
                      onClick={handleClick(TIME_FILTER.week)}
                      className={
                        timeFilter === TIME_FILTER.week
                          ? classes.selectedTimeFilterLabel
                          : classes.timeFilterLabel
                      }
                    >
                      Last Week
                    </Typo>
                  </Grid>
                  <Grid item={true} xs={2}>
                    <Typo
                      onClick={handleClick(TIME_FILTER.month)}
                      className={
                        timeFilter === TIME_FILTER.month
                          ? classes.selectedTimeFilterLabel
                          : classes.timeFilterLabel
                      }
                    >
                      This Month
                    </Typo>
                  </Grid>
                  <Grid item={true} xs={2}>
                    <Typo
                      onClick={handleClick(TIME_FILTER.year)}
                      className={
                        timeFilter === TIME_FILTER.year
                          ? classes.selectedTimeFilterLabel
                          : classes.timeFilterLabel
                      }
                    >
                      This Year
                    </Typo>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item={true} justify="flex-end" xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container={true} justify="flex-end" direction="row">
                    <Grid
                      item={true}
                      justify="flex-end"
                      xs={4}
                      style={{paddingTop: 20, marginRight: 20}}
                    >
                      <KeyboardDatePicker
                        disableToolbar={true}
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label={<Typo variant="h2">Time filter</Typo>}
                        value={startDate}
                        onChange={handleStartDateChange}
                        keyboardIcon={<img src={datePickerIcon} alt="" />}
                      />
                    </Grid>
                    <Typo className={classes.label}>to</Typo>
                    <Grid
                      item={true}
                      justify="flex-end"
                      xs={4}
                      style={{paddingTop: 36, marginRight: 27}}
                    >
                      <KeyboardDatePicker
                        disableToolbar={true}
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={endDate}
                        onChange={handleEndDateChange}
                        keyboardIcon={<img src={datePickerIcon} alt="" />}
                      />
                    </Grid>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Chart />
          </Grid>
        </Grid>

        <Grid item={true} xs={3}>
          <Grid
            container={true}
            className={classes.view}
            style={{padding: 30}}
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Grid container={true} justify="space-between">
              <Typo variant="caption" style={{color: '#222222'}}>
                Name
              </Typo>
              <Typo variant="caption" style={{color: '#222222'}}>
                Display
              </Typo>
            </Grid>

            <img
              src={horizontalDotsImage}
              style={{marginTop: 16, marginBottom: 14, width: 240}}
              alt=""
            />
            <Grid container={true}>
              <CheckboxRow label="ECG" />
              <CheckboxRow label="PPG" checked={true} />
              <CheckboxRow label="BP" checked={true} />
              <CheckboxRow label="Body Temperature" checked={true} />
              <CheckboxRow label="Algo" checked={true} />
              <CheckboxRow label="Ambient Lux" checked={true} />
              <CheckboxRow label="Ambient temperature" checked={true} />
              <CheckboxRow label="Ambient pressure" checked={true} />
              <CheckboxRow label="Ambient humidity" checked={true} />
              <CheckboxRow label="Accelerometer - X" checked={true} />
              <CheckboxRow label="Accelerometer - Y" checked={true} />
            </Grid>

            <Button variant="outlined" style={{width: 240, marginTop: 20}}>
              <Typo variant="button">Save Re-compute Algo/</Typo>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
