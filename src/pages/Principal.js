import { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { useEffect } from 'react'

const Principal = () => {
    const [ropas, setRopas] = useState([])
    const traerRopas = async() => {
        try {
            let response = await axios.get("https://fakestoreapi.com/products")
            let data = response.data
            setRopas(data)
        } catch (error) {
            console.log(error)
        }
    }
useEffect(() => {
    traerRopas()
}, [])

  return (
    <div className='container'>
        {ropas.map(ropa=>(
            <Card key={ropa.title} ropa={ropa}/>
        ))}
    </div>
  )
}

export default Principal