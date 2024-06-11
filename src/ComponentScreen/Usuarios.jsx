import React, { useEffect, useState } from 'react';
import { HookUsuarios } from '../Hooks/HookUsuarios';
import "../assets/font-awesome/css/font-awesome.min.css";
import logo from '../assets/img/logo2.png';

export const Usuarios = () => {

    const { list_usuarios, getUsuarios} = HookUsuarios();
        
    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-12 row text-start">
                <div className="col-sm-3 col-md-3 col-lg-3">&nbsp;
                    <img src={logo} className='img-fluid' alt="" /> 
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <nav className="nav nav-pills nav-pills menu-app header">
                       <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link " href="/todo"><i className='fa fa-home' style={{ fontSize: "16px" }}></i>&nbsp;Publicaciones&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="" data-bs-toggle='modal' data-bs-target='#publicarmodal'><i className='fa fa-edit' style={{ fontSize: "16px" }}></i>&nbsp;Postear&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/publicaciones"><i className='fa fa-arrow-circle-up' style={{ fontSize: "16px" }}></i>&nbsp;Mis publicaciones&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/"><i className='fa fa-thumbs-up' style={{ fontSize: "16px" }}></i>&nbsp;Likes&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/usuarios"><i className='fa fa-users' style={{ fontSize: "16px" }}></i>&nbsp;Usuarios&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/"><i className='fa fa-user' style={{ fontSize: "16px" }}></i>&nbsp;Perfil&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className='fa fa-sign-out' style={{ fontSize: "16px" }}></i>&nbsp;Salir&nbsp;</a>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className='container' >
                        {
                            list_usuarios.length > 0 &&
                            list_usuarios.map((item) => (
                                <div key={item.id} className="col-sm-8 col-md-8 col-lg-8">
                                    <div className="card mt-2" style={{width: "100%"}}>
                                        <div className="text-center mt-3 mb-1">
                                            <img src={`data:image/png;base64,${item.foto}`} className="card-img-top" style={{width: "15%", height: "100%"}}/>
                                        </div>
                                        <div className="card-body">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td className='font-size-15'><b>Usuario</b></td>
                                                    <td className="text-start"><span className="badge text-bg-primary" style={{fontSize: "13px"}}>{item.nombre_usuario}</span></td>
                                                    <td><b>Publicaciones</b></td>
                                                    <td><span className="badge text-bg-primary text-start">{item.publicaciones}</span></td>
                                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Nombre</b></td>
                                                    <td className='text-start'>{item.nombre_completo}</td>
                                                    <td><b>Likes recibidos</b></td>
                                                    <td><span className="badge text-bg-primary text-start">{item.megusta}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Correo</b></td>
                                                    <td className="text-start">{item.correo}</td>
                                                    <td><b>Comentarios recibidos</b></td>
                                                    <td><span className="badge text-bg-primary text-start">{item.comentarios}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Activo desde</b></td>
                                                    <td className="text-start"><span className="badge text-bg-success">{item.fecha_creacion}</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            ))
                        }                    
                    </div>
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1 text-start">&nbsp;
                    <img src={logo} className='img-fluid' alt="" /> 
                </div>
            </div>
        </>
    )
}
