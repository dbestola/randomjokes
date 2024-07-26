import React, { useEffect } from 'react'
import './home.css'
import axios from 'axios'
import { useState } from 'react'




const Home = () => {
 const url = import.meta.env.VITE_URL

 const [jokes, setJokes] = useState([])
 const [isLoading, setisLoading]= useState(false)



const HandleGenerate = () => {
    setisLoading(true)
    axios.get(url).then((res) => {
        console.log(res.data);
        setJokes(res.data)
        console.log(jokes);
        setisLoading(false)
       }).catch((error) => {
           console.log(error);
       })
}
   

    useEffect(() => {
HandleGenerate ()   
    }, [])



  return (
  
    <div className='handleJokes'>
        <p>Jokes Generator</p>
        {
            isLoading ? (<h1>.....loading</h1>) : ( <> <p>Jokes id: {jokes.id} </p>
                <p>{jokes.value}</p> </>
            )
        }
       
       

        <button onClick={() => HandleGenerate ()}>Generate joke</button>

        </div>
 
  )
}

export default Home