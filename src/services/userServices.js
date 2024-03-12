// Importamos la variable entorno
const urlApi = import.meta.env.VITE_API_URL


import getToken from '../utils/getToken';

//REGISTRO DE USUARIO
const registerUserService = async(username, email, password) => {
    const res = await fetch(`${urlApi}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,email,password}),
        })

        const body = await res.json();
        if(!res.ok) throw new Error(body.message);
        return body;
}


//LOGIN DE USUARIO

const loginUserService = async (email , password) =>{
    
        const res = await fetch(`${urlApi}/users/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const body = await res.json();
        if(!res.ok) throw new Error(body.message);
        return body;
   

}

// DATOS DE USUARIO

const getUserDataService = async () =>{
   
    const token = getToken();
    
    const res = await fetch(`${urlApi}/users`, {
        method: 'GET',
        headers: {
            Authorization : token,
        }
    })
    const body = res.json();
    return body;
    
}


export  {registerUserService,loginUserService,getUserDataService};