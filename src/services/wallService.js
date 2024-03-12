// Importamos la variable entorno
const urlApi = import.meta.env.VITE_API_URL


import getToken from '../utils/getToken';

//NUEVO MURO
const newWallService = async (titleWall) => {

    const token = getToken ();

    const res = await fetch(`${urlApi}/walls/addwall`,{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify({title: titleWall})
    })

    const body = await res.json();
    if(!res.ok) throw new Error(body.message)
    return body;
}

//LISTA DE MUROS
const getWallService = async () => {
        const token = getToken();
        const res = await fetch(`${urlApi}/walls`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    })
    const body = await res.json();
    if(!res.ok) throw new Error(body.message)
    return body
}

//BORRAR MURO
const deleteWallService = async (wallId) =>{
    
    const token = getToken();

    const res = await fetch(`${urlApi}/walls/delete/${wallId}`,{
        method : 'DELETE',
        headers:{
            Authorization: token
        }
    })
    const body = await res.json();
    
    return body;

}

export {newWallService,getWallService,deleteWallService}

