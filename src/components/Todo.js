import React, { useState } from 'react'

function TodoList()
{
    const [activity,setActivity]=useState("");
    
    const [listdata,setlistData]=useState([]);
   
   
    function addActivity() 
    {
        // setlistData([listdata,activity])
        // console.log(listdata)
        setlistData((listData)=>
        {
            const updatedList =([listdata,activity])
            setActivity('')
            return updatedList
        })
    }

    function removeActivity(i){
        const updatedListdata=listdata.filter((elem,id)=>
        {
       return i!=id;
 })
 setlistData(updatedListdata);
}
function deleteall(){
    setlistData([])
}
function EditActivity(){
    setlistData([])
}
    return(
       
        <>
        <div className='container'>
      <div className='header'>TodoList</div>


      <input type='text' placeholder='add activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>

      <button onClick={addActivity}>Add task</button>

      {/* <input type='text' placeholder='add activit/y' value={activity} onChange={(e)=>setActivity(e.target.value)}/>

    <button onClick={EditActivity}>Edit</button>
 
 */}
      <p className='list-heading'>Here is your list</p>
      {
        listdata != [] && listdata.map ((data,i)=>{
            return(
                <>
                <p
                   key={i}>
                    <div className='listdata'>{data}</div> 
                    <button onClick={()=>removeActivity(i)}>Delete</button>

                </p>

                </>
            )
        }
      )}
      {
      
         listdata.length>=1 &&
        <button onClick={deleteall}>Delete all</button>}       
        </div>
        </>
       
    )
}

export default TodoList
