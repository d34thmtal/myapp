import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





export default function NewProduct() {
    // const [nome, setNome] = useState("")
    // const [prezzo, setPrezzo] = useState("")
    // const [descrizione, setDescrizione] = useState("")
    // const [url, setUrl] = useState("")
    const [obj, setObj] = useState({})
    const navigate = useNavigate()

    const handlerChange = (e)=>{
        

        let {name, value} = e.target; //verifica i value in tutti gli input e restituisce il valore
        setObj({
            ...obj,
            [name]:value
        })

        // console.log(e.target.name)
        // setNome(e.target.value)

    }

    const handleSubmit =()=>{
        axios.post("http://localhost:3000/products/", obj)
        .then(response => {navigate("/")})

    }

    return (
        <Container>
            <h1>New Products</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nome Prodotto</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="name" placeholder="inserisci il tuo prodotto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prezzo Prodotto</Form.Label>
                    <Form.Control onChange={handlerChange}  type="number" name="price" placeholder="inserisci il prezzo del tuo prodotto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descrizione Prodotto</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="description" placeholder="inserisci la descrizione del tuo prodotto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Immagine Prodotto</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="image" placeholder="inserisci url img  prodotto" />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>

    )
}



