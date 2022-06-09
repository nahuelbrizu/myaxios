import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {styled} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Button, Modal, TextField} from "@material-ui/core";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {Delete, Edit} from "@material-ui/icons";

const urlRecipes= "http://127.0.0.1:3003";

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



 const ListRecipes = () => {
    const styles = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalInsertar, setModalInsert] = useState(false);
    const [recipes, setRecipes] = useState({
        "servings": "",
        "country": "",
        "cuisine": "",
        "calories": "",
        "author_id" : ""
    })
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setRecipes(prevState=>({
            ...prevState,
            [name]: value
        }))
        console.log(recipes);
    }
    const abrirCerrarModalInsertar = () => {
        setModalInsert(!modalInsertar);
        modalInsertar(setRecipes);
    }


    useEffect(() => {
        fetch(urlRecipes + "/recipes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRecipes(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>New recipe</h3>
            <TextField name="name" className={styles.inputMaterial} label="name" onChange={handleChange} />
            <br/>
            <TextField name="recipe name" className={styles.inputMaterial} label='recipe name' onChange={handleChange}/>
            <br/>
            <TextField name="password" className={styles.inputMaterial} label='password' onChange={handleChange}/>
            <br/>
            <TextField name="last_name" className={styles.inputMaterial} label='last_name' onChange={handleChange}/>
            <br/>
            <TextField name="telephone_number" className={styles.inputMaterial} label='telephone_number' onChange={handleChange}/>
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
                                <StyledTableCell align="right">servings </StyledTableCell>
                                <StyledTableCell align="right">country</StyledTableCell>
                                <StyledTableCell align="right">cuisine</StyledTableCell>
                                <StyledTableCell align="right">calories</StyledTableCell>
                                <StyledTableCell align="right">author_id</StyledTableCell>
                                <StyledTableCell align="right">Acciones</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody> {recipes.map((recipe) => (
                            <StyledTableRow key={recipe.id}>
                                <StyledTableCell component="th" scope="row">{recipe.id}</StyledTableCell>
                                <StyledTableCell align="right">{recipe.servings}</StyledTableCell>
                                <StyledTableCell align="right">{recipe.country}</StyledTableCell>
                                <StyledTableCell align="right">{recipe.cuisine}</StyledTableCell>
                                <StyledTableCell align="right">{recipe.calories}</StyledTableCell>
                                <StyledTableCell align="right">{recipe.author_id}</StyledTableCell>
                                <StyledTableCell align="right"><Edit /> <Delete />
                                    <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
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
export  default ListRecipes;