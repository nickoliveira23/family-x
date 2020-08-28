import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col } from 'react-bootstrap';

import api from '../../services/api';

import './styles.css';

export default function EditMember() {
    const [member, setMember] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [situation, setSituation] = useState('');
    const [birth, setBirth] = useState('');
    const [rg, setRg] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [zip, setZip] = useState('');
    const [id_member, setId_member] = useState(0);




    const history = useHistory();

    const userId = localStorage.getItem('userId');

    return (
        <div className="new-member-container">
            <div className="content">
                <Form>
                    <Form.Row className="space">
                        <Col xs={7}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="João Alves da Silva"
                            /* value={name}
                            onChange={e => setName(e.target.value)} */
                            />
                        </Col>
                        <Col>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="e-mail@gmail.com"
                            /* value={email}
                            onChange={e => setEmail(e.target.value)} */
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="space">
                        <Col xs={6}>
                            <Form.Label>Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="24/01/2000"
                            /* value={birth}
                            onChange={e => setBirth(e.target.value)} */
                            />
                        </Col>
                        <Col>
                            <Form.Label>RG</Form.Label>
                            <Form.Control
                                placeholder="50.149.996-9"
                            /* value={rg}
                            onChange={e => setRg(e.target.value)} */
                            />
                        </Col>
                    </Form.Row >
                    <Form.Row className="space">
                        <Col xs={6}>
                            <Form.Label>Rua</Form.Label>
                            <Form.Control
                                placeholder="Rua Loefgren"
                            /*  value={street}
                             onChange={e => setStreet(e.target.value)} */
                            />
                        </Col>
                        <Col>
                            <Form.Label>Número</Form.Label>
                            <Form.Control
                                placeholder="2109"
                            /* value={number}
                            onChange={e => setNumber(e.target.value)} */
                            />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control
                                placeholder="Vila Clementino"
                            /* value={neighborhood}
                            onChange={e => setNeighborhood(e.target.value)} */
                            />
                        </Col>
                    </Form.Row >
                    <Form.Row className="space">
                        <Col xs={4}>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                placeholder="São Paulo"
                            /*  value={city}
                             onChange={e => setCity(e.target.value)} */
                            />
                        </Col>
                        <Col xs={2}>
                            <Form.Label>UF</Form.Label>
                            <Form.Control
                                placeholder="SP"
                            /* value={uf}
                            onChange={e => setUf(e.target.value)} */
                            />
                        </Col>
                        <Col xs={2}>
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                placeholder="04040-030"
                            /*  value={zip}
                             onChange={e => setZip(e.target.value)} */
                            />
                        </Col>
                        <Col>
                            <Form.Label>Situação</Form.Label>
                            <Form.Control
                                placeholder="Ativo"
                            /* value={situation}
                            onChange={e => setSituation(e.target.value)} */
                            />
                        </Col>

                    </Form.Row>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#01A8E5" />
                        Voltar para Home
                    </Link>
                </Form>




            </div>

        </div>
    );
}