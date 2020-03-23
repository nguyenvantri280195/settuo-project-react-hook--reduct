import React from "react";
import { Grid, Tabs, Tab, TabProps, makeStyles } from "@material-ui/core";
import { Typo } from "../components";
import { AppBar } from "../components/AppBar";
import { RecordList } from "./RecordList";
import { useHistory, Route, Switch } from "react-router-dom";
import { PATH } from "../constants";
import { RecordDetail } from "./RecordDetail";
import { AlgoDetail } from "./AlgoDetail";

const style = makeStyles({});

export const MainPage: React.FC = () => {
  const history = useHistory();
  const classes = style();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };

  const CustomTab = (props: TabProps & { path: string }) => {
    return (
      <Tab
        {...props}
        label={
          <Typo
            variant="caption"
            style={props.selected ? { color: "#F97830" } : undefined}
          >
            {props.label}
          </Typo>
        }
        // tslint:disable-next-line
        onClick={() => history.push(props.path)}
      />
    );
  };

  return (
    <Grid container={true} style={{ width: "100%", height: "100%" }}>
      <AppBar />
      <Grid
        container={true}
        direction="column"
        style={{ width: "100%", height: "100%" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          style={{
            height: 50,
            borderBottom: "1px solid #A5B2C0",
            paddingLeft: 50,
            paddingRight: 50
          }}
          TabIndicatorProps={{ style: { backgroundColor: "#F97830" } }}
        >
          <CustomTab label="All Records" path={PATH.recordList} />
          {/* <CustomTab label="Settings" path={PATH.settings} />
          <CustomTab label="Update Algo Script" path={PATH.algo} /> */}
        </Tabs>
        <Switch>
          <Route path={PATH.recordList} component={RecordList} />
          {/* <Route path={PATH.record} component={RecordDetail} />
          <Route path={PATH.algo} component={AlgoDetail} /> */}
        </Switch>
      </Grid>
    </Grid>
  );
};
