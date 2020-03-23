import React, { useState, Dispatch } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Typo } from "../components";
import logo from "../assets/images/white_logo.svg";
//import { CallApi } from "../helpers/auth";
import { useDispatch } from "react-redux";
import { ILoginAction, loginAction } from "../actions";

export const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetEmail = (event: any) => setEmail(event.currentTarget.value);
  const handeSetPassword = (event: any) =>
    setPassword(event.currentTarget.value);

  const dispatch = useDispatch<Dispatch<ILoginAction>>();
  //const handleSubmit = async () => await CallApi(data);

  const handleSubmit = () => {
    dispatch(loginAction({ email, password }));
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const Actions = () => (
    <Grid container={true} direction="column" alignItems="center">
      <Button
        variant="outlined"
        onClick={handleSubmit}
        style={{
          width: "340px",
          height: "50px",
          fontFamily: "Nunito",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "bold",
          color: "#F97830",
          background: "#FFFFFF",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
          borderRadius: "7px",
          textTransform: "capitalize",
          marginBottom: "10px"
        }}
      >
        Login
      </Button>
      <Typo variant="h1" linkTo={"/records"}>
        I forgot my password
      </Typo>
    </Grid>
  );

  return (
    <Grid
      container={true}
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(172.35deg, #FAB463 -0.21%, #F97830 100.46%)",
        position: "relative"
      }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <img
        src={logo}
        height={26}
        width={150}
        style={{
          position: "absolute",
          top: "7vh"
        }}
        alt="logo"
      />
      <Grid
        container={true}
        style={{
          width: 380,
          height: 504,
          border: "1px solid #FFB359",
          borderRadius: 10,
          padding: "37px 20px 30px 20px"
        }}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Typo variant="h1">Login</Typo>
        <div>
          <TextField
            id="text"
            label="Email"
            variant="filled"
            onChange={handleSetEmail}
            onKeyPress={onKeyDown}
            style={{
              width: "340px",
              height: "50px",
              backgroundColor: "E9852F",
              border: "0.5px solid #FFB359",
              boxSizing: "border-box",
              borderRadius: "7px",
              marginBottom: "20px"
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                width: "100%",
                boxSizing: "border-box"
              }
            }}
            value={email}
            type="email"
          />
          <TextField
            style={{ width: "100%" }}
            type="password"
            id="filled-password-input"
            variant="filled"
            onChange={handeSetPassword}
            onKeyPress={onKeyDown}
            InputProps={{
              style: {
                height: "50px",
                backgroundColor: "E9852F",
                border: "0.5px solid #FFB359",
                boxSizing: "border-box",
                borderRadius: "7px",
                color: "#fff",
                width: "100%",
                textAlign: "center"
              }
            }}
            value={password}
          />
        </div>
        <Actions />
      </Grid>
    </Grid>
  );
};
