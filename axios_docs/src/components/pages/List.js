import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from "@mui/material";
import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Modal, Button, TextField} from "@material-ui/core"
import { Edit, Delete} from "@material-ui/icons"

const urlUser= "http://127.0.0.1:3003/users";

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
    const styles = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalInsertar, setModalInsert] = useState(false);
    const [users, setUsers] = useState({
        "user_name":"",
        "password": "",
        "telephone_number": "",
        "birth_date": "",
        "gender": "",
        "first_name": "",
        "last_name": "",
    })


    const handleChange=(e)=>{
        const {name, value}=e.target;
        setUsers(prevState=>({
            ...prevState,
            [name]: value
        }))
        console.log(users);
    }
    const abrirCerrarModalInsertar = () => {
        setModalInsert(!modalInsertar);
        modalInsertar(setUsers);
    }

    useEffect(() => {
        fetch(urlUser)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>New User</h3>
            <TextField name="name" className={styles.inputMaterial} label="name" onChange={handleChange} />
            <br/>
            <TextField name="user name" className={styles.inputMaterial} label='user name' onChange={handleChange}/>
            <br/>
            <TextField name="password" className={styles.inputMaterial} label='password' onChange={handleChange}/>
            <br/>
            <TextField name="last_name" className={styles.inputMaterial} label='last_name' onChange={handleChange}/>
            <br/>
            <TextField name="telephone_number" className={styles.inputMaterial} label='telephone_number' onChange={handleChange}/>
            <div>
                <Button> insertar</Button>
                <Button onClick={abrirCerrarModalInsertar}> Cancelar</Button>
            </div>
        </div>
    )
    if (error) {
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <div><h2 className="text-center">Loading...</h2></div>;
    } else {
        return (
            <div>
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
                        <TableBody> {users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                                <StyledTableCell align="right">{user.user_name}</StyledTableCell>
                                <StyledTableCell align="right">{user.email}</StyledTableCell>
                                <StyledTableCell align="right">{user.last_name}</StyledTableCell>
                                <StyledTableCell align="right">{user.telephone_number}</StyledTableCell>
                                <StyledTableCell align="right">{user.friendships.length}</StyledTableCell>
                                <StyledTableCell align="right">{user.recipes.length}</StyledTableCell>
                                <StyledTableCell align="right"><Edit /> <Delete />
                                    {/*   <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>*/}
                                </StyledTableCell>
                            </StyledTableRow>  ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={modalInsertar}
                    onClose={abrirCerrarModalInsertar}>
                    {bodyInsertar}
                </Modal>
            </div>
        );
    }
}
export default List;