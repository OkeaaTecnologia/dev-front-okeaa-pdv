import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

import '../css/Home.css';

function Home() {

    const navigate = useNavigate(); // Inicialize useNavigate

    const handleRedirect = (path) => {
        navigate(path); // Função para redirecionar
    };

    return (
        <div className="cards-container">
            <Card border="sucess" className="custom-card">
                <Card.Img
                    variant="top"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src="/assets/power-bi.jpg" />
                <Card.Body>
                    <Card.Title>Dashboard 01</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Button variant="secondary" onClick={() => handleRedirect('/Dash01')}>Acessar</Button>
            </Card>

            <Card border="sucess" className="custom-card">
                <Card.Img
                    variant="top"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src="/assets/power-bi.jpg" />
                <Card.Body>
                    <Card.Title>Dashboard 02</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Button variant="secondary" onClick={() => handleRedirect('/Dash02')}>Acessar</Button>
            </Card>

        </div >
    );
}

export default Home;

