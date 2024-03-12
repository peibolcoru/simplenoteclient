// Importamos la variable entorno
const urlApi = import.meta.env.VITE_API_URL

import getToken from '../utils/getToken';

//NUEVA NOTA
const newNoteService = async  (formData) =>{
    
    const token = getToken();

    const res = await fetch (`${urlApi}/notes/new`,{
        method: 'POST',
        headers:{
            Authorization : token,
        },
        body: formData
    })
    const body = await res.json();
    if(!res.ok) throw new Error(body.message);
    return body;
}


//SELECCIONAR TODAS LAS NOTAS DE UN MURO
const allNotesWallService = async (wallId,searhParams) =>{
    
    const token = getToken();
    
    const res = await fetch(`${urlApi}/notes/${wallId.id}?${searhParams.toString()}`,{
        method: 'GET',
        headers:{
            Authorization : token,
        }
    })
    
    const body = await res.json();
    
    if(!res.ok) {
        throw new Error(body.message);
    }
    
    return body.data;
    
}

//SELECCIONAR UNA NOTA

const oneNoteService = async (noteId) =>{

    const token = getToken();

    const res = await fetch(`${urlApi}/notes/note/${noteId}`,{
        method: 'GET',
        headers:{
            Authorization: token
        }
        })
    const body = await res.json();
    return body;
}

//ELIMINAR NOTA

const deleteNoteService = async (noteId) =>{

    const token = getToken();

    const res = await fetch(`${urlApi}/notes/delete/${noteId}`,{
        method: 'DELETE',
        headers:{
            Authorization: token
        }
        })
    const body = await res.json();
    if(!res.ok) throw new Error(body.message);
    return body;
}

//EDITAR NOTA

const editNoteService = async (noteId,formData)=>{
    const token = getToken();
    const res = await fetch(`${urlApi}/notes/update/${noteId}`,{
        method: 'PUT',
        headers:{
            Authorization: token
        },
        body: formData
    })
    const body = await res.json()
    if(!res.ok) throw new Error(body.message);
    return(body);

}
export default {newNoteService,allNotesWallService,oneNoteService,deleteNoteService,editNoteService}

