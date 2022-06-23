import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from "@mui/material";
import React, {useState, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Modal, Button, TextField} from "@material-ui/core"
import { Edit, Delete} from "@material-ui/icons"
import {Services} from "../../services/Services";
import Spinner from "../component/Spinner/Spinner";
import {Link} from "react-router-dom";


const  useStyles = makeStyles((theme) => ({
    modal:{
        position: "absolute",
        width: "400",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: "35%",
        left: "50%",
        transform: "traslate(-50%, -50%)",
    },
    iconos:{
        cursor: "pointer"
    },
    inputMaterial:{
        widht: "100%"
    }
}));

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


const List = () => {
    let [state, setState]= useState({
        loading: false,
        Users: [],
        errorMessage: ""
    })


    useEffect( () => {
        const fetchData = async () => {
        try {
            setState({ ...state, loading: true});
            const response = await Services.getAllUsers();
            setState({
                ...state,
                loading: false,
                Users: response.data
            });
        }
        catch (error){
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
        };
    }, []);

    let {loading, Users, errorMessage} = state;

    return (
        <React.Fragment>
        {
            loading ? <Spinner /> :
                <React.Fragment>
                <section className="user-list">
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
                                          <StyledTableCell align="right">Acciones</StyledTableCell>
                                      </TableRow>
                                  </TableHead>
                                 <TableBody> { Users.length > 0  &&
                                    Users.map((user) => (
                                                        <StyledTableRow key={user.id}>
                                                            <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.user_name}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.last_name}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.telephone_number}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.friendships.length}</StyledTableCell>
                                                            <StyledTableCell align="right">{user.recipes.length}</StyledTableCell>
                                                            <StyledTableCell align="right"><Link to={`/edit/${user.id}`}>
                                                                <Edit /> </Link>
                                                                <Link to={`/delete/${user.id}`} className={"my-1"} >
                                                                    <Delete /> </Link>
                                                            </StyledTableCell>
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

        );
}
export default List;