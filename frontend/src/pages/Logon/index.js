import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import '../../global.css';
import './styles.css';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { id });

            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no Login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>


                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#01A8E5" />
                         Não tenho cadastro
                    </Link>
                </form>
            </section>


        </div>
    );
}
