import React, { useState } from 'react'
import axios from 'axios'

export const HookPublicaciones = () => {

    const url = "http://127.0.0.1:3000/api/publicacion/";
    const [publicaciones, setPublicaciones] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const logInfo = window.localStorage.getItem('xinfodatax');

    const [Idpub, setIdpub] = useState();
    const [IdUserId, SetIdUserId] = useState();

    const setIdpubli = (id_publicacion) => {
        setIdpub(id_publicacion);
    }

    const SetIdUserIdReq = (id) => {
        SetIdUserId(id);
    }

    // Para comentarios //
    const [dataForm, setDataForm] = useState({});
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }
    
    // Para comentarios //
    const submitHandler = async (event) => {
        event.preventDefault();
        setDataForm({ ...dataForm, ["id_publicacion"]: Idpub });

        try {
            const result = await axios.post(url+"comentar/"+Idpub,  dataForm, {headers: {'Authorization': `Bear ${logInfo}`}});
            const data = (await result).data;
            getPublicaciones(IdUserId);
            getComentarios(Idpub);
        } catch (error) {
            console.log(error);

            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
            } else {
                console.log("Error desconocido")
            }
        }
    }
    
    // Para publicaciones //
    const changeHandlerPub = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value })
    }

    // Para publicaciones //
    const changeHandlerImgPub = (event) =>{
        const imagen = event.target.files[0];
        setDataForm({ ...dataForm, imagen: imagen });
    }

    // Para publicaciones //
    const submitHandlerImgPub = async (event) => {
        event.preventDefault();
        
        try {
            console.log(dataForm);
            const result = await axios.post(url+"/crear", dataForm, {headers: {"Content-Type": "multipart/form-data", 'Authorization' : `Bear ${logInfo}`}});
            const data = (await result).data;
            getPublicaciones(IdUserId);
        } catch (error) {
            console.log(error);
        }
    }

    const getPublicaciones = async (userid) => {
        try {

            const result = await axios.get(url+userid, {headers: {'Authorization': `Bear ${logInfo}`}});
            const data = (await result).data;
            setPublicaciones(data);
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

    const getComentarios = async (idpublicacion) => {
        try {

            const result = await axios.get(url+"comentarios/"+idpublicacion, {headers: {'Authorization': `Bear ${logInfo}`}});
            const data = (await result).data;
            setComentarios(data);
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

    const like = async (idpublicacion) => {
        try {
            const result = await axios.post('http://127.0.0.1:3000/api/publicacion/like/'+idpublicacion, {headers: {'Authorization': `Bear ${logInfo}`}});
            const data = (await result).data;
            getPublicaciones(IdUserId);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
            } else {
                console.log("Error desconocido")
            }
        }
    }

    return {
        comentarios,
        getComentarios,
        setIdpubli,
        changeHandler,
        submitHandler,
        publicaciones,
        getPublicaciones,
        like,
        changeHandlerPub,
        changeHandlerImgPub, 
        submitHandlerImgPub,
        SetIdUserIdReq
    }
}
