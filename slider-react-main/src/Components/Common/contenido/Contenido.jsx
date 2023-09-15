import { useState, useEffect } from "react"


const Contenido = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{

       setImg(arr[contador])

    }, [contador] )
    
    console.log("Me ejecute tantas veces como se renderiza el componente")

  return (
    <div style={{
  
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'

    }}>
        <h4>{contador}</h4>
        <img style={{
          width: 400,
          height: 400,
          borderRadius: '40px',
          border: 'solid black 3px'
          
        }} src={img} alt="" />

        <div style={{
          width: '100%',
          height: 100,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>

        <button style={{color: 'white', background: 'black', cursor: 'pointer', width: '90px', height: '40px', fontSize: '15px', borderRadius: '5px'}} onClick={ ()=> setContador( contador  - 1 ) }>Izquierda</button>
        <button style={{color: 'white', background: 'black', cursor: 'pointer', width: '90px', height: '40px', fontSize: '15px', borderRadius: '5px'}} onClick={ () => setContador( contador + 1) }>Derecha</button>
        </div> 
       
    </div>
   
  )
}

export default Contenido
