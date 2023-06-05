import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Products() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, [])

    const elimina = (id) => {
        // alert("Elimina" + id)
        axios.delete("http://localhost:3000/products/" + id)
            .then(response => {
                let productsFiltered = products.filter(p => p._id != id)
                setProducts(productsFiltered)
            })
            .catch(err => console.log(err))

    }
    

    const dettaglio = (id) => {
        navigate('/details/'+id)
    }


    return (
        <Container>
            <h1>Products</h1>
            <ListGroup>
                {products.map(p => (
                    <ListGroup.Item key={p._id}>
                        Prodotto: {p.name} 
                        Prezzo: {p.price} 
                        Descrizione: {p.description} 
                        <Button className='float-end mx-1' onClick={() => elimina(p._id)} variant="danger">Elimina</Button>
                        <Button className='float-end mx-1' onClick={() => dettaglio(p._id)} variant="success">Dettaglio</Button>
                </ListGroup.Item>) )}
            </ListGroup>
        </Container>
    )
}
