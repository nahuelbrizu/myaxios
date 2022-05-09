import axios from "axios";
import React,{useEffect, useState} from "react";

const Crypto = () => {
    // 1- setear hooks
    const [search, setSearch] = useState("");
    const [cryptos, setCryptos] = useState([]);

    // 2- funcion get
    const endpoint = "https://api.coingecko.com/api/v3/coins"

    const showData = () => {
        axios.get(endpoint).then((res) => {
            console.log(res.data)
            setSearch(res.data)
        })
    }
useEffect(() => {
        showData()
    },[])


    // 3 - funcon de busqueda


    // 4 - filtrar datos



}
export default Crypto;