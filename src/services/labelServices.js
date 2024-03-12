const urlApi = import.meta.env.VITE_API_URL;

const getAllLabelService = async () => {
    
    const res = await fetch(`${urlApi}/labels`)
    
    const body= await res.json();
    
    if(!res.ok) throw new Error(body.message);
    
    return body;
}

export default {getAllLabelService}
