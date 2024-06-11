import React, { useEffect, useState } from 'react';
import { HookPublicaciones } from '../Hooks/HookPublicaciones';
import "../assets/font-awesome/css/font-awesome.min.css";
import logo from '../assets/img/logo2.png'; // with import

export const Publicaciones = () => {

    const { changeHandler, submitHandler, changeHandlerPub, changeHandlerImgPub, submitHandlerImgPub, publicaciones, getPublicaciones, like, setIdpubli, comentarios, getComentarios, SetIdUserIdReq } = HookPublicaciones();
    const [nombre, setNombre] = useState("");
    const [id_publicacion, setIdPublicacion] = useState();

    useEffect(() => {
        getPublicaciones(-1);
        SetIdUserIdReq(-1);
    }, []);

    const megusta = (val) => {
        like(val);
    }

    const comentar = (val, id_publicacion) => {
        setNombre(val);
        setIdPublicacion(id_publicacion);
        setIdpubli(id_publicacion);
    }

    const vercomentarios = async (p_id_publicacion) => {
        getComentarios(p_id_publicacion);
    }

    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-12 row text-start">
                <div className="mt-1 ml-4 col-sm-3 col-md-3 col-lg-3 ">&nbsp;
                    <img src={logo} className='img-fluid' alt="" /> 
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <nav className="nav nav-pills nav-pills menu-app header">
                       <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link " href="/todo"><i className='fa fa-home' style={{ fontSize: "16px" }}></i>&nbsp;Publicaciones&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/publicaciones" data-bs-toggle='modal' data-bs-target='#publicarmodal'><i className='fa fa-edit' style={{ fontSize: "16px" }}></i>&nbsp;Postear&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/publicaciones"><i className='fa fa-arrow-circle-up' style={{ fontSize: "16px" }}></i>&nbsp;Mis publicaciones&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/"><i className='fa fa-thumbs-up' style={{ fontSize: "16px" }}></i>&nbsp;Likes&nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/usuarios"><i className='fa fa-users' style={{ fontSize: "16px" }}></i>&nbsp;Usuarios&nbsp;</a>
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
                            publicaciones.length > 0 &&
                            publicaciones.map((item) => (
                                <div key={item.id_publicacion} className="col-sm-8 col-md-8 col-lg-8">
                                <div className="card mb-5 mt-5">
                                    <div className="card-header font-color-white">
                                        <div className='col-sm-12 col-md-12 col-lg-12 row'>
                                            <div className='col-sm-4 col-md-4 col-lg-4 fon-size-13'><i className='fa fa-user font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;{item.nombre_completo}</div>
                                            <div className='col-sm-4 col-md-4 col-lg-4'></div>
                                            <div className='col-sm-4 col-md-4 col-lg-4 text-end fon-size-11'><i className='fa fa-calendar-o font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;<b>Publicado:</b> {item.fecha_creacion}</div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-7 col-md-7 col-lg-7 text-start mx-3 ms-3 mt-1 mb-1 row border rounded'>
                                            <img src={`data:image/png;base64,${item.foto}`} className="card-img-top mt-1" />
                                            <div className="col mb-1">
                                                <button type="button" className="btn btn-primary mt-1 btn-sm fon-size-11" onClick={() => megusta(item.id_publicacion)}><i className='fa fa-thumbs-up font-color-white' style={{ fontSize: "17px" }}></i>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "11px" }} className="badge background-white font-color-blue">&nbsp;{item.megusta}&nbsp;</span></button>&nbsp;&nbsp;
                                                <button type='button' className='btn btn-primary mt-1 btn-sm fon-size-11' data-bs-toggle='modal' data-bs-target='#commodal' onClick={() => comentar(item.nombre_completo, item.id_publicacion)}><i className='fa fa-comment font-color-white' style={{ fontSize: "17px" }}></i>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "11px" }} className="badge background-white font-color-blue">&nbsp;{item.comentarios}&nbsp;</span></button>&nbsp;&nbsp;
                                                <button className="btn btn-primary btn-sm fon-size-12 mt-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={() => vercomentarios(item.id_publicacion)} ><i className='fa fa-external-link font-color-white' style={{ fontSize: "13px" }}></i>&nbsp;&nbsp;Ver comentarios&nbsp;<span className="badge background-white font-color-blue fon-size-10">&nbsp;{item.comentarios}&nbsp;</span></button>
                                            </div>
                                        </div>
                                        <div className='col-sm-4 col-md-4 col-lg-4 text-centered border mt-1 mb-4 mb-9 rounded'>
                                            <p className="card-text fon-size-13 mt-1"><b>Publicación:</b>&nbsp;<br></br> {item.comentario}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }                    
                    </div>
                </div>
                <div className="mt-2 ml-4 col-sm-2 col-md-2 col-lg-2">&nbsp;
                </div>
            </div>

            <div className="modal fade" id="commodal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fon-size-14" id="exampleModalLabel">Comentario</h1>
                            <button type="button" className="btn-close font-color-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label className="col-form-label fon-size-14">Para:</label>
                                    <input readOnly type="text" className="form-control fon-size-14" id="recipient-name" value={nombre} />
                                    <input hidden type="text" onChange={changeHandler} className="form-control" name="id_publicacion" value={id_publicacion} />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label fon-size-14" >Comentario:</label>
                                    <textarea className="form-control fon-size-14" onChange={changeHandler} name="comentario" minLength={3} maxLength={4000} placeholder="Escribe tu comentario"></textarea>
                                </div>
                                <div className="modal-footer text-center">
                                    <button type="button" className="btn btn-secondary btn-sm fon-size-11" data-bs-dismiss="modal"><i className='fon-size-13 fa fa-times-circle font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;Cancelar</button>
                                    <button type="submit" className="btn btn-primary btn-sm fon-size-11" data-bs-dismiss="modal"><i className='fon-size-13 fa fa-check-circle font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="publicarmodal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fon-size-14" id="exampleModalLabel">Comentario</h1>
                            <button type="button" className="btn-close font-color-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandlerImgPub}>
                                <div className="mb-3">
                                    <label className="col-form-label fon-size-14" >Comentario:</label>
                                    <textarea rows={2} className="form-control fon-size-14" onChange={changeHandlerPub} name="comentario" minLength={3} maxLength={4000} placeholder="Escribe tu comentario"></textarea>
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label fon-size-14" >Imagen</label>
                                    <input name="imagen" type='file' className="form-control fon-size-14" onChange={changeHandlerImgPub} />
                                    </div>
                                <div className="modal-footer text-center">
                                    <button type="button" className="btn btn-secondary btn-sm fon-size-11" data-bs-dismiss="modal"><i className='fon-size-13 fa fa-times-circle font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;Cancelar</button>
                                    <button type="submit" className="btn btn-primary btn-sm fon-size-11" data-bs-dismiss="modal"><i className='fon-size-13 fa fa-check-circle font-color-white' style={{ fontSize: "15px" }}></i>&nbsp;Publicar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <p className="font-size-13 font-color-gray" id="offcanvasScrollingLabel">Comentarios</p><hr></hr>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                {
                    
                    comentarios.length > 0 &&
                    comentarios.map((item) => (
                        <div key={item.id} className="card mb-2">
                            <div className="card-header fon-size-11 font-color-white">
                                <div className='col-sm-12 col-md-12 col-lg-12 row'>
                                    <div className='col-sm-5 col-md-5 col-lg-5 fon-size-11'><i className='fa fa-user font-color-white' style={{ fontSize: "12px" }}></i>&nbsp;{item.nombre_completo}</div>
                                    <div className='col-sm-1 col-md-1 col-lg-1'></div>
                                    <div className='col-sm-6 col-md-6 col-lg-6 text-end fon-size-11'><b></b><i className='fa fa-calendar-o font-color-white' style={{ fontSize: "12px" }}></i>&nbsp;{item.fecha_creacion}</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text fon-size-11 font-color-black">{item.comentario}</p>
                            </div>
                        </div>            
                    ))}
                </div>
            </div>
        </>
    )
}
