import {useEffect, useState} from 'react';
import {getWallService} from'../services/wallService';
import { useParams } from 'react-router-dom';

const useWalls = () => {
    const [walls,setWalls] = useState(null);
    const [errorWall,setErrorWall] = useState('');
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    
    const fetchWalls = async ()=>{
        try {

        const body = await getWallService()
        setWalls(body.data)

        } catch (err) {

            console.error(err)
            setErrorWall(err.message)

        }finally{
            setLoading(false)
        }} 

    useEffect(()=>{
            
            fetchWalls();

        },[])

    return {walls, setWalls,loading}
    }

    
    export {useWalls};