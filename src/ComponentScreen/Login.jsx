import React from 'react'
import { HookLoginHelper } from '../Hooks/HookLoginHelper';
import logo from '../assets/img/logo2.png'; // with import
import '../assets/css/style.css';

export const LoginUser = () => {

    const { dataForm, changeHandler, submitHandler, submitHandlerImg } = HookLoginHelper();
    window.localStorage.removeItem('xinfodatax');

    return (
        <>
            <div className='container col-sm-4 col-md-4 col-lg-4 mt-5' id='main' >
                <div className='text-center'>
                    <img src={logo} className='img-fluid' alt="" /> 
                </div>
                <div id="msgerror" className='mb-4' hidden>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <span><strong>Error!</strong> El usuario o la clave ingresados son incorrectos.</span>
                        <button type="button" className="btn-close font-size-10" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-header text-center" style={{background: "#5cff000f" }}>Autenticación</div>
                        <div className="card-body">
                            <form onSubmit={submitHandler} >
                                <div className='mb-3'>
                                    <input onChange={changeHandler} name="nombre_usuario" type='text' className="form-control" placeholder='Usuario' />
                                    <span className="error-input spusuario text-start" hidden>Debe de ingresar un usuario válido</span>
                                </div>
                                <div className='mb-3'>
                                    <input onChange={changeHandler} name="contrasena" type='password' className="form-control" placeholder='Contraseña' />
                                    <span className="error-input spclave text-start" hidden>Ingresa una contraseña</span>
                                </div>
                                <button type='submit' className='btn btn-primary w-100 mb-3' id="btonSubmit"> &nbsp;&nbsp;Iniciar Sesion</button>
                                <p>¿No tienes cuenta? &nbsp;<a href="http://localhost:5173/crearUsuario/">Haz click aqui</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    )
}