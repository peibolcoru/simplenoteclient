import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom";

import noteServices from '../services/noteServices';

export const useNotes = () => {
    const {allNotesWallService} = noteServices;
    const [allNotes,setAllNotes]=useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    
    const [loading,setLoading]=useState(false)
    const idWall = useParams();
    useEffect( ()=>{
        const fetchWalls = async()=>{
            try {
                
                setLoading(true);
                const body = await allNotesWallService(idWall
                    ,searchParams);
                setAllNotes(body?.notes);

            } catch (err) {
                setAllNotes([])
                console.error(err.message)
                console.error(err.response)

            }finally{

                setLoading(false)

            }
        }

        fetchWalls();
    },[searchParams,idWall])

    const deleteNote = async (noteId)=>{
        console.log('Nota borrada',noteId)
        console.log('before',allNotes)
        const newAllNotes = allNotes.filter((note) => note.id !== noteId); 
        
    }

    

    return{allNotes,setAllNotes,searchParams,setSearchParams,loading,setLoading,deleteNote}
}

