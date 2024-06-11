import React from 'react'
import { HookUsuarioCrear } from '../Hooks/HookUsuarioCrear'

export const PostForm = () => {

    const { changeHandler,
        submitHandlerImg,
        changeHandlerImg
    } = HookUsuarioCrear("http://127.0.0.1:3000/api/publicacion/crear", 1);

    return (
        <div className='container' >
            <h1 className='mt-5'>Creación de Usuarios</h1>

            <form onSubmit={submitHandlerImg} >
                <div className='mb-3'>
                    <label className="form-label">Comentario</label>
                    <input name="comentario" type='text' className="form-control" onChange={changeHandler} />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Imagen</label>
                    <input name="imagen" type='file' className="form-control" onChange={changeHandlerImg} />
                </div>

                <button className='btn btn-primary w-100' >Enviar Datos</button>

            </form>
        </div>
    )
}
