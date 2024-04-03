import {createContext, useEffect, useState} from 'react';
import {getWallService} from'../services/wallService';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

// 1->Creamos el contexto
const WallsContext = createContext(null);

// 2->Creamos el componente proveedor de contexto
const WallsProvider = ({children}) =>{

    const [walls,setWalls] = useState([]);
    const [errorWall,setErrorWall] = useState('');
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const { isAuthenticated } = useAuth();
  
    const fetchWalls = async ()=>{
        try {
        setLoading(true)
        const body = await getWallService()
        setWalls(body.data)

        } catch (err) {

            console.error(err)
            setErrorWall(err.message)

        }finally{
            setLoading(false)
        }} 
    useEffect(()=>{
        
            if(isAuthenticated){
                setWalls([])
                fetchWalls()
            }
        },[isAuthenticated])


return(
    <WallsContext.Provider value={{walls,setWalls,errorWall,loading}}>
        {children}
    </WallsContext.Provider>)
}

export {WallsProvider,WallsContext};

    