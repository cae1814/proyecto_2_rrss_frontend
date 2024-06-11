import React, { useState } from 'react'
import axios from 'axios'

const urlInicioSesion = "http://127.0.0.1:3000/api/login/login";

export const HookLogin = () => {

    const [loginUser, setLoginUser] = useState(false);

    const [dataUser, setDataUser] = useState({
        nombre_usuario: "",
        nombre: "",
        correo: ""
    });

    const setLocalStorageLog = (value) => {
        try {
            window.localStorage.setItem('xinfodatax', value);
            location.reload();
        } catch (err) {
            console.log(err.message);
        }
    }

    const setUserId = (value) => {
        try {
            window.localStorage.setItem('ixuserappinfo', JSON.stringify(value));
        } catch (err) {
            console.log(err.message);
        }
    }

    const iniciarSesion = async (nombre_usuario, contrasena) => {
        const dataLoginUser = {
            nombre_usuario,
            contrasena
        };

        try {
            const response = await axios.post(urlInicioSesion, dataLoginUser);
            const data = (await response).data;
            console.log(data);

            if (data.response_code == 0) {
                setLocalStorageLog(data.info_user);
                setUserId(data.user_id);
                window.location.href = "http://localhost:5173/publicaciones";
            } else {
                document.getElementById("msgerror").removeAttribute("hidden");
            }
        } catch (error) {
            console.log("Error");

            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
            } else {
                console.log("Error Inesperado")
            }
        }
    }

    return {
        //propiedades
        loginUser,
        //metodos
        iniciarSesion
    }
}
