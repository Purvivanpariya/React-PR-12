import React, { useEffect, useState } from 'react'
import { db } from './Firebase-config'
import { MdDelete } from "react-icons/md";
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
function Crud() {
  const [note, setNote] = useState('')
  const [record, setRecord] = useState([])
  const connect = collection(db, 'users')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(connect, { note: note })
      setNote('')
      getUser()
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  
  const deleteData = async(id) => {
    try{
       await deleteDoc(doc(db,"users",id));
       alert("Record delete")
       getUser();
    }catch(err){
     console.log(err);
     return false
    }
 }

  const getUser = async () => {
    try {
      let data = await getDocs(connect);
      let res = data.docs.map((val) => (
        { ...val.data(), id: val.id }
      ))
      setRecord(res)
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(()=>{
    getUser()
  })
  return (
    <>
      <center>
        <h1 style={{ color: 'rgb(128, 0, 128)' }}>ToDo List</h1>

        <form  onSubmit={handleSubmit}>


          <input type="text" style={{
            width: '300px', padding: '5px', marginBottom: '35px', fontSize: '10px'
          }} onChange={(e) => setNote(e.target.value)} value={note} placeholder='Add to do...' />

          <button style={{ backgroundColor: "rgb(128, 0, 128)", color: 'white', border: '0', padding: '4px',marginLeft:'5px',borderRadius:'3px'}}>Submit</button>

        </form>
        {
          record.map((val, i) => {
            return (
              <div style={{ width: '365px', backgroundColor: ' #F4ECF7 ' ,padding:'5px'}}>
                <div className="list" style={{}}>
                  <li style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between',padding:'5px', alignItems: 'center' }}>
                    <h3>{val.note}</h3>
                    <span><button onClick={() => deleteData(val.id) } style={{margin:'5px',border:'0',display:'flex',alignItems:'center',padding:'5px',color:'white',borderRadius:'3px',backgroundColor:'rgb(128, 0, 128)'}}>Delete</button></span>
                  </li>
                </div>
              </div>
            )
          })
        }
      </center>
    </>
  )
}

export default Crud