import React, { useState } from 'react'
import axios from 'axios'

export const HookUsuarios = () => {

    const url = "http://127.0.0.1:3000/api/usuario/listar";
    const [list_usuarios, setListUsuarios] = useState([]);
    const logInfo = window.localStorage.getItem('xinfodatax');

    const getUsuarios = async () => {
        try {
            console.log("Consultando...");
            const result = await axios.get(url, {headers: {'Authorization': `Bear ${logInfo}`}});
            const data = (await result).data;
            setListUsuarios(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
                console.log(data);
            } else {
                console.log("Error desconocido")
            }
        }
    }

    return {
        list_usuarios,
        getUsuarios
    }
}
