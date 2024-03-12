import { useState } from 'react';
import noteServices from '../services/noteServices';

const useSaveNote =() => {
  const [loading, setLoading] = useState(false);

  
  const handleSaveNote = async (title, text, stat, priority,wallId) => {
      try {
        setLoading(true);
        const {newNoteService} = noteServices;
        const formData = new FormData()
        formData.append('title', title);
        formData.append('text', text);
        formData.append('status', stat);
        formData.append('labelId', priority);
        formData.append('wallId', wallId);
        
      await newNoteService(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditNote = async (noteId,title,text,stat,priority,wallId) =>{
    try {
        const {editNoteService}= noteServices;
        setLoading(true)
        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        formData.append('status', stat);
        formData.append('labelId', priority);
        formData.append('wallId', wallId);
        
        await editNoteService(noteId,formData)

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

  }
  
  const handleDeleteNote = async (noteId) =>{
    try {
      
      setLoading(true)
      const {deleteNoteService} = noteServices;
      await deleteNoteService(noteId);
      
    } catch (err) {
      console.error(err)
    } finally{
      setLoading(false)
    }
  }

return { handleSaveNote,handleEditNote,handleDeleteNote, loading };
}
export default useSaveNote;
