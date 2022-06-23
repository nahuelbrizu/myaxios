import React, {useEffect, useState} from "react";
import {Services} from "../../services/Services";
import Spinner from "../component/Spinner/Spinner";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

let ViewId = () => {
    let [view, setView]= useState({
        loading: false,
        Users: [],
        errorMessage: ""
    })


    // eslint-disable-next-line react-hooks/exhaustive-deps,react-hooks/rules-of-hooks
    useEffect(async () => {
        try {
            setView({ ...view, loading: true});
            let response = await Services.getAllUsers();
            setView({
                ...view,
                loading: false,
                Users: response.data
            });
        }
        catch (error){
            setView({
                ...view,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [])

    let {loading, Users, errorMessage} = view;

    return(
      <React.Fragment>
          {
              loading ? <Spinner /> :
                  <React.Fragment>
                      <section className="user">
                          <div className="container">
                              <div className="row">
                                  <TableContainer component={Paper}>
                                      <Table sx={{minWidth: 700}} aria-label="customized table">
                                          <TableHead>
                                              <TableRow>
                                                  <StyledTableCell>ID</StyledTableCell>
                                                  <StyledTableCell align="right">User Name</StyledTableCell>
                                                  <StyledTableCell align="right">Email</StyledTableCell>
                                                  <StyledTableCell align="right">Last Name</StyledTableCell>
                                                  <StyledTableCell align="right">telephone number</StyledTableCell>
                                                  <StyledTableCell align="right">friendships length</StyledTableCell>
                                                  <StyledTableCell align="right">recipes length</StyledTableCell>
                                              </TableRow>
                                          </TableHead>
                                          <TableBody> { Users.map((user) => (
                                              <StyledTableRow key={user.id}>
                                                  <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.user_name}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.last_name}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.telephone_number}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.friendships.length}</StyledTableCell>
                                                  <StyledTableCell align="right">{user.recipes.length}</StyledTableCell>
                                              </StyledTableRow>))}
                                          </TableBody>
                                      </Table>
                                  </TableContainer>
                              </div>
                          </div>
                      </section>
                  </React.Fragment>
          }
      </React.Fragment>
  )
}
export default ViewId;