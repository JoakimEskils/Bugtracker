import { Avatar, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { Call } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  paper: {
    marginLeft: '10px',
  },
  table: {
    marginLeft: '20px',
  },
  link: {
    marginLeft: '30px',
  },
  avatar: {
    marginLeft: '40px',
  }
});

export default function SimpleTable() {
    const classes = useStyles();
  
    const [data, upDateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;
  
    async function sampleFunc() {
      let response = await fetch("/api/employees");
      let body = await response.json();
      upDateData(body.content);
    }
    console.log("DATA: ", data);
    console.log("data.lengt: ", data.length);
    console.log("isloading: ", isLoading);
  
    if (firstLoad) {
      sampleFunc();
      setLoad(false);
    }
  
    if (data.length === 0) {isLoading = true} else {isLoading = false};

    return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Call />
        </Avatar>
        <Typography component="h1" variant="h5">
          Employee Directory
        </Typography>
  
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableContainer
            style={{ width: "80%", margin: "0 10px" }}
            component={Paper}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">firstName</TableCell>
                  <TableCell align="center">lastName</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Dob</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Link className={classes.link} to="/">
          <Typography align="left">
            &#x2190; Head back to save data
          </Typography>
        </Link>
      </div>
    );
  }