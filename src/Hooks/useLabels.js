import { useEffect, useState } from "react"

import labelServices from '../services/labelServices'

const useLabels = () => {
    const {getAllLabelService}=labelServices;
    const [labels,setLabels] = useState([]);
    const [errorLabels,setErrorLabels] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchLabels = async ()=>{
            try {
                setLoading(true)

                const body = await getAllLabelService()
                setLabels(body.data);
                
            } catch (err) {
                console.error(err)
                setErrorLabels(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchLabels();
    },[])

    return {labels,loading}
}

export {useLabels}