import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
        };

        try {
            const response = await api.post('/users', data);

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section className="form">

                    <h1>Faça seu Cadastro</h1>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#01A8E5" />
                         Voltar para Login
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>


        </div>
    );
}
