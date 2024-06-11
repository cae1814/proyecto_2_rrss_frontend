import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginUser } from './ComponentScreen/Login';
import { UsuarioCrear } from './ComponentScreen/UsuarioCrear';
import { Usuarios } from './ComponentScreen/Usuarios';
import { ErrorScreen } from './ComponentScreen/ErrorScreen';
import { PostForm } from './ComponentScreen/PostForm';
import { Publicaciones } from './ComponentScreen/Publicaciones';
import { PublicacionesTodos } from './ComponentScreen/PublicacionesTodos';

export const App = () => {

  const [logInfo, setlogInfo] = useState(window.localStorage.getItem('xinfodatax'));
  const [isLog, setIsLog] = useState(logInfo ? true : false);
  
  const cerrarSesion = () => {
    try {
      window.localStorage.removeItem('xinfodatax');
      setIsLog(false);
      window.location.href= "http://localhost:5173/";
    } catch (err) {
      console.log(err.message);
    }
  }
  
  return (
    <BrowserRouter>
      <Routes>
        {isLog ? <Route path='/todo' element={<PublicacionesTodos />} /> : <Route path='/' element={<LoginUser />} />}
        {isLog ? <Route path='/publicaciones' element={<Publicaciones />} /> : <Route path='/' element={<LoginUser />} />}
        {isLog ? <Route path='/usuarios' element={<Usuarios />} /> : <Route path='/' element={<LoginUser />} />}
        <Route path='/crearUsuario' element={<UsuarioCrear />} />
        <Route path='/' element={<LoginUser />} />
        <Route path='*' element={<LoginUser />} />
      </Routes>
    </BrowserRouter>
  )
}
