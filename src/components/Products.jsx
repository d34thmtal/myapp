import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import axios from 'axios'




export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, [])

    const elimina = (id)=>{
        // alert("Elimina" + id)
        axios.delete("http://localhost:3000/products/"+id)
        .then(response => {
            let productsFiltered = products.filter(p => p._id != id)
            setProducts(productsFiltered)
        })
        .catch(err => console.log(err))
        
    }


    return (
        <Container>
            <h1>Products</h1>
            <ListGroup>
                {products.map(p => <ListGroup.Item key={p._id}>Prodotto: {p.name} Prezzo: {p.price} Descrizione: {p.description} <Button onClick={()=>elimina(p._id)} variant="danger">Elimina</Button></ListGroup.Item>) }
            </ListGroup>
        </Container>
    )
}
