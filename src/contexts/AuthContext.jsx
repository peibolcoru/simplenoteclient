import getToken  from '../utils/getToken';
import {TOKEN_LOCAL_STORAGE_KEY} from '../utils/constants';
import {loginUserService,getUserDataService, registerUserService} from '../services/userServices';
import { createContext, useEffect, useState } from 'react';

// 1->Creamos el contexto
const AuthContext = createContext(null);

// 2->Creamos el componente proveedor de contexto

const AuthProvider= ({children}) =>{
    const [authUser, setAuthUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState('');
    useEffect(() => {
        const fetchUser= async () =>{
            try {
                setLoading(true); 

                const body = await getUserDataService();
                
                setAuthUser(body.data.user);
                setIsAuthenticated(true)
                
            } catch (err) {
                console.error(err.message)
                
            }finally{
                setLoading(false);
            }
        }
        const authToken = getToken();
       
        if(authToken) fetchUser();     
        },[setIsAuthenticated]) 

    const authLogin = async (email,pass) => {
        try {
                setLoading(true);
                const body = await loginUserService(email,pass);
             
                if(body.data?.token){ 
                    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, body.data.token)
                    
                    setIsAuthenticated(true);
                }else{alert("respuesta")} 

            
        } catch (err) {
            setError(err)
        }finally{
            setLoading(false);
        }}
    
    const authLogout = () =>{
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        setAuthUser(null);
        setIsAuthenticated(false);
    }

    const authRegisterUser = async(username,email,pass,pass2) => {
        if(pass !== pass2){
            setError('Passwords do not match');
           return 
        }
        try {
            setLoading(true);
            const body = await registerUserService(username,email,pass);
            return body
            
        } catch (err) {
            setError(err)
            console.error(err)
        }finally{
            setLoading(false);
        }
        
    }

    return(
        <AuthContext.Provider value={{authUser,authLogin, authLogout, isAuthenticated, authRegisterUser,loading,error,setError}}>
        {children}
    </AuthContext.Provider>
)
}

export {AuthProvider,AuthContext};